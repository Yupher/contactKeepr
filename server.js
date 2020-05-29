const express = require("express");
const app = express();
const path = require('path')
const cors = require('cors')
const connectDB = require("./config/db");
connectDB();

// init middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json({ extended: false }));
app.use(cors())
app.options('*', cors());
//define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at port: ${PORT}`));
