gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

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
const titleTl = new TimelineMax({repeat: -1});

titleTl.from("#animated-text .line", {
	yPercent: 200,
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
	yPercent: 200,
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
	yPercent: 200,
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
let banner = document.getElementById("banner");

scrollDownBtn?.addEventListener("click", function(){
  window.scrollTo(0, banner?.clientHeight)
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
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -75 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".rating-container",
    pin: true,
    scrub: 1,
	// markers:true,
    // snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=4000",
  }
});

let section = gsap.utils.toArray(".card");

gsap.to(section, {
  xPercent: -75 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".card-container",
    pin: true,
    scrub: 1,
	// markers:true,
    // snap: 1 / (sections.length - 1),

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

function setLogoPattern(){
  gsap.set(".logo-pattern", {
    width: 1,
    modifiers: {
      width: function() {
        let leftOffset = this.targets()[0].getBoundingClientRect().left;
        return (`${window.innerWidth - leftOffset}px`);
      }
    },
  });
}

setLogoPattern();

window.addEventListener("resize", setLogoPattern);

gsap.to(".logo-pattern #horizontal-line", {
  width: "100%",
  scrollTrigger: {
    trigger: ".logo-pattern #horizontal-line",
    start: "clamp(top top+=80%)",
    end: "clamp(top top+=50%)",
    scrub: .5,
  }
});

gsap.to(".logo-pattern #vertical-line", {
  height: "100%",
  scrollTrigger: {
    trigger: ".logo-pattern #vertical-line",
    start: "clamp(top top+=50%)",
    end: "clamp(bottom top+=10%)",
    scrub: .5,
  }
});

// card-api
let navbarHeight = document.querySelector("nav.navbar")?.clientHeight;
let cardApi = gsap.utils.toArray(".card-api");

cardApi.forEach(element => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: `top top+=${navbarHeight}`,
      endTrigger: ".card-api-wrapper",
      pin: true,
      pinSpacing: false,
    }
  });
});

// animation
let animationCard = document.querySelectorAll("[data-animation='pointer']");

animationCard.forEach(element => {
  element.addEventListener("mousemove", (e) => {
    let el = e.currentTarget;
    var relX = e.clientX;
    var relY = e.clientY;
  
    TweenMax.to(el, .5, {
      x: (relX - window.innerWidth / 2) / window.innerWidth * -100,
      y: (relY - window.innerHeight / 2) / window.innerHeight * -100
    });
  });

  element.addEventListener("mouseleave", (e) => {
    let el = e.currentTarget;
    TweenMax.to(el, .5, {
      x: 0,
      y: 0,
      ease: "back.out(3)",
    });
  });
});

let parallaxBg = document.querySelectorAll(".parallax-backgrounds");
let bg = document.querySelectorAll(".parallax-backgrounds .background-image");
let fg = document.querySelectorAll(".parallax-backgrounds .image");

parallaxBg.forEach(element => {
  element.addEventListener("mousemove", (e) => {
    let el = bg;
    var relX = e.clientX;
    var relY = e.clientY;
  
    TweenMax.to(el, .5, {
      x: (relX - window.innerWidth / 2) / window.innerWidth * -100,
      y: (relY - window.innerHeight / 2) / window.innerHeight * -100
    });
  });

  element.addEventListener("mousemove", (e) => {
    let el = fg;
    var relX = e.clientX;
    var relY = e.clientY;
  
    TweenMax.to(el, .5, {
      x: (relX - window.innerWidth / 2) / window.innerWidth * 100,
      y: (relY - window.innerHeight / 2) / window.innerHeight * 100
    });
  });

  element.addEventListener("mouseleave", (e) => {
    let el = parallaxBg[0].children;
    TweenMax.to(el, .5, {
      x: 0,
      y: 0,
      ease: "back.out(3)",
    });
  });
});