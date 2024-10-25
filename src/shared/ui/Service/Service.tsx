import { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import s from "./service.module.scss";

interface ServiceProps {
  description: string;
  service: string;
  path: string;
  index: number;
}

const servicesAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Service: FC<ServiceProps> = ({ service, description, path, index }) => {
  return (
    <motion.div custom={index} variants={servicesAnimation} className={s.service}>
      <div>
        <h4 className={s.service_title}>{service}</h4>
        <p>{description}</p>
      </div>

      <Link to={path} className={s.service_link}>
        + more details
      </Link>
    </motion.div>
  );
};

export default Service;
