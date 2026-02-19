// TODO: Implement this component for the assignment
// This is just a template to show the expected structure

import React, { useState } from 'react';
// import { useOriginAirports, useDestinations, useFilteredRoutes } from '../hooks/useAirports';
import { useOriginAirports } from '../hooks/useAirports';

// import { filterByMultipleConditions } from '../utils/array.utils';
import type { RouteFilters } from '../types/airport.types';

const Home: React.FC = () => {
  // TODO: Implement state management
  const [selectedOrigin, setSelectedOrigin] = useState<string | null>(null);

  const [filters, setFilters] = useState<RouteFilters>({});

  // TODO: Use the custom hooks
  // const { origins, loading: originsLoading, error: originsError } = useOriginAirports();

  // const { destinations, loading: destinationsLoading } = useDestinations(selectedOrigin);

  // const { routes, loading: routesLoading } = useFilteredRoutes(selectedOrigin, filters);

  // TODO: Implement event handlers
  const handleOriginChange = (origin: string) => {
    setSelectedOrigin(origin);
  };

  const handleFilterChange = (
    filterKey: keyof RouteFilters,
    value: boolean
  ) => {
    setFilters((prev) => ({ ...prev, [filterKey]: value }));
  };

  // const handleDestinationClick = (code: string) => {
  //   // Navigate to airport details page
  //   // Use: navigate(`/airport/${code}`);
  //   //useFilteredRoutes
  // };

  return (
    <div className="home-container">
      <h2>Flight Routes Explorer</h2>

      {/* TODO: Origin Airport Dropdown */}
      {/* <div className="form-group">
        <label htmlFor="origin-select">Select Origin Airport:</label>
        <select
          id="origin-select"
          className="form-control"
          value={selectedOrigin || ''}
          onChange={(e) => handleOriginChange(e.target.value)}
        >
          <option value="">Choose an origin airport...</option>
          {/* TODO: Map over origins */}
         {/* {origins?.map((origin) => { */}
          {/* return (
            <option>
              {origin}
            </option>
          )
         })}
        </select>
      </div>  */}

      {/* TODO: Filter Checkboxes */}
      {/* <div className="filters-section">
        <h3>Filters:</h3>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input
              type="checkbox"
              id="seasonal"
              checked={filters.IsSeasonal || false}
              onChange={(e) => handleFilterChange('IsSeasonal', e.target.checked)}
            />
            <label htmlFor="seasonal">Seasonal Routes Only</label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="jetblue"
              checked={filters.IsJetBlue || false}
              onChange={(e) => handleFilterChange('IsJetBlue', e.target.checked)}
            />
            <label htmlFor="jetblue">JetBlue Routes Only</label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              id="interline"
              checked={filters.IsInterline || false}
              onChange={(e) => handleFilterChange('IsInterline', e.target.checked)}
            />
            <label htmlFor="interline">Interline Routes Only</label>
          </div>
        </div>
      </div> */}

      {/* TODO: Destinations List */}
      {/* <div className="destinations-section">
        <h3>Available Destinations:</h3>
        {/* TODO: Show loading state */}
        {/* TODO: Show error state */}
        {/* TODO: Map over filtered destinations */}
        {/* <div className="destinations-grid"> */}
          {/* TODO: Destination cards that navigate to details page */}
        {/* </div> */}
      {/* </div>  */}
    </div>
  );
};

export default Home;
