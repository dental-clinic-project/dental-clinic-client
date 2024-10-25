import { useGetConsultationMutation } from "src/app/store/consultation";

export const useHandleChoiceDate = (ref: React.RefObject<HTMLInputElement>) => {
  const [getConsultation, { data, isLoading, isError }] = useGetConsultationMutation();

  const handleClickButton = () => {
    if (ref.current) {
      ref.current.showPicker();
      ref.current.addEventListener("change", handleDateChange);
    }
  };

  const handleDateChange = () => {
    const name = localStorage.getItem("fullName");
    if (ref.current) {
      getConsultation({ date: ref.current.value, name });
    }
  };

  return {
    handleClickButton,
    data: data?.data,
    isLoading,
    isError,
  };
};
