import { Consultation } from "src/widgets";

import s from "./consultation.module.scss"; 

const ConsultationPage = () => {
  return (
    <section className={s.consultation}>
      <div className={s.consultation_container}>
        <div className={s.consultation_body}>
          <h2>
            Select the day you want to register for the format{" "}
            <span>dd.mm.yy</span>
          </h2>

          <Consultation />
        </div>
      </div>
    </section>
  );
};

export default ConsultationPage;
