const express = require("express");
const { proxy } = require("./proxy");

const app = express();
app.use(proxy);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
