export default (axios) => ({
  getStats() {
    return axios.get("/api/stats/");
  },
});
