import { Routes, Route } from "react-router-dom";
import Exercise from "./pages/exercise";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={"<Main />"} />
      <Route path="/registration" element={"<Registration />"} />
      <Route path="/main" element={"<Main />"} />
      <Route path="/description" element={"<Description />"} />
      <Route path="/profile" element={"<Profile />"} />
      <Route path="/exercise" element={<Exercise />} />
    </Routes>
  );
}
