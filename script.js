const loader_h1 = document.querySelector(".loader h1");

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function LoaderAnimation() {
  let count = 0;
  const interval = setInterval(() => {
    loader_h1.textContent = count;
    if (count >= 100) {
      clearInterval(interval);
      gsap.to(".loader", {
        y: "-100%",
        display: "none",
        duration: 0.6,
        ease: "sine.inOut",
      });
    }
    count += 4;
  }, 45);
}

function headerAnimation() {
  gsap.from(".head", {
    delay: 1.5,
    staggar: 1,
    y: "120",
    duration: 0.7,
    ease: "power.inOut",
  });
}

function mousefollower() {
  window.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      x: dets.clientX + "px",
      y: dets.clientY + "px",
      zIndex: 99,
      duration: 0.5,
    });
  });
}

function DateAnimation() {
  const year = "1898";

  gsap.to(".year_anim", {
    y: function (index) {
      return -parseInt(year[index], 10) + "em";
    },
    duration: 1.5,
    stagger: 0.4,
    scrollTrigger: {
      scroller: "#main",
      trigger: ".year_anim",
      // markers: true,
      start: "-34% 80%",
    },
  });
}

function heroSplitter() {
  gsap.from(".hero_div img", {
    scale: 2,
    duration: 1,
    scrollTrigger: {
      scroller: "#main",
      trigger: " .hero_div",
      // markers: true,
      start: "50% 85%",
      end: "50% 50%",
      scrub: 2,
    },
  });
}

function smallAnimation() {
  gsap.to(".arrow", {
    y: -24,
    repeat: -1,
    yoyo: true,
    duration: 1,
  });

  gsap.to(".img-context > img", {
    scale: 1.3,
    duration: 1,
    scrollTrigger: {
      scroller: "#main",
      trigger: ".img-context",
      // markers: true,
      start: "50% 85%",
      end: "50% 50%",
      scrub: 2,
    },
  });
}

function outro() {
  gsap.to(".outro", {
    clipPath:
      "polygon(27.50% 25%, 72% 25%, 56% 56%, 56.05% 75%, 45% 75%, 45% 56%)",
    scrollTrigger: {
      trigger: ".outro",
      scroller: "#main",
      // markers: true,
      start: "50% 85%",
      end: "50% 70%",
      scrub: true,
    },
  });

  gsap.to(".outro img", {
    scale: 1.1,
    ease: "none",
    top: "50px",

    scrollTrigger: {
      trigger: ".outro img",
      scroller: "#main",
      // markers: true,
      start: "50% 85%",
      end: "50% 70%",
      scrub: true,
    },
  });
}
locoScroll();
LoaderAnimation();
headerAnimation();
mousefollower();
DateAnimation();
heroSplitter();
smallAnimation();
outro();
