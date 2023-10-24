const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mahajanvivek1221@gmail.com", // Your email address
    pass: "Shree1821@", // Your email password
  },
});

app.post("/submit", (req, res) => {
  const { firstName, lastName, email, contactNumber, message } = req.body;

  const mailOptions = {
    from: "mahajanvivek1221@gmail.com", // Your email address
    to: email,
    subject: "Form Submission Confirmation",
    text: `Hello ${firstName} ${lastName},\n\nThank you for your form submission!`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
