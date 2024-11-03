import s from "./loading.module.scss";

const Loading = () => {
  return (
    <div data-cy="loading" className={s.spinnerContainer} data-testid="loading">
      <div className={s.spinner}></div>
    </div>
  );
};

export default Loading;
