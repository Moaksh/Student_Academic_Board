// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {mailOptions, transporter} from "@/config/nodemailer";

type Data = {
  name: string
}

const handler = async (req, res) => {
if (req.method === 'POST') {
    const data = req.body
    if (!data.name || !data.email || !data.subject ||!data.message) {
      res.status(400).json({ message: 'Bad request' })
    }
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: data.subject,
            text: "This is a test string",
            html: "<h1>This is a test string</h1><p>Body Text</p>"
        });
        return res.status(200).json({ message: 'Success' })
    } catch (error){
        console.log(error)
        return res.status(400).json({ message:  error.message })
    }
}
  return res.status(400).json({ message: 'Bad request' })
}


export default handler;