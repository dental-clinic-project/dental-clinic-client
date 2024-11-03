import { FC } from "react";

import { useGetReviewsQuery } from "src/app/store/reviews";
import { Review } from "../Review/Review";
import { Loading } from "src/shared/ui";

import s from "./reviewsList.module.scss";

const ReviewsList: FC = () => {
  const { data, isLoading, isError } = useGetReviewsQuery(null);

  return (
    <div className={s.list} data-cy="reviews">
      <div className={s.list_body}>
        {isLoading && <Loading />}
        {isError && <p className={s.list_warning}>Failed to fetching data.</p>}

        {data?.data?.reviews.map((item, index) => (
          <Review key={item._id} index={index} fullName={item.name} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;
