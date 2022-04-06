const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

const styling = {
  primaryColor: "#bd4126",
  secondaryColor: "#3867a1",
};

app.get("/", (_req, res) => {
  console.log("API CALLED");

  return res.send(styling);
});

app.listen(port, () => {
  console.log(`Api for styling listening at ${port}`);
});
