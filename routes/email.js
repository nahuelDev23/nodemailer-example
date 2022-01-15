const dotenv = require('dotenv')
const express = require('express')
const { sendEmail } = require('../controllers/mailer/sendEmail')

const app = express()
dotenv.config()

app.post('/send-email', sendEmail)

app.listen(3000, () => {
    console.log('server online en puerto 3000 🚀');
})