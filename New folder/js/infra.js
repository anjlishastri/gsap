(function () {
  const dot = document.querySelector(".dot");
  const circle = document.querySelector(".dot circle");
  const links = document.querySelectorAll(".navbar-nav");
  let mouse = {
    x: 0,
    y: 0,
  };
  let mouseStored = Object.assign({}, mouse);

  gsap.set(circle, { transformOrigin: "50% 50%" });

  // Set event listeners
  window.addEventListener("mousemove", function (e) {
    setMouseCoords(e);
  });

  // And use the ticker to update the rotation accordingly
  gsap.ticker.add(animateDot);

  // "load in" the dot
  gsap.to(dot, {
    duration: 1,
    delay: 1,
    scale: 0.5,
    opacity: 1,
    ease: "Power2.easeInOut",
  });

  // Set up additional effects for when links are hovered
  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      gsap.to(circle, {
        duration: 0.45,
        scale: 2,
        fill: "#feca57",
        ease: "Power2.easeOut",
      });
    });

    link.addEventListener("mouseleave", (e) => {
      gsap.to(circle, {
        duration: 0.3,
        scale: 0.5,
        delay: 0.2,
        fill: "#f368e0",
        ease: "Power2.easeIn",
      });
    });
  });

  function setMouseCoords(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }

  function animateDot() {
    if (mouseStored.x === mouse.x && mouseStored.y === mouse.y) return;

    gsap.to(dot, {
      x: mouse.x,
      y: mouse.y,
      ease: Elastic.easeOut.config(1.25, 1),
      duration: 1.0,
      delay: 0.1,
    });

    // Store the mouse position for the next tick
    mouseStored.x = mouse.x;
    mouseStored.y = mouse.y;
  }
})();
// Text

const tl = gsap.timeline({repeat: -1, repeadDelay: 0});

tl.from(".line span", {
  y: 100,
  delay: 0,
	duration: .5,
  transformOrigin: "0% 50% -50",
}).to(".line span", {
  y: -100,
  ease: "none",
  transformOrigin: "0% 50% -50",
  delay: 1.5,
	duration: .3,
});
tl.from(".lineOne span", {
  y: 100,
  delay: 0,
	duration: .5,
  transformOrigin: "0% 50% -50",
}).to(".lineOne span", {
  y: -100,
  ease: "none",
  transformOrigin: "0% 50% -50",
  delay: 1.5,
	duration: .3,
});
tl.from(".lineTwo span", {
  y: 100,
  delay: 0,
	duration: .5,
  transformOrigin: "0% 50% -50",
}).to(".lineTwo span", {
  y: -100,
  ease: "none",
  transformOrigin: "0% 50% -50",
  delay: 1.5,
	duration: .3,
});

// Text

// scroll

// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=3500",
//   }
// });
let tl1 = gsap.timeline({
	scrollTrigger: {
		    trigger: ".rating-container",
		    pin: true,
			start:"left",
			end: "right",
		    scrub: true,
		    
		 
		  }
})
tl1.to('.rating-container',{
	x:500
})




