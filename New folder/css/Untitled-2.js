let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -75 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".rating-container",
    pin: true,
    scrub: 1,
	// markers:true,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=4000",
  }
});