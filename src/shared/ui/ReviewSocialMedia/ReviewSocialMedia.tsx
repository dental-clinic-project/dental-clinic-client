import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

import s from "./reviewSocialMedia.module.scss";

const ReviewSocialMedia = () => {
  return (
    <div className={s.social} data-testid="reviewSocialMedia">
      <Link to="https://www.instagram.com/tm_dentalway/" target="_blank" aria-label="instagram">
        <Icon name="instagram" />
      </Link>

      <Link to="mailto:matveevdenis458@gmail.com" target="_blank" aria-label="email">
        <Icon name="email-icon" />
      </Link>

      <Link to="https://www.facebook.com" target="_blank" aria-label="facebook">
        <Icon name="facebook" />
      </Link>
    </div>
  );
};

export default ReviewSocialMedia;
