import gsap from "gsap";

export const animation = async () => {
  const ScrollTrigger = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  const videoHtmlEl = document.querySelector(
    ".the-main-page-section-hero__info-video",
  );

  gsap.set(".the-main-page-section-hero__info-video", {
    x: "100vw",
  });

  gsap.set(
    [
      ".the-main-page-section-discount__info",
      ".the-main-page-section-ecosystem",
    ],
    {
      y: "30vh",
      opacity: 0,
      filter: "blur(10px)",
    },
  );

  gsap.set(
    [".the-main-page-section-discount", ".the-main-page-section-calc "],
    {
      pointerEvents: "none",
      opacity: 0,
      filter: "blur(10px)",
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
      end: "+=5000px",
      scrub: 2,
      pin: true,
    },
  });
  tl.to(".the-main-page-section-hero__info-video", {
    x: 0,
    duration: 10,
    onStart: () => {
      videoHtmlEl.play();
    },
  });
  tl.to(
    ".the-main-page-section-hero__info",
    {
      x: "-30vw",
      opacity: 0,
      pointerEvents: "none",
      filter: "blur(10px)",
      duration: 10,
    },
    "<",
  );
  tl.to(".the-main-page-section-hero", {
    opacity: 0,
    duration: 10,
    pointerEvents: "none",
  });

  tl.to(
    ".the-main-page-section-discount",
    {
      pointerEvents: "all",
      opacity: 1,
      filter: "blur(0px)",
      duration: 5,
      onStart: () => {
        videoHtmlEl.pause();
      },
      onReverseComplete: () => {
        videoHtmlEl.play();
      },
    },
    "<",
  );
  tl.to(
    ".the-main-page-section-discount__info",
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 5,
    },
    "<",
  );
  tl.to(".the-main-page-section-discount", {
    y: "-30vh",
    opacity: 0,
    filter: "blur(10px)",
    pointerEvents: "none",
    duration: 5,
  });
  tl.to(
    ".the-main-page-section-ecosystem",
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
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
    filter: "blur(0px)",
    pointerEvents: "none",
    duration: 5,
  });
  tl.to(
    ".the-main-page-section-calc",
    {
      pointerEvents: "all",
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 5,
    },
    "<",
  );
  tl.to(".the-main-page-section-calc", {
    delay: 5,
  });
};
