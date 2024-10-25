const handleClickTime = (time: string): string => {
  if (time === ":30" || time === "13:00") {
    return "00:00";
  }

  return time;
};
export default handleClickTime;
