(function () {
  var _id = "bb1093dc92f06d6c333331ca5603e1ca";
  while (document.getElementById("timer" + _id)) _id = _id + "0";
  document.write("<div id='timer" + _id + "' style='min-width:167px;height:48px;'></div>");
  var _t = document.createElement("script");
  _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
  var _f = function (_k) {
    var l = new MegaTimer(_id, {
      view: [1, 1, 1, 1],
      type: { currentType: "1", params: { usertime: true, tz: "3", utc: 1781740800000 } },
      design: {
        type: "text",
        params: {
          "number-font-family": { family: "Marmelad", link: "<link href='//fonts.googleapis.com/css?family=Marmelad&subset=latin,cyrillic' rel='stylesheet' type='text/css'>" },
          "number-font-size": "36",
          "number-font-color": "#ffffff",
          "separator-margin": "0",
          "separator-on": true,
          "separator-text": ":",
          "text-on": true,
          "text-font-family": { family: "Marmelad", link: "<link href='//fonts.googleapis.com/css?family=Marmelad&subset=latin,cyrillic' rel='stylesheet' type='text/css'>" },
          "text-font-size": "12",
          "text-font-color": "#ffffff",
        },
      },
      designId: 1,
      theme: "white",
      width: 167,
      height: 48,
    });
    if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function () {
    if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}).call(this);
