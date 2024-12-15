import Vue from "vue";

Vue.directive("escape", {
  bind(el, binding) {
    const callback = binding.value;
    if (typeof callback !== "function") {
      console.error(
        "The value of the escape-callback directive should be a function.",
      );
      return;
    }

    const escapeHandler = (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        callback();
      }
    };

    document.addEventListener("keydown", escapeHandler);

    // eslint-disable-next-line no-param-reassign
    el._escapeHandler = escapeHandler;
  },
  unbind(el) {
    if (el._escapeHandler) {
      document.removeEventListener("keydown", el._escapeHandler);

      // eslint-disable-next-line no-param-reassign
      delete el._escapeHandler;
    }
  },
});
