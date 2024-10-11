import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

import { TeamSlide } from "src/shared/ui";

import "swiper/css";
import "swiper/css/navigation";
import "./teamSlider.scss";
import s from "./teamSlider.module.scss";

const TeamSlider: FC = () => {
  return (
    <div className={s.team_slider}>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TeamSlide
            name="Oleksandr Shevchenko"
            years_of_experience={7}
            position="dentist-therapist"
            quote='"A smile is the best investment in yourself."'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlide
            name="Oleksandr Shevchenko"
            years_of_experience={7}
            position="dentist-therapist"
            quote='"A smile is the best investment in yourself."'
          />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSlide
            name="Oleksandr Shevchenko"
            years_of_experience={7}
            position="dentist-therapist"
            quote='"A smile is the best investment in yourself."'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamSlider;
