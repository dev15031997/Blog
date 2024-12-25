require("dotenv").config();
const express=require("express")
const app=express();

const port=process.env.PORT;

app.use(express.json());
app.use('/',require('./routes/route'));

app.listen(port,()=>{
    console.log(`Server working at port ${port}`);
})

