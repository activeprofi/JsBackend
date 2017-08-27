const formatTime = (minutes) => {
  const hour = Math.floor(minutes / 60);
  const min = minutes % 60;
  const hourStr = hour < 10 ? `0${hour}` : `${hour}`;
  const mStr = min < 10 ? `0${min}` : `${min}`;

  return `${hourStr}:${mStr}`;
};

export default formatTime;
