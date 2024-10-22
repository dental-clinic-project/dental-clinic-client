import { FC } from "react";

import { useGetServicesQuery } from "src/app/store/services";

import { Service, Loading } from "src/shared/ui";

import s from "./services.module.scss";

const Services: FC = () => {
  const { data, isLoading, isError } = useGetServicesQuery(null);

  return (
    <section className={s.services}>
      <div className={s.services_container}>
        <div className={s.services_body}>
          <h2 className={s["services_body-title"]}>
            Services offered by our clinic
          </h2>
          <p className={s["services_body-text"]}>
            The dental clinic has a wide range of services that you can use to
            get a beautiful smile
          </p>

          {isLoading && <Loading />}
          {isError && (
            <p className={s["services_body-warning"]}>
              Failed to fetching data.
            </p>
          )}

          <div className={s.services_items}>
            {data?.data?.services.map((item) => (
              <Service
                key={item._id}
                path={item.path}
                service={item.service}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
