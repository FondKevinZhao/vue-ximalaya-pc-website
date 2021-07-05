!(function (e) {
  var t,
    n,
    c,
    o,
    i,
    d,
    l =
      '<svg><symbol id="icon-yijianfankui1" viewBox="0 0 1024 1024"><path d="M832.768 341.205333c0-18.901333 15.872-34.261333 35.413333-34.261333 19.882667 0 36.096 15.658667 36.096 34.858667v550.144c0 60.970667-51.498667 110.72-114.602666 110.72H157.226667C94.165333 1002.666667 42.666667 952.917333 42.666667 891.946667V203.008c0-60.970667 51.498667-110.72 114.56-110.72h493.738666c20.650667 0 37.333333 16.128 37.333334 36.096 0 21.632-18.090667 39.296-40.661334 39.296H149.12c-19.370667 0-35.114667 15.36-35.114667 33.92v691.882667c0 18.773333 15.914667 33.962667 35.114667 33.962666h648.533333c19.370667 0 35.114667-15.36 35.114667-33.962666V341.205333z m-388.693333 101.034667H215.552a28.885333 28.885333 0 0 1-29.226667-28.288V400.64c0-15.488 13.184-28.245333 29.226667-28.245333h228.522667c16.042667 0 29.226667 12.757333 29.226666 28.245333v13.354667c0.170667 15.530667-13.013333 28.288-29.226666 28.288z m214.357333 210.048H215.552a28.885333 28.885333 0 0 1-29.226667-28.245333v-13.397334c0-15.488 13.184-28.245333 29.226667-28.245333h442.88c16.042667 0 29.226667 12.757333 29.226667 28.245333v13.397334c0 15.488-13.184 28.245333-29.226667 28.245333z m314.325333-573.184l-366.293333 355.882667a30.250667 30.250667 0 0 1-41.472 0.170666l-9.813333-9.514666a27.818667 27.818667 0 0 1-0.213334-40.106667L921.429333 29.696a30.250667 30.250667 0 0 1 41.472-0.170667l9.813334 9.514667c11.477333 11.093333 11.477333 29.013333 0 40.106667z" fill="#707070" ></path></symbol><symbol id="icon-huidaodingbu" viewBox="0 0 1024 1024"><path d="M889.856 787.456c-11.264 0-22.528-5.12-30.72-13.312L550.912 465.92c-12.288-14.336-29.696-17.408-39.936-17.408-14.336 0-29.696 7.168-39.936 17.408l-307.2 307.2c-7.168 9.216-17.408 14.336-29.696 14.336-11.264 0-22.528-5.12-30.72-13.312l-1.024-1.024-1.024-1.024c-7.168-10.24-10.24-20.48-10.24-31.744 0-12.288 4.096-22.528 11.264-29.696l313.344-313.344c24.576-24.576 58.368-37.888 94.208-37.888 37.888 0 69.632 12.288 94.208 37.888l314.368 316.416c7.168 7.168 11.264 18.432 11.264 29.696 0 11.264-4.096 22.528-11.264 29.696-6.144 10.24-17.408 14.336-28.672 14.336zM901.12 322.56c21.504 0 45.056-18.432 45.056-45.056 0-26.624-22.528-41.984-45.056-41.984H122.88c-25.6 0-45.056 18.432-45.056 45.056 0 24.576 18.432 41.984 45.056 41.984h778.24z"  ></path></symbol></svg>',
    a = (a = document.getElementsByTagName("script"))[
      a.length - 1
    ].getAttribute("data-injectcss");
  if (a && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    i || ((i = !0), c());
  }
  (t = function () {
    var e, t, n;
    ((n = document.createElement("div")).innerHTML = l),
      (l = null),
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
        ((c = t),
        (o = e.document),
        (i = !1),
        (d = function () {
          try {
            o.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(d, 50);
          }
          s();
        })(),
        (o.onreadystatechange = function () {
          "complete" == o.readyState && ((o.onreadystatechange = null), s());
        }));
})(window);
