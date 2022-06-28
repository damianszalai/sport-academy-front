const sgMail = require('@sendgrid/mail')
// import sgMail from "@sendgrid/mail";



export default async function handler(req, res) {
  console.log("entro");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log("req.body", req.body);
  const msg = {
    to: req.body.email, // Change to your recipient
    from: 'imitacionesdesonidos@gmail.com', // Change to your verified sender
    subject: 'Formulario web',
    text: 'Consulta del formulario web',
    html: '<strong>' + req.body.message + '</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  return res.status(200).send({ status: "ok" });
}