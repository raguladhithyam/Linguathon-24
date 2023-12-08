import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { to, subject, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'landoflexicons@gmail.com',
          pass: 'wpmj lava friu ceze',
        },
      });

      const mailOptions = {
        from: 'Linguathon 24 <landoflexicons@gmail.com>',
        to: to,
        subject: subject,
        text: message,
      };

      // Sending email
      const info = await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to send email', message: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
