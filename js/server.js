const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/send', (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ramesh67giri@gmail.com', // replace with your email
      pass: 'your-email-password' // replace with your email password or app-specific password
    }
  });

  const mailOptions = {
    from: email,
    to: 'ramesh67giri@gmail.com', // replace with your email
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
