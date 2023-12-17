const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const router = require("./routes/goalRoutes");

const app = express();

app.use("/api/goals", router);

app.listen(PORT, () => console.log(`App listening to ${PORT}`));
