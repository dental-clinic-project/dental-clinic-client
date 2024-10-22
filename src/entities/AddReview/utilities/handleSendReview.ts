import { FormEvent } from "react";

import type { MutationFnProps } from "./handleSendReview.types";

export const handleSendReview = (
  e: FormEvent,
  mutationFn: (obj: MutationFnProps) => void,
  textareaRef: React.RefObject<HTMLTextAreaElement>
) => {
  e.preventDefault();

  const fullName = localStorage.getItem("fullName");
  const reviewText = textareaRef.current?.value;

  if (!fullName || !reviewText) {
    return;
  }

  const userReview = {
    name: fullName,
    description: reviewText,
  };

  mutationFn(userReview);
};
