✈️ Take-Home Assignment: Flight Routes Explorer (React)

You will build a simple yet functional web-based interface that allows users to explore flight routes and airport details using the provided dataset.

## 🚀 Getting Started

### Commands

```bash
# Install dependencies
npm install

# Run mock API (in one terminal)
npm run mock-api

# Run app (in another terminal)
npm run dev
```

### Data Endpoints

- `http://localhost:3000/airport` - Flight routes data
- `http://localhost:3000/airportDetails` - Airport details with descriptions

## 📁 Project Structure (Already Set Up)

```
src/
├── services/
│   ├── api.service.ts          ✅ Fetch wrapper with caching & error handling
│   └── airport.service.ts      ✅ Partial implementation with patterns
├── hooks/
│   └── useAirports.ts          ✅ Custom hooks with loading/error states
├── types/
│   └── airport.types.ts        ✅ TypeScript interfaces
├── constants/
│   └── airport.constants.ts    ✅ Airport codes and filter keys
├── utils/
│   └── array.utils.ts          ✅ Helper functions for data processing
└── App.tsx                     ✅ Main app with routing setup (TODO: uncomment)
```

## ✅ Assignment Requirements

### 1. Origin Airport Dropdown

- Display dropdown with all unique origin airports (OriginAirportCode)
- Use `useOriginAirports()` hook - already implemented!
- When user selects origin → show destinations for that origin

### 2. Filter Options

- Add checkbox filters for destination results:
  - `IsSeasonal`: Show only seasonal routes
  - `IsJetBlue`: Show only JetBlue routes
  - `IsInterline`: Show only interline routes
- Filters update results dynamically in real-time
- Use `filterByMultipleConditions()` helper from utils

### 3. Destination Airport Details Page

- Clicking destination navigates to `/airport/:code`
- Display: `fullName`, `cityName`, `description`, `thingsToDo`
- Use React Router and `airportService.getAirportDetails()`

## 🛠️ What You Need to Implement

### Components to Create:

1. **Home** - Main page with dropdown and filters
2. **AirportDetails** - Airport detail page

### Service Methods to Complete:

Check `airport.service.ts` - several TODO methods need implementation following the established patterns.

### Hooks to Complete:

Check `useAirports.ts` - several TODO hooks need implementation.

### Routing:

Add React Router setup to App.tsx (dependencies already installed).

## 💡 Coding Patterns to Follow

### ✅ Use the Custom Hooks:

```typescript
import { useOriginAirports, useLoading, useError } from "./hooks/useAirports";

function Home() {
  const { origins, loading, error } = useOriginAirports();
  const { setLoadingFor } = useLoading();
  const { handleError } = useError();

  // Use the data...
}
```

### ✅ Use the Service Layer:

```typescript
import { airportService } from "./services/airport.service";

const fetchData = async () => {
  try {
    const data = await airportService.getAllAirports();
    // Handle data...
  } catch (error) {
    handleError(error, "fetching airports");
  }
};
```

### ✅ Use Existing Utilities:

```typescript
import {
  getUniqueValues,
  filterByMultipleConditions,
} from "./utils/array.utils";

// Get unique values
const origins = getUniqueValues(airports, "OriginAirportCode");

// Filter data
const filtered = filterByMultipleConditions(routes, filters);
```

### ✅ Use React Router (after setup):

```typescript
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Navigation
<Link to={`/airport/${code}`}>View Details</Link>;

// Get route params
const { code } = useParams<{ code: string }>();
```

## 🎯 Success Criteria

- [ ] Origin dropdown populated from API
- [ ] Destinations update when origin selected
- [ ] All three filter checkboxes work dynamically
- [ ] Clicking destination navigates to details page
- [ ] Airport details page shows all required info
- [ ] Proper error handling and loading states
- [ ] Follow established patterns and use provided services/hooks

## 📦 Available Dependencies

- `react-router-dom` - Already installed for routing
- `json-server` - Already installed for mock API
- All TypeScript types and utilities are pre-configured
