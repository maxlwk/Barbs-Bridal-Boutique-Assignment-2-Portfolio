gsap.set(".header-reveal", { scale: 0.75 });


gsap.to(".header-reveal", {
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".header",
    scrub: 1,
    pin: true,
    end: "+=1000",
  },
});


gsap.to(".left-img", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".art-wrapper",
    scrub: 1,
  },
});
gsap.to(".right-img", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".art-wrapper",
    scrub: 1,
  },
});
gsap.to(".titel", {
  yPercent: -0,
  ease: "none",
  scrollTrigger: {
    trigger: ".art-wrapper",
    scrub: 1,
    end: "100px;",
  },
});
gsap.to(".left-scroll", {
  xPercent: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".artist",
    scrub: 1,
    start: "-50%",
    pin: true,
    end: "+=1000"

  },
});
gsap.to(".right-scroll", {
  xPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".artist",
    scrub: 1,
    pin: true,
    start: "-50%",
    end: "+=1000"

  },
});