import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Footer, Header, IntroForPages } from "src/widgets";

import s from "./layout.module.scss";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(location.pathname);
    } else {
      navigate("/authentication");
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>
        {location.pathname !== "/" && (
          <IntroForPages path={location.pathname} />
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
