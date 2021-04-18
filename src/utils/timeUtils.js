/**
 * 传入时间戳，传出时间
 * @param {Number} time
 * @returns
 */
export function timeDecode(time) {
  let date = new Date(time);
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  return year + "/" + month + "/" + day + " " + hour + ":" + minute;
}
