import animateScrollTo from "animated-scroll-to";

export function useAnimateScrollTo(id, isRef, indent) {
  try {
    const _indent = indent || window.innerWidth >= 1024 ? 120 : 70;

    let heightToScroll;

    if (isRef) {
      heightToScroll = id.offsetTop - _indent;
    } else {
      const target = document.getElementById(id);

      if (target) heightToScroll = target.offsetTop - _indent;
      else throw new Error(`target is ${target}`);
    }

    animateScrollTo(heightToScroll, { maxDuration: 1200 });
  } catch (e) {
    console.error(e);
  }
}
