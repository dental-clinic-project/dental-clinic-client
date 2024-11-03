import { FC } from "react";

import { NavLink } from "react-router-dom";
import { Icon } from "src/shared/ui";

import { Navigation as NavigationData } from "../model/NavigationModel";

import s from "./headerNavigation.module.scss";

const HeaderNavigation: FC<{ isActiveMenu: boolean; toggleMenu: () => void }> = ({
  isActiveMenu,
  toggleMenu,
}) => {
  return (
    <nav data-cy="header-navigation" className={`${s.nav} ${isActiveMenu ? s.active : ""}`}>
      <Icon name="logoWhite" className={s.nav_logo} />

      <ul>
        {NavigationData.map((item) => (
          <NavLink
            key={item.id}
            className={({ isActive }) => `${isActive ? `${s.link} ${s.active}` : `${s.link}`}`}
            to={item.path}
            onClick={isActiveMenu ? toggleMenu : () => {}}
          >
            {item.name}
          </NavLink>
        ))}
        {isActiveMenu && (
          <NavLink
            key={NavigationData.length + 1}
            className={({ isActive }) => `${isActive ? `${s.link} ${s.active}` : `${s.link}`}`}
            to="/consultation"
            onClick={isActiveMenu ? toggleMenu : () => {}}
          >
            Consultation
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
