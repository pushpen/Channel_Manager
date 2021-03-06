(function(a) {
    a.fn.circliful = function(b) {
        var c = a.extend({
            fgcolor: "#556b2f",
            bgcolor: "#eee",
            fill: false,
            width: 15,
            dimension: 200,
            fontsize: 15,
            percent: 50,
            animationstep: 1,
            iconsize: "20px",
            iconcolor: "#999",
            border: "default"
        }, b);
        return this.each(function() {
            var u = ["fgcolor", "bgcolor", "fill", "width", "dimension", "fontsize", "animationstep", "endPercent", "icon", "iconcolor", "iconsize", "border"];
            var e = {};
            var D = "";
            var l = 0;
            var r = a(this);
            var w = false;
            var t, E;
            r.addClass("circliful");
            d(r);
            if (r.data("text") != undefined) {
                t = r.data("text");
                if (r.data("icon") != undefined) {
                    D = a("<i></i>").addClass("fa " + a(this).data("icon")).css({
                        color: e.iconcolor,
                        "font-size": e.iconsize
                    })
                }
                if (r.data("type") != undefined) {
                    i = a(this).data("type");
                    if (i == "half") {
                        q(r, "circle-text-half", (e.dimension / 1.45))
                    } else {
                        q(r, "circle-text", e.dimension)
                    }
                } else {
                    q(r, "circle-text", e.dimension)
                }
            }
            if (a(this).data("total") != undefined && a(this).data("part") != undefined) {
                var G = a(this).data("total") / 100;
                percent = ((a(this).data("part") / G) / 100).toFixed(3);
                l = (a(this).data("part") / G).toFixed(3)
            } else {
                if (a(this).data("percent") != undefined) {
                    percent = a(this).data("percent") / 100;
                    l = a(this).data("percent")
                } else {
                    percent = c.percent / 100
                }
            }
            if (a(this).data("info") != undefined) {
                E = a(this).data("info");
                if (a(this).data("type") != undefined) {
                    i = a(this).data("type");
                    if (i == "half") {
                        B(r, 0.9)
                    } else {
                        B(r, 1.25)
                    }
                } else {
                    B(r, 1.25)
                }
            }
            a(this).width(e.dimension + "px");
            var h = a("<canvas></canvas>").attr({
                width: e.dimension,
                height: e.dimension
            }).appendTo(a(this)).get(0);
            var f = h.getContext("2d");
            var p = h.width / 2;
            var o = h.height / 2;
            var A = e.percent * 360;
            var F = A * (Math.PI / 180);
            var j = h.width / 2.5;
            var z = 2.3 * Math.PI;
            var v = 0;
            var C = false;
            var m = e.animationstep === 0 ? l : 0;
            var n = Math.max(e.animationstep, 0);
            var s = Math.PI * 2;
            var g = Math.PI / 2;
            var i = "";
            if (a(this).data("type") != undefined) {
                i = a(this).data("type");
                if (i == "half") {
                    var z = 2 * Math.PI;
                    var v = 3.13;
                    var s = Math.PI * 1;
                    var g = Math.PI / 0.996
                }
            }

            function q(H, x, y) {
                a("<span></span>").appendTo(H).addClass(x).text(t).prepend(D).css({
                    "line-height": y + "px",
                    "font-size": e.fontsize + "px"
                })
            }

            function B(y, x) {
                a("<span></span>").appendTo(y).addClass("circle-info-half").css("line-height", (e.dimension * x) + "px")
            }

            function d(x) {
                a.each(u, function(y, H) {
                    if (x.data(H) != undefined) {
                        e[H] = x.data(H)
                    } else {
                        e[H] = a(c).attr(H)
                    }
                    if (H == "fill" && x.data("fill") != undefined) {
                        w = true
                    }
                })
            }

            function k(x) {
                f.clearRect(0, 0, h.width, h.height);
                f.beginPath();
                f.arc(p, o, j, v, z, false);
                f.lineWidth = e.width + 1;
                f.strokeStyle = e.bgcolor;
                f.stroke();
                if (w) {
                    f.fillStyle = e.fill;
                    f.fill()
                }
                f.beginPath();
                f.arc(p, o, j, -(g), ((s) * x) - g, false);
                if (e.border == "outline") {
                    f.lineWidth = e.width + 13
                } else {
                    if (e.border == "inline") {
                        f.lineWidth = e.width - 13
                    }
                }
                f.strokeStyle = e.fgcolor;
                f.stroke();
                if (m < l) {
                    m += n;
                    requestAnimationFrame(function() {
                        k(Math.min(m, l) / 100)
                    }, r)
                }
            }
            k(m / 100)
        })
    }
}(jQuery));