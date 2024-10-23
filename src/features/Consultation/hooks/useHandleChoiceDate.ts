import { addDateToState } from "src/app/store/consultation";
import { useAppDispatch } from "src/shared/hooks/reduxHook";

export const useHandleChoiceDate = (ref: React.RefObject<HTMLInputElement>) => {
  const dispatch = useAppDispatch();
  console.log(1);

  const handleClickButton = () => {
    if (ref.current) {
      console.log(2);
      ref.current.showPicker();
      console.log(3);
      dispatch(addDateToState(ref.current.value));
      console.log(4);
    }
  };

  console.log(5);

  return {
    handleClickButton,
  };
};
