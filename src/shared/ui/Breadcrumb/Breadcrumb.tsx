import { Link, useLocation } from "react-router-dom";

import s from "./breadcrumb.module.scss";

const Breadcrumb = () => {
  const location = useLocation();

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
        {location.pathname.includes("/services/childrens-dentistry") && (
          <Link to="/services/childrens-dentistry"> / Childrens dentistry</Link>
        )}
        {location.pathname.includes("/services/cosmetic-dentistry") && (
          <Link to="/services/cosmetic-dentistry"> / Cosmetic dentistry</Link>
        )}
        {location.pathname.includes("/services/ct-diagnosis") && (
          <Link to="/services/ct-diagnosis"> / Ct diagnosis</Link>
        )}
        {location.pathname.includes("/services/medicated-sleep") && (
          <Link to="/services/medicated-sleep"> / Medicated sleep</Link>
        )}
        {location.pathname.includes("/services/prosthetic-teeth") && (
          <Link to="/services/prosthetic-teeth"> / Prosthetic teeth</Link>
        )}
        {location.pathname.includes("/services/implantation-of-teeth") && (
          <Link to="/services/implantation-of-teeth"> / Implantation of teeth</Link>
        )}
        {location.pathname.includes("/services/general-dentistry") && (
          <Link to="/services/general-dentistry"> / General dentistry</Link>
        )}
        {location.pathname.includes("/services/surgery-and-periodontology") && (
          <Link to="/services/surgery-and-periodontology"> / Surgery and periodontology</Link>
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
