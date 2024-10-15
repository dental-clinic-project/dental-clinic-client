import { FC } from "react";
import { TeamSlider } from "src/entities";

import s from "./team.module.scss";

const Team: FC = () => {
  return (
    <section className={s.team}>
      <div className={s.team_container}>
        <div className={s.team_body}>
          <h2>Our team</h2>

          <TeamSlider />
        </div>
      </div>
    </section>
  );
};

export default Team;
