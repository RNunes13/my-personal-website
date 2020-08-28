
import * as Cors from 'cors';
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import config from '../config/index';
import { createTransport } from 'nodemailer';
import { ContactMailerView } from '../views/ContactMailerView';

const cors = Cors({ origin: true });

admin.initializeApp();

const REQUIRED_PARAMS = ['dest', 'name', 'email', 'message'];

const { service, user, pass } = config.transporter;

const transporter = createTransport({ service, auth: { user, pass }});

export const sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    for (const param of REQUIRED_PARAMS) {
      if (!req.body[param]) return res.status(400).send(`The '${param}' parameter is required.`);
    }

    const { dest, name, email } = req.body;

    const message = req.body.message.replace(/\n/, '<br />');

    const mailOptions = {
      from: 'RNunes | WebDev <send@rodrigonunes.dev>',
      to: dest,
      subject: 'Você tem uma nova mensagem',
      html: ContactMailerView(name, email, message),
    };

    // tslint:disable-next-line: no-void-expression
    return transporter.sendMail(mailOptions, (erro, info) => {
      if (erro) return res.status(500).send(erro.toString());

      return res.status(200).send('Sended');
    });
  });
});
