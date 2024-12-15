import auth from "@/api/auth";
import feedback from "@/api/feedback";
import stats from "@/api/stats";

/* eslint-disable-next-line */
export default ({ $axios, app, store }, inject) => {
  inject("api", {
    auth: auth($axios),
    feedback: feedback($axios),
    stats: stats($axios),
  });
};
