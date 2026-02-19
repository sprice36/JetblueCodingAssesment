import './App.css';
// import { Home, AirportDetails } from 'components';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="app-container">
      <header className="app-header">
        <h1>✈️ Airline Routes Explorer</h1>
       <nav>
          {/* TODO: Add navigation links here when you implement routing */}
         <Link to="/">Home</Link>
         {/* <Link to="/explore-by-interest">Explore by Interest</Link> */}
        </nav>
      </header> 

      <main className="app-main">
        {/* TODO: Add Router and Routes here */}
        <Routes>
          {<Route path="/" element={<Home />} />}
          {/* /* <Route path="/airport/:code" element={<AirportDetails />} /> */}
        </Routes> 

        {/* Temporary content until routing is implemented */}
            {/* <div className="welcome-message">
           <h2>Welcome to the Flight Routes Explorer!</h2>
           <p>This is your starting point. You need to:</p>
              <ul>
             <li>✅ Services, hooks, and types are already set up</li>
             <li>❌ Create Home component with airport dropdown and filters</li>
             <li>❌ Create AirportDetails component for airport details</li>
             <li>❌ Implement routing between components</li>
             <li>❌ Add React Router setup</li>
           </ul>
           <p>
             <strong>
               Check the services and hooks folders for existing patterns to
               follow!
             </strong>
           </p> */}

          {/* <div className="api-info">
             <h3>📡 API Endpoints Available:</h3>
             <ul>
            <li>
                <code>GET /airport</code> - Flight routes data
              </li>
              <li>
               <code>GET /airportDetails</code> - Airport details with
                 descriptions
              </li>
             </ul>
             <p>
              Run <code>npm run dev</code> to start JSON Server on port 3000
            </p>
        </div>  */}
      </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
