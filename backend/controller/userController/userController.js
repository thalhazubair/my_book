const { User } = require("../../model/user/register");
const mailer = require('../../middleware/otp')
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const instance = require('../../middleware/razorpay')
const crypto =require('crypto')

module.exports = {
getLogin: (req, res) => res.send('Hello World!'),

postLogin: (req, res) => {
    try {
        const { username, password } = req.body;
        User.findOne({ username: username }).then((doc) => {
                const blocked = doc.isBlocked
                if(blocked === false){
                     bcrypt
                    .compare(req.body.password, doc.password)
                    .then((value)=>{
                    
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
                                        doc:doc,
                                        token:`Bearer ${token}`,
                                    })
                                }
                            }
                           )
                        
                    })
                 }else{
                    res.send({ blocked : true})
                 }
               
        })
    } catch (error) {
        
    }
   
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
            plan:data.plan,
            isBlocked:false
        });
        user.save().then(()=>{
            res.send({success:true})
        })
})
},

resendOtp: (req,res)=>{
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
},

editUser: (req,res) => {
    try {
        const data = req.body
        
    User.updateOne(
        {
            username:data.username,
        },
        {
            $set: {
                fullname: data.fullname,
                username: data.username,
                email:data.email,
                phone:data.phone,
                plan:data.plan
              },
        })
        .then((data)=>{
            res.send({success:true,doc:data})
        })
    } catch (error) {
        
    }
    
 },

 getUserDetails: (req,res)=>{
    const username = req.username
    User.findOne({ username: username }).then((doc) => {
        console.log(doc);
res.send({
    success:true,
    doc:doc
})
    })
 },

 postPayment: (req,res) => {
    const username = req.username
    const price = req.body.price
    const options = {
        amount: price,
        currency: 'INR',
        // eslint-disable-next-line prefer-template
        receipt: '' + username,
      };
      instance.orders.create(options, (err, order) => {
        if (err) {
          console.log(err);
          res.status(400).json({
            success: false,
            err,
          });
        } else {
            console.log(order)
            res.status(200).json({ order: order })
        }
      });
 },

 verifyPayment : (req,res)=> {
    const username = req.username
    console.log(req.body)
    let hmac = crypto.createHmac('sha256', process.env.KEYSECRET);
    hmac.update(
      `${req.body.payment.razorpay_order_id}|${req.body.payment.razorpay_payment_id}`
    );
    hmac = hmac.digest('hex');
    User.updateOne(
        {
            username:username,
        },
        {
            $set: {
                plan:"Standard Plan"
              },
        })
        .then(()=>{
            res.send({
                success:true,
                message:'payment completed successfully'
            })
        })
 }
}