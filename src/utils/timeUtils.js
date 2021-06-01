/**
 * 传入时间戳，传出时间
 * @param {Number} time
 * @returns
 */
export function getYearMonthDay(time) {
  let date = new Date(time);
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate();
  return year + "-" + month + "-" + day;
}

export function getMonthDay(time) {
  let date = new Date(time);
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate();
  return month + "-" + day;
}
