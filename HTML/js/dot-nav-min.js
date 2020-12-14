const dotNav = (e, t) => {
    (e => {
        let t = document.getElementsByTagName(e), n = window.innerHeight;
        const o = () => {
            for (let e = 0; e < t.length; e++) t[e].getBoundingClientRect().top < n ? t[e].classList.add("in-viewport") : t[e].classList.remove("in-viewport")
        };
        o(), window.addEventListener("scroll", o)
    })("section");
    const n = document.getElementsByTagName(e), o = document.getElementById("dot-nav");
    let s, i = document.getElementsByClassName("in-viewport");
    for (let e = 0; e < n.length; e++) n[e].classList.add("section-" + e);
    (() => {
        for (let e = 0; e < n.length; e++) {
            const t = document.createElement("a");
            t.id = "dot-" + e, t.classList.add("dots"), t.href = "#", t.setAttribute("data-sec", e), o.appendChild(t)
        }
    })();
    let a = document.getElementById("dot-nav").clientHeight / 2;
    document.getElementById("dot-nav").style.top = "calc(50% - " + a + "px)";
    const c = () => {
        i = document.getElementsByClassName("in-viewport"), s = document.getElementsByClassName("dots"), visNum = i.length;
        let e = visNum - 1;
        for (let e = 0; e < n.length; e++) s[e].classList.remove("active");
        document.getElementById("dot-" + e).classList.add("active")
    };
    c(), window.onscroll = function () {
        c()
    };
    const d = e => {
        let n = e.currentTarget.dataset.sec;
        !function (e, t = 200, n = "linear", o) {
            const s = {
                    linear: e => e,
                    easeInQuad: e => e * e,
                    easeOutQuad: e => e * (2 - e),
                    easeInOutQuad: e => e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1,
                    easeInCubic: e => e * e * e,
                    easeOutCubic: e => --e * e * e + 1,
                    easeInOutCubic: e => e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
                    easeInQuart: e => e * e * e * e,
                    easeOutQuart: e => 1 - --e * e * e * e,
                    easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e,
                    easeInQuint: e => e * e * e * e * e,
                    easeOutQuint: e => 1 + --e * e * e * e * e,
                    easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
                }, i = window.pageYOffset, a = "now" in window.performance ? performance.now() : (new Date).getTime(),
                c = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
                d = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
                l = "number" == typeof e ? e : e.offsetTop, m = Math.round(c - l < d ? c - d : l);
            if ("requestAnimationFrame" in window == 0) return window.scroll(0, m), void (o && o());
            !function e() {
                const c = "now" in window.performance ? performance.now() : (new Date).getTime(),
                    d = Math.min(1, (c - a) / t), l = s[n](d);
                window.scroll(0, Math.ceil(l * (m - i) + i)), window.pageYOffset !== m ? requestAnimationFrame(e) : o && o()
            }()
        }(document.querySelector(".section-" + n), "1000", t), e.preventDefault()
    };
    s = document.getElementsByClassName("dots");
    for (let e = 0; e < s.length; e++) s[e].addEventListener("click", d)
};
dotNav("section", "easeInOutCubic");