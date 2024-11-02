import s from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={s.spinnerContainer} data-testid="loading">
      <div className={s.spinner}></div>
    </div>
  );
};

export default Loading;
