// express app with gql
//and mongodb

const express = require("express");
const app = express();
const routes = require("./routes/router");

app.route("/clothing")
.get(routes);

app.listen(4000, () => {
  console.log("app is listening on port 4000");
});
