require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
connectDB();
app.use(express.json());

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
