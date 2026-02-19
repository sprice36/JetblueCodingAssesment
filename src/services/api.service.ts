import { API_BASE_URL } from "../constants/airport.constants";

interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retryAttempts: number;
  enableLogging: boolean;
}

const config: ApiConfig = {
  baseUrl: API_BASE_URL,
  timeout: 10000,
  retryAttempts: 3,
  enableLogging: true,
};

/**
 * Enhanced fetch wrapper with error handling, retry logic, and caching
 */
class ApiService {
  private cache = new Map<string, { data: any; timestamp: number }>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  /**
   * Generic GET request with caching and error handling
   */
  async get<T>(endpoint: string, useCache = true): Promise<T> {
    const url = `${config.baseUrl}${endpoint}`;

    // Check cache first
    if (useCache && this.cache.has(url)) {
      const cached = this.cache.get(url)!;
      if (Date.now() - cached.timestamp < this.CACHE_DURATION) {
        if (config.enableLogging) {
          console.log(`📦 Cache hit: ${endpoint}`);
        }
        return cached.data;
      }
    }

    let lastError: Error | null = null;

    // Retry logic
    for (let attempt = 1; attempt <= config.retryAttempts; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), config.timeout);

        const response = await fetch(url, {
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Cache the response
        if (useCache) {
          this.cache.set(url, { data, timestamp: Date.now() });
        }

        if (config.enableLogging) {
          console.log(`✅ API Success: ${endpoint}`);
        }

        return data;
      } catch (error) {
        lastError = error instanceof Error ? error : new Error("Unknown error");

        if (attempt < config.retryAttempts) {
          if (config.enableLogging) {
            console.warn(
              `⚠️ API retry ${attempt}/${config.retryAttempts}: ${endpoint}`
            );
          }
          // Wait before retrying (exponential backoff)
          await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
        }
      }
    }

    if (config.enableLogging) {
      console.error(`❌ API Error: ${endpoint}`, lastError);
    }

    throw lastError || new Error("Unknown API error");
  }

  /**
   * Clear all cached requests
   */
  clearCache(): void {
    this.cache.clear();
  }
}

// Export singleton instance
export const apiService = new ApiService();
