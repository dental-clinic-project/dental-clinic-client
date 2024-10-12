import { InfoBlockItem } from "src/shared/ui";

import s from "./infoBlock.module.scss";

const InfoBlock = () => {
  return (
    <section className={s.info}>
      <div className={s.info_container}>
        <div className={s.info_body}>
          <h2>
            Convenience and <br /> affordability for perfect dental care
          </h2>
          <p className={s['info_body-text']}>
            We understand the value of your time, so we strive to make dental
            care convenient and affordable. Our clinic offers appointment times,
            including evenings and weekends, to fit your busy schedule. We are
            conveniently located with parking spaces for your convenience. We
            also offer flexible payment options to make dental care affordable
            for all our users.
          </p>

          <div className={s.info_items}>
            <InfoBlockItem
              name="phone-icon"
              title="Phone"
              text="+380(50)963-4476"
            />
            <InfoBlockItem
              name="email-icon"
              title="E-mail"
              text="dental.clinic@gmail.com"
            />
            <InfoBlockItem
              name="map"
              title="Location"
              text="Akademika Korolova, 4A"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
