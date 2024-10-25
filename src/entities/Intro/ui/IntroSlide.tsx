import { FC } from "react";
import { motion } from "framer-motion";

import { Button } from "src/shared/ui";
import { Link } from "react-router-dom";

import s from "./introSlide.module.scss";

interface IntroSlideProps {
  title: string;
  btnText: string;
  typeSlide: "services" | "reviews" | "about-us";
}

const blockAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: (custom) => ({
      delay: custom * 0.2,
    }),
  },
};

const IntroSlide: FC<IntroSlideProps> = ({ title, btnText, typeSlide }) => {
  return (
    <motion.div initial="hidden" animate="visible" className={s.slide}>
      <div className={s.slide_container}>
        <div className={s.slide_body}>
          <motion.div
            custom={4}
            variants={blockAnimation}
            data-testid="slide_img"
            className={`${s.slide_img} ${typeSlide === "services" ? s.services : s.reviews} ${
              typeSlide === "about-us" ? s.about : ""
            }`}
          ></motion.div>

          <div
            data-testid="slide_info"
            className={`${s.slide_info} ${typeSlide === "services" ? s.services : s.reviews}`}
          >
            <motion.h2 variants={blockAnimation} className={s.slide_title}>
              {title}
            </motion.h2>
            <Link to={typeSlide}>
              <Button className={s.slide_button}>{btnText}</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSlide;
