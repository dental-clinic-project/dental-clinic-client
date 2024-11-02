import { useState } from "react";
import { v4 } from "uuid";

import Markers from "../Markers/Markers";
import { Button } from "src/shared/ui";
import { useAddDateToConsultationsMutation } from "src/app/store/consultation";

import TimesForConsultations from "../../model/TimesForConsultations";
import handleClickTime from "../../utilites/handleClickTime";
import daysBetween from "../../utilites/daysBetween";
import setItemWithExpiry from "../../utilites/setItemWithExpiry";

import s from "./consultationInfo.module.scss";

const ConsultationInfo = ({
  consultations,
  id,
  date,
}: {
  consultations: string[];
  id: number;
  date: string;
}) => {
  const [isActiveTime, setIsActiveTime] = useState<string>("00:00");
  const [addDateToConsultations, { isLoading, isError }] = useAddDateToConsultationsMutation();

  if (consultations?.includes(isActiveTime)) {
    setIsActiveTime("00:00");
  }

  const handleClickConfirm = () => {
    if (!consultations.includes(isActiveTime) && isActiveTime !== "00:00") {
      console.log(!consultations.includes(isActiveTime), "includes");
      console.log(isActiveTime, "isActiveTime");
      addDateToConsultations({ id, time: isActiveTime });

      const consultationDay = new Date(date).toISOString().split("T")[0];
      const days = daysBetween(date, new Date().toISOString());
      setItemWithExpiry("activeConsultation", isActiveTime, days, consultationDay);
      window.location.reload();
    }
  };

  return (
    <div className={s.info}>
      <h3>Click on the time for which you want to sign up</h3>
      <div className={s.info_busy}>
        <p className={s["info_busy-busy"]}>indicates busy time</p>
        <p className={s["info_busy-choice"]}>your choice</p>
      </div>

      <div className={s.info_body}>
        <ul className={s["info_body-times"]}>
          {TimesForConsultations.map((time: string) => (
            <li onClick={() => setIsActiveTime(handleClickTime(time))} key={v4()}>
              {time}
            </li>
          ))}
        </ul>

        <Markers activeTime={isActiveTime} consultations={consultations} />
      </div>

      <h3 className={s.info_text}>
        {`The hour you want to come `}
        <span className={`${isActiveTime === "00:00" && s.info_text_active}`}>{isActiveTime}</span>
      </h3>

      {isError && <p>Fetching data failed. Try again.</p>}

      <Button
        handleClickButton={handleClickConfirm}
        className={`${s.info_button} ${isLoading && s.loading}`}
        disabled={isLoading}
      >
        {isLoading ? "PENDING..." : "CONFIRM"}
      </Button>
    </div>
  );
};

export default ConsultationInfo;
