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
        fill: "#0ededa",
        opacity: 0.8,
        ease: "Power2.easeOut",
      });
    });

    link.addEventListener("mouseleave", (e) => {
      gsap.to(circle, {
        duration: 0.3,
        scale: 0.5,
        delay: 0.2,
        fill: "#1363df",
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

// function textAnimaiton(text, bg){
//   const titleTl = new TimelineMax();

//   titleTl.from(text, {
//     ease: "none",
//     yPercent: 100,
//     duration: .4,
//     onUpdate: function(){
//       let target = this.targets()[0];
//       document.querySelector("#animated-text").style.height = `${target.clientHeight}px`;
//     },
//   }).to(text, {
//     ease: "none",
//     yPercent: -100,
//     duration: .4,
//     delay: .5,
//   }).fromTo(bg, {
//     ease: "none",
//     duration: .5,
//     backgroundPosition: "0 0",
//     height: 0,
//     bottom: 0,
//   }, {
//     ease: "none",
//     duration: .5,
//     backgroundPosition: "0 50%",
//     height: "100%",
//     top: 0,
//   }, "-=1.8").to(bg, {
//     ease: "none",
//     backgroundPosition: "0 100%",
//     height: 0,
//     bottom: 0,
//   });

//   return titleTl;
// }

// const masterTl = new TimelineMax()
// masterTl.add(textAnimaiton("#animated-text .line", "#banner .backgrounds .ai"), "-=.8")
// .add(textAnimaiton("#animated-text .lineOne", "#banner .backgrounds .ml"), "-=.8")
// .add(textAnimaiton("#animated-text .lineTwo", "#banner .backgrounds .web3"), "-=.8");

const titleTl = new TimelineMax({repeat: -1});

titleTl.from("#animated-text .line", {
	yPercent: 100,
  duration: .4,
  onUpdate: function(){
    let target = this.targets()[0];
    document.querySelector("#animated-text").style.height = `${target.clientHeight}px`;
  },
}).to("#animated-text .line", {
	yPercent: -100,
	ease: "none",
  duration: .4,
	delay: 1,
}).fromTo("#banner .backgrounds .ai", 1, {
  backgroundPosition: "0 0",
  height: 0,
  bottom: 0,
}, {
  backgroundPosition: "0 50%",
  height: "100%",
  top: 0,
}, "ai-=2.8").to("#banner .backgrounds .ai", 1, {
  backgroundPosition: "0 100%",
  height: 0,
  bottom: 0,
}).from("#animated-text .lineOne", {
	yPercent: 100,
  duration: .4,
  onUpdate: function(){
    let target = this.targets()[0];
    document.querySelector("#animated-text").style.height = `${target.clientHeight}px`;
  },
}).to("#animated-text .lineOne", {
	yPercent: -100,
	ease: "none",
  duration: .4,
	delay: 1,
}).fromTo("#banner .backgrounds .ml", 1, {
  backgroundPosition: "0 0",
  height: 0,
  bottom: 0,
}, {
  backgroundPosition: "0 50%",
  height: "100%",
  top: 0,
}, "ml-=2.8").to("#banner .backgrounds .ml", 1, {
  backgroundPosition: "0 100%",
  height: 0,
  bottom: 0,
}).from("#animated-text .lineTwo", {
	yPercent: 100,
  duration: .4,
  onUpdate: function(){
    let target = this.targets()[0];
    document.querySelector("#animated-text").style.height = `${target.clientHeight}px`;
  },
}).to("#animated-text .lineTwo", {
	yPercent: -100,
	ease: "none",
  duration: .4,
	delay: 1,
}).fromTo("#banner .backgrounds .web3", 1, {
  backgroundPosition: "0 0",
  height: 0,
  bottom: 0,
}, {
  backgroundPosition: "0 50%",
  height: "100%",
  top: 0,
}, "web3-=2.8").to("#banner .backgrounds .web3", 1, {
  backgroundPosition: "0 100%",
  height: 0,
  bottom: 0,
});
// Text

// scroll down 
let scrollDownBtn = document.getElementById("scroll-down");
scrollDownBtn?.addEventListener("click", function(){
  window.scroll(false, banner?.clientHeight)
});

const swiper = new Swiper(".slider .swiper", {
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Text

// scroll

gsap.registerPlugin(ScrollTrigger);

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
gsap.registerPlugin(ScrollTrigger);

let section = gsap.utils.toArray(".card");

gsap.to(section, {
  xPercent: -75 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".card-container",
    pin: true,
    scrub: 1,
	// markers:true,
    snap: 1 / (sections.length - 1),

    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=4000",
  }
});
// let tl1 = gsap.timeline({
// 	  x:-100,
// 	scrollTrigger: {
// 		    trigger: ".rating-container",
// 		    pin: true,
// 			start:"left 80%",
// 			end: "top 20%",
// 		    scrub: true,
// 			markers:true,
			
		    
		 
// 		  }
// })
// tl1.to('.rating-container',{
// 	x:100
// })




