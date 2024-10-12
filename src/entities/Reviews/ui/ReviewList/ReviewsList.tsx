import { Button } from "src/shared/ui";
import Review from "../Review/Review";

import s from "./reviewsList.module.scss";

const ReviewsList = () => {
  return (
    <div className={s.list}>
      <div className={s.list_body}>
        <Review
          fullName="Denys Matvieiev"
          description="I've always been nervous about visiting the dentist, but this clinic made me feel so comfortable from the moment I walked in. The staff was incredibly friendly and attentive, and Dr. Smith took the time to explain every step of my treatment. The procedure was painless, and the results exceeded my expectations. Highly recommend this clinic to anyone looking for professional and caring dental care!"
        />
        <Review
          fullName="Denys Matvieiev"
          description="My experience at this dental clinic was outstanding. From the clean and modern facilities to the knowledgeable and compassionate staff, I felt I was in good hands. The hygienist was gentle yet thorough, and Dr. Lee addressed all my concerns with great care. I’m so happy with my new smile and grateful for the top-notch service I received!"
        />
        <Review
          fullName="Denys Matvieiev"
          description="I recently had a dental emergency and needed immediate care. This clinic was able to accommodate me right away, and I’m so thankful for their quick response. The dentist was professional, skilled, and made me feel calm throughout the process. My tooth was saved, and the entire team made the experience stress-free. I would definitely recommend this clinic for both routine check-ups and emergency care. The dentist was professional, skilled, and made me feel calm throughout the process. My tooth was saved, and the entire team made the experience stress-free. I would definitely recommend this clinic for both routine check-ups and emergency care."
        />

        <Button className={s.list_button}>SHOW MORE</Button>
      </div>
    </div>
  );
};

export default ReviewsList;
