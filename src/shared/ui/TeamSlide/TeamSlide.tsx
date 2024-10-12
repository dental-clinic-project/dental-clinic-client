import { FC } from "react";

import s from "./teamSlide.module.scss";

interface TeamSlideProps {
  name: string;
  years_of_experience: number;
  quote: string;
  position: string;
  imageUrl: string;
}

const TeamSlide: FC<TeamSlideProps> = ({
  name,
  years_of_experience,
  quote,
  position,
  imageUrl,
}) => {
  return (
    <div className={s.slide}>
      <div
        className={s.slide_img}
        style={{
          backgroundImage: `url(../../../../public/images/team-slider/${imageUrl})`,
        }}
      />
      <div className={s.slide_info}>
        <div className={s["slide_info-doctor"]}>
          <h3>{name}</h3>
          <p>{position}</p>
          <p>{years_of_experience} years of experience</p>
        </div>

        <div className={s["slide_info-quote"]}>
          <p>{quote}</p>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamSlide;
