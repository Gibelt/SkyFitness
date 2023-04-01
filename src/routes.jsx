import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={"<Login />"} />
      <Route path="/registration" element={"<Registration />"} />
      <Route path="/main" element={"<Main />"} />
      <Route path="/description" element={"<Description />"} />
      <Route path="/profile" element={"<Profile />"} />
      <Route path="/course" element={"<Course />"} />
    </Routes>
  );
}
