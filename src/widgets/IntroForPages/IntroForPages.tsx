import { Breadcrumb } from "src/shared/ui";

import s from "./introForPages.module.scss";

type PathNameType = {
  [key: string]: string;
};

const pathName: PathNameType = {
  "/about-us": "About us",
  "/services": "Services",
  "/consultation": "Consultation",
  "/reviews": "Reviews",
};

const IntroForPages = ({ path }: { path: string }) => {
  return (
    <section className={s.intro}>
      <h1>{pathName[path]}</h1>
      <Breadcrumb />
    </section>
  );
};

export default IntroForPages;
