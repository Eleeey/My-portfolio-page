// // server.js
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');


// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Configure your email service (for Gmail, you might need to set up an "App Password")
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'ezralaakasen@gmail.com',
//     pass: 'Laakasen12.',
//   },
// });

// app.post('/send-email', (req: { body: { name: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: 'ezralaakasen@gmail.com',
//     to: 'ezralaakasen@gmail.com',
//     subject: `message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error: any, info: { response: string; }) => {
//     if (error) {
//       console.log(error);
//       res.status(500).send('error');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
