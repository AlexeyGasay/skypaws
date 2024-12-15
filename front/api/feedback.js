export default (axios) => ({
  requestCallback(payload) {
    return axios.post("/api/feedback/", payload);
  },
});
