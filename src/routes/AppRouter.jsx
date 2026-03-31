import { Routes, Route } from "react-router";
import WelcomePage from "../pages/WelcomePage";
// import ContentPage from "../pages/ContentPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      {/* <Route path="/content" element={<ContentPage />} /> */}
    </Routes>
  );
}

export default AppRouter;