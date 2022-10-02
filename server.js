const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const rutEmplyee = require("./routes/routes_employee");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/employee", rutEmplyee);

app.use((req, res) => {
  res.status(404).json({
    mensaje: "error",
  });
});
console.log(process.env.PORT);
mongoose
  .connect(process.env.MONGO_BD)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("listening "); //
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
