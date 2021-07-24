/**
 * @param {String} str
 * @returns
 */
export function htmlDecode(str) {
  if (str.length === 0) {
    return "";
  }
  return str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ");
}

/**
 * @param {Object} obj
 * @returns
 */
export function htmlDecodeObject(obj) {
  if (obj === {}) {
    return {};
  }
  let newObj = obj;
  for (let key in newObj) {
    if (typeof newObj[key] === "string") {
      newObj[key] = htmlDecode(newObj[key]);
    }
  }
  return newObj;
}
