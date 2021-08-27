function debounce (fn, wait, triggleNow) {
  let t = null
  let res
  const deFun = function () {
    const _self = this
    const args = arguments
    if (t) {
      clearTimeout(t)
    }
    if (triggleNow) {
      const exec = !t
      t = setTimeout(() => {
        t = null
      }, wait)
      if (exec) {
        res = fn.apply(_self, args)
      }
    } else {
      t = setTimeout(() => {
        res = fn.apply(_self, args)
      }, wait)
    }
    return res
  }
  return deFun
}

export { debounce }
