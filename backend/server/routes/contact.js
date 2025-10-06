import express from 'express';
import { emailQueue } from '../lib/emailQueue.js';
import { contactFormEmail } from '../emails/templates.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message, type } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Use the email template for admin notification
    const adminEmailHtml = contactFormEmail(name, email, phone, message);

    // Add to email queue - send to admin
    await emailQueue.addToQueue({
      to: process.env.ADMIN_EMAIL || 'xauusdalgotrader@gmail.com',
      subject: `📧 New Contact Form: ${name}`,
      html: adminEmailHtml
    });

    console.log(`✅ Contact form submitted by ${name} (${email})`);

    res.json({ 
      message: 'Message sent successfully',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message',
      success: false 
    });
  }
});

export default router;