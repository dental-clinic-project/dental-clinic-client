import { ReviewSocialMedia } from "src/shared/ui";

import s from "./addReview.module.scss";
import { AddReviewFrom } from "src/entities";

const AddReview = () => {
  return (
    <section className={s.addReview}>
      <div className={s.addReview_container}>
        <div className={s.addReview_body}>
          <h2 className={s.addReview_title}>Your review</h2>
          <p className={s.addReview_subtitle}>
            your feedback is very important for our development
          </p>

          <div className={s.addReview_actions}>
            <div className={s["addReview_actions-info"]}>
              <div>
                <h4>Send here</h4>
                <p>or write in social networks</p>
              </div>
              <ReviewSocialMedia />
            </div>

            <AddReviewFrom />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
