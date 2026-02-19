import { useEffect, useState } from 'react';
import { airportService } from '../services/airport.service';
import type { Airport } from '../types/airport.types';

/**
 * Custom hook for managing loading states
 */
export const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );

  const setLoadingFor = (key: string, isLoading: boolean) => {
    setLoadingStates((prev) => ({ ...prev, [key]: isLoading }));

    // Update global loading based on any active operations
    const hasActiveLoading = Object.values({
      ...loadingStates,
      [key]: isLoading,
    }).some((state) => state);
    setLoading(hasActiveLoading);
  };

  const isLoadingFor = (key: string) => loadingStates[key] || false;

  const clearAll = () => {
    setLoadingStates({});
    setLoading(false);
  };

  return { loading, setLoading, setLoadingFor, isLoadingFor, clearAll };
};

/**
 * Custom hook for managing error states
 */
export const useError = () => {
  const [error, setError] = useState<string | null>(null);

  const handleError = (err: any, context?: string) => {
    const errorMessage = context
      ? `Error in ${context}: ${err.message || err}`
      : `Error: ${err.message || err}`;

    console.error('🔴', errorMessage);
    setError(errorMessage);
  };

  const clearError = () => setError(null);

  return { error, handleError, clearError };
};

/**
 * ✅ IMPLEMENTED - Custom hook for fetching airports
 * This hook is already complete and shows the pattern for data fetching
 */
export const useAirports = () => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const { loading, setLoading } = useLoading();
  const { error, handleError } = useError();

  useEffect(() => {
    const fetchAirports = async () => {
      setLoading(true);
      try {
        const data = await airportService.getAllAirports();
        setAirports(data);
      } catch (err) {
        handleError(err, 'fetching airports');
      } finally {
        setLoading(false);
      }
    };

    fetchAirports();
  }, []);

  return { airports, loading, error };
};

/**
 * ✅ IMPLEMENTED - Custom hook for fetching origin airports
 * This shows data transformation patterns
 */
export const useOriginAirports = () => {
  const [origins, setOrigins] = useState<string[]>([]);
  const { loading, setLoading } = useLoading();
  const { error, handleError } = useError();

  useEffect(() => {
    const fetchOrigins = async () => {
      setLoading(true);
      try {
        const data = await airportService.getOriginAirports();
        setOrigins(data);
      } catch (err) {
        handleError(err, 'fetching origin airports');
      } finally {
        setLoading(false);
      }
    };

    fetchOrigins();
  }, []);

  return { origins, loading, error };
};

// ❌ TODO: Implement these hooks for the assignment
// Candidates should follow the patterns established above

/**
 * TODO: Custom hook for fetching airport details
 * Should fetch details for a specific airport code
 */
// export const useAirportDetails = (code: string) => {
//   // Implementation needed
//   const [details, setAirportDetails] = useState<object | null>();
//   const { loading, setLoading } = useLoading();
//   const { error, handleError } = useError();

//   useEffect(() => {
//     const fetchAirportDetails = async () => {
//     setLoading(true);
//     try {
//       const val: string = code;
//       const airportDetails: object | null = await airportService.getAirportDetails(val) ;
//       setAirportDetails(airportDetails);
//     } catch (err) {
//       handleError(err, 'fetching airport Details');
//     } finally {
//       setLoading(false);
//     }
//   };

//     fetchAirportDetails();
//   }, []);
//   return { details, loading, error};
// };

/**
 * TODO: Custom hook for fetching destinations for an origin
 * Should update when origin changes
 */
//  export const useDestinations = (origin: string | null) => {
//   // Implementation needed
//   const [destinations, setDestination] = useState<string>();
//   const { loading, setLoading } = useLoading();
//   const { error, handleError } = useError();

//   useEffect(() => {
//     const fetchDestinations = async () => {
//       setLoading(true); 
//       try {
//         const data;
//       } catch (error) {
//         handleError(error)
//       } finally {
//        setLoading(false);
//       }
//     }
//   })
   

//   return { destinations, loading }
// };

/**
 * TODO: Custom hook for filtered routes
 * Should handle multiple filter states and update dynamically
 */
//  export const useFilteredRoutes = (origin: string | null, filters: RouteFilters) => {
// //   // Implementation needed

//   return { routes, routesLoading};
//  };
