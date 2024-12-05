export default function compensateScrollbar(status) {
  let scrollBarWidth = 0;

  if (status) {
    scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  }

  document.documentElement.style.marginRight = `${scrollBarWidth}px`;
  return scrollBarWidth;
}
