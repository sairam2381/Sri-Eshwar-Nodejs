const express = require("express");
const cors = require("cors");
let port = 21000;
const app = express();

app.use(
  cors({
    origin: "*",
    credientials: true,
  })
);
app.get("/", (req, res) => {
  return {
    success: true,
    message: "Port is running",
  };
});
app.listen(port, async () => {
  console.log(`App is running on the port ${port}`);
});
