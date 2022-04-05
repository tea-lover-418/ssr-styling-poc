const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  const styling = {
    primaryColor: "FFFFFF",
    secondaryColor: "000000",
  };

  return res.send(styling);
});

app.listen(port, () => {
  console.log(`Api for styling listening at ${port}`);
});
