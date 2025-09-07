
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../models/user')


const registerUser = async(req ,res)=>{

    const {userName,email,password}=req.body

    try{

        const hashpassword = await  bcrypt.hash(password, 12)
        const newUser = new User({
            userName,email,hashpassword

        })
        await newUser.save()
        res.status(200).json({
             success : false,
            message : "Registration successfull"

        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Some error occured"
        })
        

    }

}




const login = async(req ,res)=>{

    const {userName,email,password}=req.body

    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success : false,
            message : "Some error occured"
        })
        

    }

}


module.exports= {registerUser}