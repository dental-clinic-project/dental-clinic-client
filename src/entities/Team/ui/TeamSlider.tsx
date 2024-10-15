import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

import { TeamSlide } from "src/shared/ui";

import "swiper/css";
import "swiper/css/navigation";
import "./teamSlider.scss";
import s from "./teamSlider.module.scss";
import { useGetTeam } from "../utilities/useGetTeam";

const TeamSlider: FC = () => {
  const { data, error, isLoading } = useGetTeam();

  console.log(data, "data");
  console.log(error, "error");
  console.log(isLoading, "loading...");

  return (
    <div className={s.team_slider}>
      {error && <p className={s.info_message}>Failed to fetching data...</p>}

      {isLoading && <p className={s.info_message}>Loading data...</p>}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {data &&
          data.data.team.map((item) => (
            <SwiperSlide key={item._id}>
              <TeamSlide
                name={item.name}
                years_of_experience={item.years_of_experience}
                position={item.position}
                quote={item.quote}
                imageUrl={item.imageUrl}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
