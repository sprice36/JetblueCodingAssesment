// TODO: Implement this component for the assignment
// This is just a template to show the expected structure

import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useAirportDetails } from '../hooks/useAirports';
// import type { AirportDetails as AirportDetailsType } from '../types/airport.types';

const AirportDetails: React.FC = () => {
  // TODO: Get airport code from URL params
  //  const { code } = useParams<{ code: string }>();

  // TODO: Use the custom hook for fetching airport details
  // const { airportDetails, loading, error } = useAirportDetails(code);

  // // TODO: Handle loading and error states
  // if (loading) {
  //   return <div className="loading">Loading airport details...</div>;
  // }

  // if (error) {
  //   return <div className="error">Error: {error}</div>;
  // }

  // if (!airportDetails) {
  //   return <div className="error">Airport not found</div>;
  // }

  return (
    <div className="airport-details-container">
      {/* TODO: Breadcrumb navigation */}
      {/* <nav className="breadcrumb">{<Link to="/">← Back to Routes</Link>}</nav> */}

      {/* TODO: Airport Details Content */}
      <div className="airport-details-content">
        <header className="airport-header">
          {/* {<h1>{airportDetails.fullName}</h1>}
          {<h2>{airportDetails.cityName}</h2>} */}
        </header>

        <section className="airport-description">
          <h3>About This Destination</h3>
          {/* {<p>{airportDetails.description}</p>} */}
        </section>

        <section className="things-to-do">
          <h3>Things to Do</h3>
          <ul>
            {/* TODO: Map over airportDetails.thingsToDo */}
            {/* {airportDetails.thingsToDo?.map((activity: string[], index: number) => (
              <li key={index}>{activity}</li> */}
            {/* ))} */}
          </ul>
        </section>

        {/* TODO: Optional - Display meta tags */}
        <section className="meta-tags">
          <h3>Categories</h3>
          <div className="tags">
            {/* TODO: Map over airportDetails.meta
            {airportDetails.meta?.map((tag: string, index: number) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))} */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AirportDetails;
