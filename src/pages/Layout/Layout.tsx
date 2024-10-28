import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Footer, Header, IntroForPages } from "src/widgets";

import s from "./layout.module.scss";
import getItemWithExpiry from "src/entities/Consultation/utilites/getItemWithExpiry";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getItemWithExpiry("activeConsultation");
    if (localStorage.getItem("token")) {
      navigate(location.pathname);
    } else {
      navigate("/authentication");
    }
  }, [location.pathname, navigate]);

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        {location.pathname !== "/" && <IntroForPages path={location.pathname} />}
      <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
