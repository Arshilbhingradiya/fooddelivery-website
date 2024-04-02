import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res) => {
    res.render("index.ejs");
});

app.get('/about',(req,res) => {
    res.render("about.ejs");
});

app.get('/blog',(req,res)=>{
    res.render("blog.ejs");
});

app.get('/menu',(req,res)=>{
    res.render("menu.ejs");
})

app.get('/products',(req,res)=>{
    res.render("products.ejs");
});

app.get('/review',(req,res)=>{
    res.render("review.ejs");
});

app.get('/login',(req,res)=>{
    res.render("login.ejs");
});

app.get('/Registersucess',(req,res)=>{
    res.render("Registersucess.ejs");
})

app.post("/email", function(req, res){
    let Name=req.body.username;
    let Email=req.body.email; 
    let Password=req.body.password;
    let Mobile_no=req.body.mobile;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "foodzone010404@gmail.com",
        pass: "weae nfqa pwaz paok"
      }
    });
    
  let mailOptions;
      mailOptions = {
      from: "foodzone010404@gmail.com",
      to: Email,
      subject:"You Sucessfully Registered" ,
      text:`Name: ${Name}\nEmail: ${Email}\nPassword: ${Password}\nMobile: ${Mobile_no}
      DISCLAIMER: The information transmitted is intended only for the person or entity to which it is addressed and may contain confidential and/or privileged material which is the intellectual property of Charotar University of Science & Technology (CHARUSAT). Any review, retransmission, dissemination or other use of, or taking of any action in reliance upon this information by persons or entities other than the intended recipient is strictly prohibited. If you are not the intended recipient, or the employee, or agent responsible for delivering the message to the intended recipient and/or if you have received this in error, please contact the sender and delete the material from the computer or device. CHARUSAT does not take any liability or responsibility for any malicious codes/software and/or viruses/Trojan horses that may have been picked up during the transmission of this message. By opening and solely relying on the contents or part thereof this message, and taking action thereof, the recipient relieves the CHARUSAT of all the liabilities including any damages done to the recipient's pc/laptop/peripherals and other communication devices due to any reason.`,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
     console.log(error);
      } else {
        console.log('Email sent: ');
      }
    });
    res.redirect('/Registersucess');
  });



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});