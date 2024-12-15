// expected date format dd.mm.yyyy
export function getTimestamp(date) {
  try {
    const separateDate = date.split(".");
    const formattedDate = [
      separateDate[1],
      separateDate[0],
      separateDate[2],
    ].join(".");

    return new Date(formattedDate).getTime() / 1000;
  } catch (e) {
    console.log(e);
    return "";
  }
}
