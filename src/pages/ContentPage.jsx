import TabField from "../components/TabField";
import { Outlet, Link } from "react-router";

const ContentPage = () => {
  return (
    <>
      <TabField />
      <Outlet />
    </>
  );
};

export default ContentPage;
