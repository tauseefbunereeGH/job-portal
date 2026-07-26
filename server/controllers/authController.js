const User=require("../models/User");
const bcrypt=require("bcryptjs");
const generateToken=require("../utils/generateToken");

const registerUser=async(req,res)=>{

const {name,email,password}=req.body;

const userExists=await User.findOne({email});

if(userExists){

return res.status(400).json({
message:"User already exists"
});

}

const salt=await bcrypt.genSalt(10);

const hashedPassword=await bcrypt.hash(password,salt);

const user=await User.create({

name,
email,
password:hashedPassword

});

if(user){

res.status(201).json({

_id:user._id,
name:user.name,
email:user.email,
token:generateToken(user._id)

});

}else{

res.status(400).json({

message:"Invalid User Data"

});

}

};

module.exports={
registerUser
};