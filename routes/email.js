const dotenv = require('dotenv')
const express = require('express')
const { sendEmail } = require('../controllers/mailer/sendEmail')
const app = express()

dotenv.config()

app.post('/send-email', sendEmail)
