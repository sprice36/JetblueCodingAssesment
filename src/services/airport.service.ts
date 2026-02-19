import { API_ENDPOINTS } from '../constants/airport.constants';
import type { Airport, ApiResponse } from '../types/airport.types';
// import type { Airport, ApiResponse, AirportDetails } from '../types/airport.types';
import { getUniqueValues } from '../utils/array.utils';
import { apiService } from './api.service';

/**
 * Service for managing airport data and operations
 */
export class AirportService {
  /**
   * ✅ IMPLEMENTED - Get all airports from API
   * This method is already complete and shows the pattern for API calls
   */
  async getAllAirports(): Promise<Airport[]> {
    const response = await apiService.get<ApiResponse<Airport>>(
      API_ENDPOINTS.AIRPORTS
    );
    return response.airport ?? [];
  }

  /**
   * ✅ IMPLEMENTED - Get unique origin airports
   * This shows how to process and transform data
   */
  async getOriginAirports(): Promise<string[]> {
    const airports = await this.getAllAirports() ?? null;
    return getUniqueValues(airports, 'OriginAirportCode');
  }

  // ❌ TODO: Implement these methods for the assignment
  // Candidates should follow the patterns established above

  /**
   * TODO: Get destinations for a specific origin airport
   * Should filter airports array and return unique destinations
   */
  //  async getDestinationsForOrigin(origin: string): Promise<string[]> {
  //  // Implementation needed
  //    const originAirports = await getOriginAirports()
  //    const response = (await this.get)
  //  }

  /**
   * TODO: Get airport details for a specific airport code
   * Should call the airportDetails endpoint
   */
  //  async getAirportDetails(code: string): Promise<AirportDetails | null> {
  // // Implementation needed
  //    const airportDetails = (await apiService.get<ApiResponse<AirportDetails>>(API_ENDPOINTS.AIRPORT_DETAILS));
  //    return airportDetails ?? null;
  //   }

  /**
   * TODO: Get filtered routes based on multiple filter criteria
   * Should apply IsSeasonal, IsJetBlue, IsInterline filters
   */
  // async getFilteredRoutes(origin: string, filters: RouteFilters): Promise<Airport[]> {
  //   // Implementation needed - use filterByMultipleConditions from utils
  // }

  /**
   * TODO: Get airports that match specific meta tags (for Part 2)
   * Should filter airport details by meta field
   */
  // async getAirportsByMetaTags(tags: string[]): Promise<AirportDetails[]> {
  //   // Implementation needed for live interview portion
  // }
}

// Export singleton instance
export const airportService = new AirportService();
