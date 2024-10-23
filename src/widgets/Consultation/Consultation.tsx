import { FC, useRef } from "react";
import { Button } from "src/shared/ui";

import { useHandleChoiceDate } from "src/features/Consultation/hooks/useHandleChoiceDate";

import s from "./consultation.module.scss";
import { useAppSelector } from "src/shared/hooks/reduxHook";

const Consultation: FC = () => {
  const dateRef = useRef<HTMLInputElement | null>(null);
  const { handleClickButton } = useHandleChoiceDate(dateRef);
  const date = useAppSelector((state) => state.consultation.date);
  console.log(date);
  return (
    <>
      <input ref={dateRef} type="date" className={s.consultation_input} />

      <Button
        handleClickButton={handleClickButton}
        className={s.consultation_btn}
      >
        CHOOSE
      </Button>
    </>
  );
};

export default Consultation;
