import { FC, useRef, useState } from "react";
import { Button, Loading } from "src/shared/ui";
import { ConsultationInfo } from "src/entities";

import { useHandleChoiceDate } from "src/features/Consultation/hooks/useHandleChoiceDate";

import s from "./consultation.module.scss";

const Consultation: FC = () => {
  const dateRef = useRef<HTMLInputElement | null>(null);
  const { handleClickButton, data, isLoading, isError } = useHandleChoiceDate(dateRef);
  const [minDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });

  console.log(data, "data");
  console.log(isLoading);
  console.log(isError);

  return (
    <>
      <input ref={dateRef} type="date" min={minDate} className={s.consultation_input} />

      <Button
        handleClickButton={handleClickButton}
        className={`${s.consultation_btn} ${isLoading && s.loading}`}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "CHOOSE"}
      </Button>

      {isError && <p className={s.warning}>Failed to fetching data. Try again.</p>}
      {isLoading && <Loading />}
      {data && <ConsultationInfo consultations={data?.consultations} id={data?._id} date={data?.date} />}
    </>
  );
};

export default Consultation;
