// sendMail/index.js
const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      context.res = { status: 400, body: 'Missing fields' };
      return;
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      to: 'tnecbarnmail@gmail.com',
      from: 'terrie-is-unstable@outlook.com', // must be a verified sender
      subject: 'New message from True North Stable website',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    context.res = { status: 200, body: 'OK' };
  } catch (err) {
    context.log.error(err);
    context.res = { status: 500, body: 'Mail error' };
  }
};