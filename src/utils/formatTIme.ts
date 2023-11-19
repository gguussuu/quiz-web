const translateTime = (second: number) => {
  const timeFormat = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };
  if (second < 60) return `00:${timeFormat(second)}`;
  const hours = Math.floor(second / 3600);
  const mins = Math.floor((second - hours * 3600) / 60);
  const secs = second - hours * 3600 - mins * 60;

  return `${timeFormat(hours)}:${timeFormat(mins)}:${timeFormat(secs)}`;
};
export default translateTime;
