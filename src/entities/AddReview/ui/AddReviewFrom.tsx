import { FormEvent, useRef } from "react";

import { Button } from "src/shared/ui";
import { useAddReviewsMutation } from "src/app/store/reviews";
import { handleSendReview } from "../utilities";

import s from "./addReviewForm.module.scss";

const AddReviewFrom = () => {
  const [mutationFn, { isLoading, isError }] = useAddReviewsMutation({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  console.log(isError, "error...");

  return (
    <form className={s.form} onSubmit={(e: FormEvent) => handleSendReview(e, mutationFn, textareaRef)}>
      <textarea ref={textareaRef} required minLength={3} placeholder="Add your review..." />

      <Button className={`${s.form_button} ${isLoading ? s.loading : undefined}`} disabled={isLoading}>
        {!isLoading ? "SEND" : "SENDING..."}
      </Button>
    </form>
  );
};

export default AddReviewFrom;
