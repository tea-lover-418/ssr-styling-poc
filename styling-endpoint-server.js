const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

const styling = {
  primaryColor: "FFFFFF",
  secondaryColor: "000000",
};

app.get("/", (_req, res) => {
  console.log("API CALLED AAAA");

  return res.send(styling);
});

app.listen(port, () => {
  console.log(`Api for styling listening at ${port}`);
});
