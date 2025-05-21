import { Suspense } from "react";
import "./App.css";
import RouteRenderer from "./routing/RouteRenderer";

function App() {
  // note fr Petra: hårdkodad in userId i localStorage för att kunna hämta bokningar utefter userId
  localStorage.setItem("userId", "2d4a1186-69e9-4782-b96e-7752abf3b613");

  return (
    <Suspense fallback={<div className="spinner">Loading...</div>}>
      <RouteRenderer />
    </Suspense>
  );
}

export default App;
