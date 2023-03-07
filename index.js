const nodemailer = require("nodemailer");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "example@gmail.com",
    pass: "example",
  },
});

const sendEmail = (toEmail) => {
  const mailOptions = {
    from: "example@gmail.com",
    to: toEmail,
    subject: "Test email from Node.js",
    html: '<h1>Hello there!</h1><p>This is a test email sent from Node.js using Nodemailer with an image embedded in the email.</p><img src="cid:unique@kreata.ee"/>',
    // attachments: [{
    //   filename: 'image.png',
    //   path: __dirname + '/image.png',
    //   cid: 'unique@kreata.ee'
    // }]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

rl.question("How many emails do you want to send? ", (numEmails) => {
  rl.question("What is the recipient email address? ", (toEmail) => {
    const intervalId = setInterval(() => {
      for (let i = 0; i < numEmails; i++) {
        sendEmail(toEmail);
        console.log(`Email #${i + 1} sent to ${toEmail}`);
      }
    }, 1000 * 60 * 2); // send every 2 minutes

    setTimeout(() => {
      clearInterval(intervalId);
      console.log(`All ${numEmails} emails sent to ${toEmail}`);
      process.exit(0);
    }, 1000 * 60 * 60); // stop after 1 hour
  });
});
