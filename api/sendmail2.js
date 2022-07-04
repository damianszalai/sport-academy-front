export default async function handler(req, res) {

  console.log("req.body:", req.body);
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: req.body.email, // Change to your recipient
    from: 'imitacionesdesonidos@gmail.com', // Change to your verified sender
    subject: 'Formulario web',
    text: 'Consulta del formulario web',
    html: '<strong>' + req.body.message + '</strong>',
  }


  console.log("entro");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log("req.body", req.body);
  // const msg = {
  //   to: req.body.email, // Change to your recipient
  //   from: 'imitacionesdesonidos@gmail.com', // Change to your verified sender
  //   subject: 'Formulario web',
  //   text: 'Consulta del formulario web',
  //   html: '<strong>' + req.body.message + '</strong>',
  // }

  await sgMail
    .send(msg)
    .then((resp) => {
      console.log('Email sent:', resp);
      return res.status(200).send({ status: "ok" });
    })
    .catch((error) => {
      console.log("hay error:", error);
      return res.status(500).send({ status: "error", error: error });
    })

  // await sgMail
  //   .send(msg)
  //   .then(() => {
  //     console.log('Email sent')
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })


}