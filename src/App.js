import CustomersList from "./CustomersList";
import Details from "./Details";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={CustomersList} />
        <Route path="/orders/:elId" Component={Details} />
      </Routes>
    </>
  );
}
