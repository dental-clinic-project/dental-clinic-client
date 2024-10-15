import s from "./service.module.scss";

import serviceImage from "src/../public/images/services/cosmetic-dentistry.webp";

const Service = () => {
  const data = [
    "Today, cosmetic dentistry occupies one of the leading places. More and more people want to have beautiful teeth and bright smiles. It is very important to us that you know about all the possible options to create the smile you want. We will offer the best, both for health and for the beauty of teeth.",
    "In cosmetic dentistry, we use composite and ceramic veneers, professional teeth whitening. Composite veneers are made of a special filling material, the properties of which are similar to ceramics, and are performed in just one visit to the dentist. Ceramic veneers are dental veneers made of modern materials, they allow you to achieve an instant effect of a radiant, snow-white smile without long-term teeth whitening and lightening.",
    "Compared to crowns, veneers require much less grinding of the tooth, so they are considered the least invasive method of aesthetic tooth correction.",
    "A snow-white smile attracts attention at first sight, and causes casual sympathy. That is why more and more people use the teeth whitening service to achieve this whiteness in the most simple, fast, and most importantly safe and painless way.",
  ];

  return (
    <section className={s.service}>
      <div className={s.service_container}>
        <div className={s.service_body}>
          <h2>Cosmetic dentistry</h2>

          <img src={serviceImage} alt="Service show here" />

          {data?.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
