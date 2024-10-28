import { motion } from "framer-motion";

import { useParams } from "react-router-dom";
import { useGetServiceByIdQuery } from "src/app/store/services";
import { Loading } from "src/shared/ui";

import s from "./service.module.scss";

const animateBlocks = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={s.service}
    >
      <div className={s.service_container}>
        <div className={s.service_body}>
          <motion.h2 custom={1} variants={animateBlocks}>
            {data.data.name}
          </motion.h2>

          <motion.img
            custom={2}
            variants={animateBlocks}
            src={`/images/services/${data.data.image}`}
            alt="Service show here"
          />

          {data.data.description.map((item, index) => (
            <motion.p custom={index + 2} variants={animateBlocks} key={item}>
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
