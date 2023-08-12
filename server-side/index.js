const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const authenticationModel = require('./Schema/Schema.js')
const app = express();
app.use(express.json());

//......mongodb connection setup (mongo compass :: manual setup)......
//app.use(cors());
//mongoose.connect("mongodb://127.0.0.1:27017/authentication");

//.....for hosting the server side to vercel :: starts
//setup cors policy 
app.use(cors(
{
  origin:["https://mern-auth-frontend-ihs.netlify.app/"], //frontend link setup 
  methods:["POST", "GET"], //methods we will use to interact with the database
  credentials:true
}
))

//conecting the mongodb atlas
mongoose.connect("mongodb+srv://auth-mern:auth1235@cluster0.vaopm.mongodb.net/auth-mern?retryWrites=true&w=majority")
//.....for hosting the server side to vercel :: ends

const db = mongoose.connection;

db.on('error',(error)=>{
console.error("MongoDB Connection Error:",error); //logs the actual error
});

db.once('open',()=>{
  console.log("MongoDB connection successfull");
})

//initial test setup
app.get('/',(req,res)=>{
  res.send("Server is running Successfully!")
})

// ........Declaring the Routes........
app.post('/register',(req,res)=>{
//req is the data coming from the frontend and res is the data we send back to the frontend app 
  authenticationModel.create(req.body)
  .then(result =>res.json(result))
  .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
  const{email,password}=req.body;
  authenticationModel.findOne({email:email})
  .then(result=> {
    if(result){
       if(result.password===password){
        res.json("Success")
      }
      else{
        res.json("the password is incorrect!")
      }
    }
    else{
      res.json("No record found!")
    }
  })
})

app.get("/", (req, res) => {
  res.send("Server is Connected successfully");
});

app.listen(3000, () => {
  console.log("Listening to the port : 3000");
});
