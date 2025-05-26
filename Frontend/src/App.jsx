import { Suspense } from "react";
import "./App.css";
import RouteRenderer from "./routing/RouteRenderer";

function App() {
  // note fr Petra: hårdkodad in userId i localStorage för att kunna hämta bokningar utefter userId
  localStorage.setItem("userId", "0638b8b9-561c-4e0f-a32b-36f09e80b3d7");

  return (
    <Suspense fallback={<div className="spinner">Loading...</div>}>
      <RouteRenderer />
    </Suspense>
  );
}

export default App;
