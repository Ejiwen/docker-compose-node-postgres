const express = require("express");
const { Pool, Client } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123456",
  database: "postgres",
  port: 5432,
});

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(8081, () => {
  console.log("Listening on port 8081 ... ");
});
