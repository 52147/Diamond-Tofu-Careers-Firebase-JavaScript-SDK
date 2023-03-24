const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/send-email', async (req, res) => {
  const { to, subject, message } = req.body;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'your-email@gmail.com',
    to: to,
    subject: subject,
    text: message
  });

  console.log("Message sent: %s", info.messageId);
  res.send("Email sent successfully!");
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
