import { FC } from "react";
import { motion } from "framer-motion";
import { useGetServicesQuery } from "src/app/store/services";

import { Service, Loading } from "src/shared/ui";

import s from "./services.module.scss";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Services: FC = () => {
  const { data, isLoading, isError } = useGetServicesQuery(null);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={s.services}
      data-cy="services"
    >
      <div className={s.services_container}>
        <div className={s.services_body}>
          <motion.h2 custom={1} variants={textAnimation} className={s["services_body-title"]}>
            Services offered by our clinic
          </motion.h2>
          <motion.p custom={2} variants={textAnimation} className={s["services_body-text"]}>
            The dental clinic has a wide range of services that you can use to get a beautiful smile
          </motion.p>

          {isLoading && <Loading />}
          {isError && <p className={s["services_body-warning"]}>Failed to fetching data.</p>}

          <motion.div
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            initial="hidden"
            className={s.services_items}
          >
            {data?.data?.services.map((item, index) => (
              <Service
                key={item._id}
                path={item.path}
                service={item.service}
                description={item.description}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
