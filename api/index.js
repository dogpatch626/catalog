// express app with gql
//and mongodb

const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
const routes = require("./routes/router");
const cors = require("cors");
const  startServer = async () =>{
app.use(express.json());
app.use(cors()); 


await mongoose 
  .connect(process.env.MONGO_CONNECTION)
  .then(()=>{
    console.log("Mongo Connected"); 
  })
  .catch((err) => {
    console.log("something went wrong : ", err); 
  })

app.route("/clothing")
.get(routes);

app.listen(4000, () => {
  console.log("app is listening on port 4000");
});

}


startServer(); 