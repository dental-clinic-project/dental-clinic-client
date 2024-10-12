import { FC } from "react";

import Icon from "../Icon/Icon";

import s from "./infoBlockItem.module.scss";

type InfoBlockItemProps = {
  [key: string]: string;
};

const InfoBlockItem: FC<InfoBlockItemProps> = ({ name, title, text }) => {
  return (
    <div className={s.info}>
      <Icon name={name} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default InfoBlockItem;
