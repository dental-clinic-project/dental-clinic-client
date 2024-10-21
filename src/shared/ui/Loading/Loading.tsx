import s from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={s.spinnerContainer}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default Loading;
