import gsap from "gsap";

export const animation = async () => {
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.refresh();

  if (window.innerWidth > 1023) {
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }

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
      ],
      {
        y: "30vh",
        opacity: 0,
      },
    );

    gsap.set(
      [".the-main-page-section-discount", ".the-main-page-section-calc "],
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
        trigger: ".main-page__inner",
        start: "top top",
        end: "+=5000px",
        scrub: 4,
        pin: true,
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
      delay: 2,
    });
  }, 300);
};
