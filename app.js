const express = require("express");
const db = require("./db/db");

const app = express();

db.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on port : ${PORT}`));
