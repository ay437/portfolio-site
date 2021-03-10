require('dotenv').config();

const sgMail = require('@sendgrid/mail');

export default async function SendEmail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const myEmail = process.env.MY_EMAIL;
  const { name, email, message } = req.body;

  const content = {
    to: myEmail,
    from: myEmail,
    subject: `New Message From ${name} - ${email}`,
    text: message,
    html: `<p>${message}</p><br/>from<br/><br/>${email}`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    res.status(400).send('Message not sent.');
  }
}
