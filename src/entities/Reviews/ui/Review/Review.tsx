import { FC } from "react";
import { motion } from "framer-motion";

import s from "./review.module.scss";

interface ReviewProps {
  fullName: string;
  description: string;
  index: string;
}

const reviewAnimate = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Review: FC<ReviewProps> = ({ fullName, description, index }) => {
  return (
    <motion.div
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      initial="hidden"
      custom={index}
      variants={reviewAnimate}
      className={s.review}
    >
      <div className={s.review_body}>
        <p className={s.review_name}>{fullName}</p>
        <p className={s.review_description}>{description}</p>
      </div>
    </motion.div>
  );
};

export default Review;
