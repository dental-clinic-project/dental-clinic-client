import { FC } from "react";

import s from "./review.module.scss";

interface ReviewProps {
  fullName: string;
  description: string;
}

const Review: FC<ReviewProps> = ({ fullName, description }) => {
  return (
    <div className={s.review}>
      <div className={s.review_body}>
        <p className={s.review_name}>{fullName}</p>
        <p className={s.review_description}>{description}</p>
      </div>
    </div>
  );
};

export default Review;
