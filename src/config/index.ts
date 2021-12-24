const getRuntimeConfig = () => ({
  application: {
    namespace: "reactframework",
    baseUrl: "http://localhost:3000",
    domain: "localhost",
  },
  api: {
    global: "",
  },
  build: {
    mode: "development",
    crossOrigin: "anonymous",
  },
});

export default getRuntimeConfig;
