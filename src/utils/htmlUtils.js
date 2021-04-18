/**
 * 用浏览器内部转换器实现 html 解码（反转义）
 * @param {String} text
 * @returns
 */
export function htmlDecode(text) {
  let tmp = document.createElement("div");
  tmp.innerHTML = text;
  let output = tmp.innerHTML || tmp.textContent;
  tmp = null;
  return output;
}
