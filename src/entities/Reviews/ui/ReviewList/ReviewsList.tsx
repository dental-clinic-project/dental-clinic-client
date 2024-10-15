import { FC } from "react";

import Review from "../Review/Review";
import { Button } from "src/shared/ui";

import { useGetReviewsQuery } from "src/app/store/reviews";

import s from "./reviewsList.module.scss";

const ReviewsList: FC = () => {
  const { data, status, error } = useGetReviewsQuery(null);

  return (
    <div className={s.list}>
      <div className={s.list_body}>
        {status === "pending" && <p className={s.list_warning}>Loading...</p>}
        {error && <p className={s.list_warning}>Failed to fetching data...</p>}
        
        {data?.data?.reviews.map((item) => (
          <Review
            key={item._id}
            fullName={item.name}
            description={item.description}
          />
        ))}

        <Button className={s.list_button}>SHOW MORE</Button>
      </div>
    </div>
  );
};

export default ReviewsList;
