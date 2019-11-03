const proxy = require("http-proxy-middleware");

exports.proxy = proxy("/***", {
  // target is the URL to your cloud function:
  target: "https://PRELACE_THIS_WITH_YOUR_CLOUD_FUNCTION.cloudfunctions.net",
  /* Prevent '404' error from Google Cloud Functions caused by inappropriate 'host' header */
  changeOrigin: true
});
