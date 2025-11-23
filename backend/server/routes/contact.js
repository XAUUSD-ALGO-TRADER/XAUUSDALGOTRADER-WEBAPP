import express from 'express';
import nodemailer from 'nodemailer';
import { contactFormEmail } from '../emails/templates.js';

const router = express.Router();

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net", // Your SMTP host
    port: 465, // Your SMTP port
    secure: true, // `true` for port 465, `false` for other ports
    auth: {
      user: "support@xauusdalgotrader.com",
      pass: "LIpun@890890", // Your email password
    },
});

router.post('/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        const adminEmailHtml = contactFormEmail(name, email, phone, message);

        // Send the email
        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch" <support@xauusdalgotrader.com>',
            to: "nikhilsahu1312@gmail.com",
            subject: `📧 New Contact Form: ${name}`,
            html: adminEmailHtml,
        });

        console.log(`✅ Contact form submitted by ${name} (${email})`, info);

        res.json({
            message: 'Message sent successfully',
            success: true,
        });

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            error: 'Failed to send message',
            success: false,
        });
    }
});

export default router;
