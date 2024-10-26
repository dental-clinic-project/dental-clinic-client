import { Consultation } from "src/widgets";
import getItemWithExpiry from "src/entities/Consultation/utilites/getItemWithExpiry";

import s from "./consultation.module.scss";

const ConsultationPage = () => {
  const consultation = getItemWithExpiry("activeConsultation");
  const consultationData = JSON.parse(localStorage.getItem("activeConsultation") || "{}");

  return (
    <section className={s.consultation}>
      <div className={s.consultation_container}>
        <div className={s.consultation_body}>
          {!consultation ? (
            <>
              <h2>
                Choose the day of appointment for <span>consultation</span>
              </h2>

              <Consultation />
            </>
          ) : (
            <>
              <h2>
                You have an active consultation on <span>{consultationData?.consultationDay}</span> at{" "}
                <span>{consultationData?.time}</span>
                <br />
              </h2>

              <p className={s.consultation_subtitle}>
                We are waiting for you<span style={{ fontSize: "1.8rem" }}>☺️</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultationPage;
