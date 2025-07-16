export default (axios) => ({
  requestCallback(payload) {
    return axios.post("/api/feedback/", payload);
  },
  requestCallbackCourse(payload) {
    return axios.post("/api/feedback-course/", payload);
  },
});
