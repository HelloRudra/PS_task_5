function getDayOfWeek(year, month, day) {
  const date = new Date(year, month - 1, day);

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return weekdays[date.getDay()];
}