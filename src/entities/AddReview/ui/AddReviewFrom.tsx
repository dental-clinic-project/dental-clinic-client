import { Button } from "src/shared/ui";
import s from "./addReviewForm.module.scss";

const AddReviewFrom = () => {
  return (
    <form className={s.form}>
      <textarea required minLength={3} placeholder="Add your review..." />

      <Button className={s.form_button}>SEND</Button>
    </form>
  );
};

export default AddReviewFrom;
