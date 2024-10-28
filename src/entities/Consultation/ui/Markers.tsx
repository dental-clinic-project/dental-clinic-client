import s from "./consultationInfo.module.scss";

const Markers = ({ activeTime, consultations }: { activeTime: string; consultations: string[] }) => {
  return (
    <div className={s["info_body-markers"]}>
      <div
        className={`${s["info_body-markers_marker"]} ${activeTime === "9:00" && s.isActive} ${
          consultations?.includes("9:00") && s.isBusy
        } `}
      ></div>
      <div
        className={`${s["info_body-markers_marker"]} ${activeTime === "10:00" && s.isActive} ${
          consultations?.includes("10:00") && s.isBusy
        }`}
      ></div>
      <div
        className={`${s["info_body-markers_marker"]} ${activeTime === "11:00" && s.isActive} ${
          consultations?.includes("11:00") && s.isBusy
        }`}
      ></div>
      <div
        className={`${s["info_body-markers_marker"]} ${activeTime === "12:00" && s.isActive} ${
          consultations?.includes("12:00") && s.isBusy
        }`}
      ></div>
    </div>
  );
};

export default Markers;
