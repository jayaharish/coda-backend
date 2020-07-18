const nodemailer = require("nodemailer");

function sendEmail(receiver, subject, content) {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "olx.noreply7@gmail.com",
      pass: "jayakrishna7",
    },
  });
  let mailDetails = {
    from: "olx.noreply7@gmail.com",
    to: receiver,
    subject: subject,
    text: content,
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
}
module.exports = sendEmail;
