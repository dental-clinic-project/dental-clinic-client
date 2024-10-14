import { ReviewsList } from "src/entities";
import s from "./reviews.module.scss";

const Reviews = () => {
  return (
    <section className={s.reviews}>
      <div className={s.reviews_container}>
        <div className={s.reviews_body}>
          <h2>Reviews from our customers</h2>
          <p className={s.reviews_subtitle}>
            Our clients are happy to leave feedback after treatment
          </p>

          <ReviewsList />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
