import nodemailer from "nodemailer";
import { buildSendMail } from "mailing-core";

const transport = nodemailer.createTransport({
  pool: true,
  host: "smtp.example.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "username",
    pass: "password",
  },
});

const sendMail = buildSendMail({
  transport,
  defaultFrom: "replace@me.with.your.com",
});

export default sendMail;

// Export helpers & templates for use in other packages
export * from './helpers/sendgrid';
export * from './templates/TextEmail'
export * from './templates/Welcome'
