!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    l,
    d =
      '<svg><symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M761.6 102.4l147.2 147.2c19.2 19.2 19.2 57.6 0 83.2l-537.6 537.6-262.4 32 38.4-262.4 537.6-537.6c19.2-19.2 57.6-19.2 76.8 0z" fill="#6F8FDF" ></path></symbol><symbol id="icon-file" viewBox="0 0 1024 1024"><path d="M183.5 64c-11.2 0-23.1 4.5-31.4 13.4-8.2 9-13.4 20.2-13.4 31.4v806.4c0 11.2 4.5 23.1 13.4 31.4 9 9 20.2 13.4 31.4 13.4h657.1c11.2 0 23.1-4.5 31.4-13.4 9-9 13.4-20.2 13.4-31.4V317.9L631.5 64h-448z" fill="#5ACC9B" ></path><path d="M885.3 317.9h-209c-11.2 0-23.1-4.5-31.4-13.4-9-8.2-13.4-20.2-13.4-31.4V64l253.8 253.9z" fill="#BDEBD7" ></path><path d="M312.9 362.7h149.3c13.7 0 24.9 11.1 24.9 24.9 0 13.7-11.1 24.9-24.9 24.9H312.9c-13.7 0-24.9-11.1-24.9-24.9 0-13.8 11.1-24.9 24.9-24.9zM312.9 561.8h398.2c13.7 0 24.9 11.1 24.9 24.9 0 13.7-11.1 24.9-24.9 24.9H312.9c-13.7 0-24.9-11.1-24.9-24.9 0-13.8 11.1-24.9 24.9-24.9zM312.9 760.9h398.2c13.7 0 24.9 11.1 24.9 24.9s-11.1 24.9-24.9 24.9H312.9c-13.7 0-24.9-11.1-24.9-24.9s11.1-24.9 24.9-24.9z" fill="#FFFFFF" ></path></symbol></svg>',
    a = (a = document.getElementsByTagName('script'))[a.length - 1].getAttribute('data-injectcss')
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }
  function s() {
    c || ((c = !0), o())
  }
  ;(t = function () {
    var e, t, n
    ;((n = document.createElement('div')).innerHTML = d),
      (d = null),
      (t = n.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'), (t.style.position = 'absolute'), (t.style.width = 0), (t.style.height = 0), (t.style.overflow = 'hidden'), (e = t), (n = document.body).firstChild ? (t = n.firstChild).parentNode.insertBefore(e, t) : n.appendChild(e))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t()
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        (l = function () {
          try {
            i.documentElement.doScroll('left')
          } catch (e) {
            return void setTimeout(l, 50)
          }
          s()
        })(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s())
        }))
})(window)
