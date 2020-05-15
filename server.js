const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();

// init middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json({ extended: false }));
//define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at port: ${PORT}`));
