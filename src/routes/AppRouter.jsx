import { Routes, Route } from "react-router";
import WelcomePage from "../pages/WelcomePage";
import MainLayout from "../mainLayout/MainLayout";
import ContentPage from "../pages/ContentPage";


function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route index element={<WelcomePage />} />
        <Route path="content" element={<ContentPage />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;