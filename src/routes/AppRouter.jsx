import { Routes, Route } from "react-router";
import WelcomePage from "../pages/WelcomePage";
import MainLayout from "../layout/MainLayout";
import ContentPage from "../pages/ContentPage";
import UserCard from "../components/UsersCards";
import CommentCard from "../components/CommentCard";
import PostCard from "../components/PostCard";


function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route index element={<WelcomePage />} />
        <Route path="content" element={<ContentPage />}>
          <Route path="users" element={<UserCard />}/>
          <Route path="comments" element={<CommentCard />}/>
          <Route path="posts" element={<PostCard />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;