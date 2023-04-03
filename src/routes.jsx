import { Routes, Route } from "react-router-dom";
import MyProgress from "./components/myProgress/MyProgress";
import Main from "./pages/main/index";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MyProgress />} />
      <Route path="/registration" element={"<Registration />"} />
      <Route path="/main" element={<Main />} />
      <Route path="/description" element={"<Description />"} />
      <Route path="/profile" element={"<Profile />"} />
      <Route path="/course" element={"<Course />"} />
    </Routes>
  );
}
