import Vue from "vue";

export function compileTemplate(component, propsData) {
  const Extended = Vue.extend(component);
  const instance = new Extended({
    propsData,
  });
  instance.$mount();
  return instance.$el.outerHTML;
}
