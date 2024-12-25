let mongoose=require("mongoose");
let bcrypt=require("bcrypt");

let userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.pre('save',async function(next){
    if(this.isModified('password'))
    {
        this.password=bcrypt.hash(this.password,10);
    }

    next();
})

let User=mongoose.model('User',userSchema);

module.exports=User;