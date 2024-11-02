import { FC } from "react";
import Icon from "../Icon/Icon";

import s from "./socialMedia.module.scss";

const SocialMedia: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${s.social} ${className}`} data-testid="socialMedia">
      <ul>
        <a href="https://www.instagram.com/tm_dentalway/" data-testid="instagram">
          <Icon name="instagram" />
          <p>dental.clinic</p>
        </a>
        <a href="https://www.facebook.com/" data-testid="facebook">
          <Icon name="facebook" />
          <p>dental.clinic</p>
        </a>
      </ul>
    </div>
  );
};

export default SocialMedia;
