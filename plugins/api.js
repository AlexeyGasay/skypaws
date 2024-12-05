import auth from "@/api/auth";

/* eslint-disable-next-line */
export default ({ $axios, app, store }, inject) => {
  inject("api", {
    auth: auth($axios),
  });
};
