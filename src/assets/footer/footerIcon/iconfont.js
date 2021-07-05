!(function (e) {
  var t,
    n,
    a,
    o,
    i,
    c,
    d =
      '<svg><symbol id="icon-xiazai" viewBox="0 0 1024 1024"><path d="M812.1 913h-600c-16.6 0-30-13.4-30-30s13.4-30 30-30h600c16.6 0 30 13.4 30 30s-13.4 30-30 30zM482 677V143c0-16.6 13.4-30 30-30s30 13.4 30 30v534c0 16.6-13.4 30-30 30s-30-13.4-30-30z" fill="" ></path><path d="M702.7 503a29.937 29.937 0 0 0-42.5 0L540.4 622.8c-15.6 15.6-40.9 15.6-56.6 0L363.9 502.9c-11.7-11.7-30.7-11.7-42.4 0s-11.7 30.7 0 42.4l162.6 162.6c15.6 15.6 41 15.6 56.6 0l162-162.5c11.7-11.8 11.7-30.7 0-42.4z" fill="" ></path></symbol><symbol id="icon-iconfonticon-shebei" viewBox="0 0 1024 1024"><path d="M341.333 0h-204.8A136.533 136.533 0 0 0 0 136.533v204.8a136.533 136.533 0 0 0 136.533 136.534h204.8a136.533 136.533 0 0 0 136.534-136.534v-204.8A136.533 136.533 0 0 0 341.333 0zM409.6 341.333a68.267 68.267 0 0 1-68.267 68.267h-204.8a68.267 68.267 0 0 1-68.266-68.267v-204.8a68.267 68.267 0 0 1 68.266-68.266h204.8a68.267 68.267 0 0 1 68.267 68.266zM887.467 0h-204.8a136.533 136.533 0 0 0-136.534 136.533v204.8a136.533 136.533 0 0 0 136.534 136.534h204.8A136.533 136.533 0 0 0 1024 341.333v-204.8A136.533 136.533 0 0 0 887.467 0z m68.266 341.333a68.267 68.267 0 0 1-68.266 68.267h-204.8a68.267 68.267 0 0 1-68.267-68.267v-204.8a68.267 68.267 0 0 1 68.267-68.266h204.8a68.267 68.267 0 0 1 68.266 68.266z m-614.4 204.8h-204.8A136.533 136.533 0 0 0 0 682.667v204.8A136.533 136.533 0 0 0 136.533 1024h204.8a136.533 136.533 0 0 0 136.534-136.533v-204.8a136.533 136.533 0 0 0-136.534-136.534zM409.6 887.467a68.267 68.267 0 0 1-68.267 68.266h-204.8a68.267 68.267 0 0 1-68.266-68.266v-204.8a68.267 68.267 0 0 1 68.266-68.267h204.8a68.267 68.267 0 0 1 68.267 68.267z m477.867-341.334h-204.8a136.533 136.533 0 0 0-136.534 136.534v204.8A136.533 136.533 0 0 0 682.667 1024h204.8A136.533 136.533 0 0 0 1024 887.467v-204.8a136.533 136.533 0 0 0-136.533-136.534z m68.266 341.334a68.267 68.267 0 0 1-68.266 68.266h-204.8a68.267 68.267 0 0 1-68.267-68.266v-204.8a68.267 68.267 0 0 1 68.267-68.267h204.8a68.267 68.267 0 0 1 68.266 68.267z"  ></path></symbol></svg>',
    s = (s = document.getElementsByTagName("script"))[
      s.length - 1
    ].getAttribute("data-injectcss");
  if (s && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function l() {
    i || ((i = !0), a());
  }
  (t = function () {
    var e, t, n;
    ((n = document.createElement("div")).innerHTML = d),
      (d = null),
      (t = n.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (e = t),
        (n = document.body).firstChild
          ? (t = n.firstChild).parentNode.insertBefore(e, t)
          : n.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), t();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((a = t),
        (o = e.document),
        (i = !1),
        (c = function () {
          try {
            o.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(c, 50);
          }
          l();
        })(),
        (o.onreadystatechange = function () {
          "complete" == o.readyState && ((o.onreadystatechange = null), l());
        }));
})(window);
