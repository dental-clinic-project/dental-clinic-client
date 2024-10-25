import { useParams } from "react-router-dom";
import { useGetServiceByIdQuery } from "src/app/store/services";

import s from "./service.module.scss";
import { Loading } from "src/shared/ui";

const Service = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetServiceByIdQuery({ id });

  if (isError) {
    return (
      <div className={s.service_container}>
        <p className={s.warning}>Failed to fetching data.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={s.service_container}>
        <Loading />
      </div>
    );
  }

  return (
    <section className={s.service}>
      <div className={s.service_container}>
        <div className={s.service_body}>
          <h2>{data.data.name}</h2>

          <img
            src={`/images/services/${data.data.image}`}
            alt="Service show here"
          />

          {data.data.description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
