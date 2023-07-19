// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {mailOptions, transporter} from "@/config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
};

const generateEmailContent = (data: any) => {
    const stringData = Object.entries(data).reduce(
        (str,[key,val]) =>
            (str += `${CONTACT_MESSAGE_FIELDS[key]}: ${val}\n\n`)
    ,"");
    const htmlData = Object.entries(data).reduce(
        (str,[key,val]) =>
            (str += `<p><strong>${CONTACT_MESSAGE_FIELDS[key]}:</strong> ${val}</p>`)
    ,"");

    return{
        text: stringData,
        html: `<!doctypehtml><html lang=en><meta charset=UTF-8><title>Email</title><h1 class="text-9xl text-red-600">New Message</h1><p>${htmlData}`,
    }
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
            ...generateEmailContent(data),
            subject: data.subject,

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