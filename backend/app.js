const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const cors = require("cors");
const UserAPI = require("./routes/user");
const TaskAPI = require("./routes/task");
app.use(cors());

// ye nhi likhenge to data kis format me aarha hai smjh hi nhi payega. that's why
app.use(express.json());

app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);

//localhost:1000/api/v1/sign-in


app.use("/", (req, res) =>{
  res.send("hello from backend side");
});


const PORT = 1000;
app.listen(PORT, ()=>{
  console.log("Server Started");
});