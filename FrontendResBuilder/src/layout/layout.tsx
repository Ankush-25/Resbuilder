import { Outlet } from "react-router-dom";
import { NavBar } from "../landingPage/components/navbar";
import { Footer } from "../landingPage/components/footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export { Layout };
