const { User } = require("../../model/user/register");
const mailer = require('../../middleware/otp')
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");



module.exports = {
getLogin: (req, res) => res.send('Hello World!'),

postLogin: async (req, res) => {
    const { username, password } = req.body;
    await User.findOne({ username: username }).then((doc) => {
        if (doc) {
            bcrypt
            .compare(req.body.password, doc.password)
            .then((value)=>{
                if(value){
                   const payload = {
                    username: username
                   }
                   Jwt.sign(
                    payload,
                    process.env.USER_SECRET,
                    {
                        expiresIn: 3600000,
                    },
                    (err,token) =>{
                        if(err){
                            console.error('some error occured')
                        }else{
                            res.json({
                                success:true,
                                token:`Bearer ${token}`,
                            })
                        }
                    }
                   )
                }
            })
        } else {
            console.log(password);

            res.send({ auth: false });
        }
    }).catch((e) => {
        // console.log(e);
        res.status(505).send(e);
    })
},

postSignup: async (req, res) => {
    
    const { fullname, username, email, phone, password, confirmpassword } = req.body
    let mailDetails = {
        from: "thalhaz999@gmail.com",
        to: email,
        subject: "MyBook ACCOUNT REGISTRATION",
        html: `<p>YOUR OTP FOR REGISTERING IN MyBook IS ${mailer.OTP}</p>`,
      };
      console.log(mailer.OTP);
    const user = new User({
        fullname,
        username,
        email,
        phone,
        password,
        confirmpassword
    });
    if(password === confirmpassword){
        User.find({email:email})
    .then((result)=>{
        if(result.length){
            res.send({ email: true})
        }else{
        User.find({phone:phone})
        .then((result)=>{
            if(result.length){
                res.send({ phone:true})
            }else{
                User.find({username:username})
                .then((result)=>{
                    if(result.length){
                    res.send({username: true})
            }  else{
               
                
                mailer.mailTransporter.sendMail(mailDetails,(err)=>{
                    if(err){
                      
                        console.log('error occurs');
                        
                    }else{
                        res.send({ success: true });
                    }
                })
        
            }
                })
            }
        })
    }
    })
}else{
    res.send({ password: true })
}
},

verifyOtp: async(req,res) =>{
    const data = req.body
    if(mailer.OTP == data.otp)
    await bcrypt.hash(data.password, 10).then((password)=>{

        const user = new User({
            fullname:data.fullname,
            username:data.username,
            email:data.email,
            phone:data.phone,
            password:password,
        });
        user.save().then(()=>{
            res.send({success:true})
        })
})
},

resendOtp: async(req,res)=>{
    const email = req.body.email
    let mailDetails = {
        from: "thalhaz999@gmail.com",
        to: email,
        subject: "MyBook ACCOUNT REGISTRATION",
        html: `<p>YOUR OTP FOR REGISTERING IN MyBook IS ${mailer.OTP}</p>`,
      };
      console.log(mailer.OTP);

      mailer.mailTransporter.sendMail(mailDetails,(err)=>{
        if(err){
          
            console.log('error occurs');
            
        }else{
            res.send({ success: true });
        }
    })
}
}