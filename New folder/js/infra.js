

(function() {
	const dot = document.querySelector(".dot");
	const circle = document.querySelector(".dot circle");
	const links = document.querySelectorAll(".navbar-nav");
	let mouse = {
		x: 0,
		y: 0
	};
	let mouseStored = Object.assign({}, mouse);

	gsap.set(circle, {transformOrigin: "50% 50%"});

	// Set event listeners
	window.addEventListener("mousemove", function(e) {
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
	links.forEach(link => {
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
			duration: 1.0      ,
			delay: 0.1
		});

		// Store the mouse position for the next tick
		mouseStored.x = mouse.x;
		mouseStored.y = mouse.y;
	}
}());
// Text

const tl = gsap.timeline();


tl.from(".line span", 1, {
  y: 130,
  ease: "power4.out",
  delay: 0.3,
  skewY: 0,
  stagger: {
    amount: 0.3
  }
})
  .to(".line span", 1.2, {
	y: -130,
	ease: "power4.out",
	delay: 0.3,
	skewY: 0,
	stagger: {
	  amount: 1
	}

})
tl.from(".lineOne span", 1, {
	y: 100,
	ease: "power4.out",
	delay: 0.4,
	skewY: 0,
	stagger: {
	  amount: 0.3
	}
  })
	.to(".lineOne span", 1.8, {
	  y: -100,
	  ease: "power4.out",
	  delay: 0.4,
	  skewY: 0,
	  stagger: {
		amount: 1
	  }
  
  })
  tl.from(".lineTwo span", 1, {
	y: 130,
	ease: "power4.out",
	delay: 0.5,
	skewY: 0,
	stagger: {
	  amount: 0.3
	}
  })
	.to(".lineTwo span", 1.8, {
	  y: -130,
	  ease: "power4.out",
	  delay: 0.5,
	  skewY: 0,
	  stagger: {
		amount: 1
	  }
  
  })

	

// Text

// scroll

const showDemo = () => {
	document.body.style.overflow = "auto";
	document.scrollingElement.scrollTo(0, 0);
	gsap.to(document.querySelector(".loader"), { autoAlpha: 0 });
  
	gsap.utils.toArray("section").forEach((section, index) => {
	  const w = section.querySelector(".wrapper");
	  const [x, xEnd] =
		index % 2
		  ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
		  : [w.scrollWidth * -1, 0];
	  gsap.fromTo(
		w,
		{ x },
		{
		  x: xEnd,
		  scrollTrigger: {
			trigger: section,
			scrub: 0.5
		  }
		}
	  );
	});
  };
  

  
