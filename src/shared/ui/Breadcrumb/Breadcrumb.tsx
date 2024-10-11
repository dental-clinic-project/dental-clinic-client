import { Link, useLocation } from "react-router-dom";

import s from "./breadcrumb.module.scss";

const Breadcrumb = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={s.breadcrumb}>
      <ul>
        <Link to="/">Home</Link>
        {location.pathname.includes("/about-us") && (
          <Link to="/about-us"> / About us</Link>
        )}
        {location.pathname.includes("/services") && (
          <Link to="/services"> / Services</Link>
        )}
        {location.pathname.includes("/reviews") && (
          <Link to="/reviews"> / Reviews</Link>
        )}
        {location.pathname.includes("/consultation") && (
          <Link to="/consultation"> / Consultation</Link>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumb;
