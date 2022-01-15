const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
    
    const emailOptions = {
        from: 'Remitente',
        to: 'nahuel.dev.23@gmail.com',
        subject: 'Enviado desde nodemailer con ethereal',
        text: 'Bienvenido a mi repo, espero te sea de ayuda 🌹'
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.ETHEREAL_USER,
            pass: process.env.ETHEREAL_PASSWORD
        },
    });

    transporter.sendMail(emailOptions, (error, info) => {
        error && res.status(500).send(error.message)
        res.status(200).json({ msj: 'email enviado' })
    })
}

module.exports = { sendEmail }