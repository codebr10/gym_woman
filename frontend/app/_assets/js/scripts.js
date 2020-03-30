/* HAMBURGER MENU
================================== */

var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

/* HERO ANIMATION
================================== */

TweenMax.to('.reveal-hero', 3, {
    width: "0",
    ease: Expo.easeInOut,
    delay: 0.9,
});

TweenMax.to('.hero--box-img', 2, {
    opacity: " 1",
    ease: Bounce.easeInOut,
    delay: 3,
});

TweenMax.to('.app-header', 2, {
    opacity: "1",
    ease: Expo.easeInOut,
    delay: 4,
});

/* NAV ANIMATION
================================== */

$('body').on('click', '.hamburger', function (e) {

    var tlmenu = new TimelineMax({ paused: true, delay: -1, immediateRender: true });

    tlmenu.staggerFromTo('.app-nav--list li', 3,
        { opacity: 1, ease: Expo.easeInOut },
        { opacity: 0, ease: Expo.easeInOut }, 0.1);

    if ($(this).hasClass('is-active')) {
        tlmenu.reverse(0)
        TweenMax.to('.app-nav', 3, {
            left: "0",
            ease: Expo.easeInOut,
            delay: -1,
        });
    } else {
        setTimeout(function () {
            TweenMax.to('.app-nav', 3, {
                left: "-100%",                
                ease: Expo.easeInOut,
                delay: -1,
                //immediateRender: true
            });
        }, 1500);
        tlmenu.play(1);
    }

    setTimeout(function () {

    }, 2000);

});