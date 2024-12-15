export function dateCorrector(value) {
  const maskedValue = value;

  if (maskedValue.length === 10) {
    const currentYear = new Date().getFullYear() - 3;
    const dateValue = maskedValue.split(".");

    let year = new Date(dateValue[2]).getFullYear();
    if (year < 1900) {
      year = 1900;
    } else if (year >= currentYear) {
      year = currentYear;
    }

    const month = +dateValue[1] > 12 ? 12 : dateValue[1];
    const maxPossibleDays = new Date(year, +month, 0).getDate();
    const day =
      +dateValue[0] > maxPossibleDays ? maxPossibleDays : dateValue[0];

    return `${day}.${month}.${year}`;
  }

  return maskedValue;
}
