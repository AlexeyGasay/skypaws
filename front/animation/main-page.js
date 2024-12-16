import gsap from "gsap";

export const animation = async () => {
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.refresh();

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });

  setTimeout(() => {
    ScrollTrigger.refresh();
    // const videoHtmlEl = document.querySelector(
    //   ".the-main-page-section-hero__info-video",
    // );

    gsap.set("body", {
      opacity: 1,
    });

    // gsap.set(".the-main-page-section-hero__info-video", {
    //   x: "100vw",
    // });

    gsap.set(
      [
        ".the-main-page-section-discount__info",
        ".the-main-page-section-ecosystem",
        ".the-main-page-section-stats",
      ],
      {
        y: "30vh",
        opacity: 0,
      },
    );

    gsap.set(
      [
        ".the-main-page-section-discount",
        ".the-main-page-section-calc",
        ".the-main-page-section-stats",
      ],
      {
        pointerEvents: "none",
        opacity: 0,
      },
    );

    gsap.set(".the-main-page-section-calc", {
      x: "30vw",
    });

    gsap.set(".the-main-page-section-ecosystem", {
      pointerEvents: "none",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-page",
        start: "top top",
        end: "+=5000px top",
        scrub: 3,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
    // tl.to(".the-main-page-section-hero__info-video", {
    //   x: 0,
    //   duration: 10,
    //   onStart: () => {
    //     videoHtmlEl.play();
    //   },
    // });
    tl.to(
      ".the-main-page-section-hero__info",
      {
        y: "-30vh",
        opacity: 0,
        pointerEvents: "none",

        duration: 10,
      },
      "<",
    );
    tl.to(
      ".the-main-page-section-hero",
      {
        opacity: 0,
        duration: 10,
        pointerEvents: "none",
      },
      "<",
    );

    tl.to(
      ".the-main-page-section-discount",
      {
        pointerEvents: "all",
        opacity: 1,

        duration: 5,
        delay: 2,
        // onStart: () => {
        //   videoHtmlEl.pause();
        // },
        // onReverseComplete: () => {
        //   videoHtmlEl.play();
        // },
      },
      "<",
    );
    tl.to(
      ".the-main-page-section-discount__info",
      {
        y: 0,
        opacity: 1,

        duration: 5,
      },
      "<",
    );
    tl.to(".the-main-page-section-discount", {
      y: "-30vh",
      opacity: 0,

      pointerEvents: "none",
      duration: 5,
    });
    tl.to(
      ".the-main-page-section-ecosystem",
      {
        y: 0,
        opacity: 1,

        pointerEvents: "all",
        delay: 2,
        duration: 5,
      },
      "<",
    );
    tl.to(".the-main-page-section-ecosystem__list", {
      x:
        -(
          document.querySelector(".the-main-page-section-ecosystem__list")
            .clientWidth - window.innerWidth
        ) - 100,
      duration: 10,
    });
    tl.to(".the-main-page-section-ecosystem", {
      x: "-30vw",
      opacity: 0,

      pointerEvents: "none",
      duration: 5,
    });

    tl.to(
      ".the-main-page-section-calc",
      {
        pointerEvents: "all",
        opacity: 1,
        x: 0,

        duration: 5,
        delay: 2,
      },
      "<",
    );
    tl.to(".the-main-page-section-calc", {
      y: "-30vh",
      opacity: 0,

      pointerEvents: "none",
      duration: 5,
    });
    tl.to(
      ".the-main-page-section-stats",
      {
        y: 0,
        opacity: 1,

        pointerEvents: "all",
        delay: 2,
        duration: 5,
      },
      "<",
    );
  }, 300);
};

export const animationMobile = async () => {
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  gsap.set("body", {
    opacity: 1,
  });

  const arraySectionClass = [
    ".the-main-page-section-discount",
    ".the-main-page-section-ecosystem",
    ".the-main-page-section-calc",
    ".the-main-page-section-stats",
  ];

  gsap.set(arraySectionClass, {
    opacity: 0,
    y: "20vh",
    filter: "blur(5px)",
  });

  arraySectionClass.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "center bottom",
        scrub: 2,
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    });
  });

  ScrollTrigger.refresh();
};
