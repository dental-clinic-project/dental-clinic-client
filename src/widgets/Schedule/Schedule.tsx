import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SocialMedia } from "src/shared/ui";

import s from "./schedule.module.scss";

const animation = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: (custom) => ({
      delay: custom * 0.4,
    }),
  },
};

const Schedule = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={s.schedule}
    >
      <div className={s.schedule_container}>
        <motion.div custom={3} variants={animation} className={s.schedule_img}>
          <p>We work from 9:00 to 18:00</p>
        </motion.div>

        <div className={s.schedule_body}>
          <motion.h2 custom={1} variants={animation}>
            Schedule
          </motion.h2>

          <motion.ul custom={4} variants={animation} className={s["schedule_body-list"]}>
            <li>
              <p className={s["schedule_body-list-days"]}>Mon - Fri</p>
              <p className={s["schedule_body-list-times"]}>9:00 - 18:00</p>
            </li>
            <li>
              <p className={s["schedule_body-list-days"]}>Sat - Sun</p>
              <p className={s["schedule_body-list-times"]}>10:00 - 15:00</p>
            </li>
          </motion.ul>

          <motion.div className={s["schedule_body-btn"]} custom={2} variants={animation}>
            <Link to="/consultation">
              Consultation
            </Link>
          </motion.div>

          <SocialMedia className={s["schedule_body-media"]} />
        </div>
      </div>
    </motion.section>
  );
};

export default Schedule;
