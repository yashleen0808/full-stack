const nodemailer = require("nodemailer");
const sendMail=(email,subject,message)=>{
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service:"gmail",
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "yashleen981.be22@chitkara.edu.in",
    pass: "ckpi iror btar nmyl",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'yashleen981.be22@chitkara.edu.in', // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    text: "Please click the link to verify", // plain text body
    html: `<a href=${message}>Link</a>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
}

module.exports.sendMail=sendMail;