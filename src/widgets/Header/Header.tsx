import { FC } from "react";
import { motion } from "framer-motion";

import { HeaderNavigation } from "src/entities";
import { Button, Logo } from "src/shared/ui";
import { makePhoneCall } from "src/features/Header/utilities/makePhoneCall";
import { useOpenMenu } from "src/features/Header/hooks/useOpenMenu";

import s from "./header.module.scss";

const headerAnimtation = {
  hidden: {
    y: -146,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Header: FC = () => {
  const { isActive, toggleMenu } = useOpenMenu();

  return (
    <motion.header initial="hidden" whileInView="visible" variants={headerAnimtation} className={s.header}>
      <div className={s.header_wrapper}>
        <Logo />

        <HeaderNavigation isActiveMenu={isActive} toggleMenu={toggleMenu} />

        <div className={s.header_actions}>
          <Button
            handleClickButton={() => makePhoneCall("+380509634476")}
            className={s.header_button}
            type="button"
            data-testid="button"
          >
            +380(50)963-4476
          </Button>

          <button onClick={() => toggleMenu()} className={`${s.header_menu} ${isActive ? s.active : ""}`}>
            <span></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
