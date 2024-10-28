import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

import s from "./reviewSocialMedia.module.scss";

const ReviewSocialMedia = () => {
  return (
    <div className={s.social}>
      <Link to="https://www.instagram.com/tm_dentalway/" target="_blank">
        <Icon name="instagram" />
      </Link>

      <Link to="mailto:matveevdenis458@gmail.com" target="_blank">
        <Icon name="email-icon" />
      </Link>

      <Link to="https://www.facebook.com" target="_blank">
        <Icon name="facebook" />
      </Link>
    </div>
  );
};

export default ReviewSocialMedia;
