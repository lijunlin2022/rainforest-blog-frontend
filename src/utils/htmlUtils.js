/**
 * 用浏览器内部转换器实现 html 解码（反转义）
 * @param {String} text
 * @returns
 */
export function htmlDecode(str) {
  if (str.length == 0) {
    return "";
  }
  var s = "";
  s = str.replace(/&nbsp;/g, " ");
  s = s.replace(/&lt;/g, "<");
  s = s.replace(/&gt;/g, ">");
  s = s.replace(/&amp;/g, "&");
  s = s.replace(/&quot;/g, '"');
  s = s.replace(/&apos;/g, "'");
  return s;
}
