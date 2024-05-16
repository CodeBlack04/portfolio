'use server'

import nodemailer from 'nodemailer'
import * as handlebars from "handlebars";
import { mailTemplate } from './mailTemplate';

interface Props {
    name: string;
    email: string;
    organization: string;
    message: string;
}

const compileMailTemplate = ({name, email, organization, message}: Props) => {
    const template = handlebars.compile(mailTemplate)
    const htmlBody = template({
        name: name,
        email: email,
        organization: organization,
        message: message,
    })

    return htmlBody
}

const sendMail = async ({name, email, organization, message}: Props) => {
  
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    }
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult)
  } catch (error) {
    console.error({ error });
    return
  }

  try {
    const sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to: 'tauhidur.rahman1517@gmail.com',
        subject: 'Contact from protfolio',
        html: compileMailTemplate({name, email, organization, message }),
    });
    console.log(sendResult)

  } catch (error) {
    console.error({ error })
  }
}

export default sendMail;
