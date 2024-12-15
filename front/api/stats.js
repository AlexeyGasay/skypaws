export default (axios) => ({
  getStats() {
    console.log("stats");
    return axios.get("/api/stats/");
  },
});
