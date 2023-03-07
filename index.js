const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "example@gmail.com",
    pass: "example",
  },
});

let mailOptions = {
  from: "example@gmail.com",
  to: "test@gmail.com",
  text: '<p>This is a test email with an image:</p><img src="https://example.com" alt="Banner Image" style="display:block;" >',
};

for (let i = 0; i < 50; i++) {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error sending email: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
}
