import { Suspense } from "react";
import "./App.css";
import RouteRenderer from "./routing/RouteRenderer";

function App() {
  // note fr Petra: hårdkodad in userId i localStorage för att kunna hämta bokningar utefter userId
  localStorage.setItem("userId", "08354a9b-217c-4974-af30-68208ba52f1b");

  return (
    <Suspense fallback={<div className="spinner">Loading...</div>}>
      <RouteRenderer />
    </Suspense>
  );
}

export default App;
