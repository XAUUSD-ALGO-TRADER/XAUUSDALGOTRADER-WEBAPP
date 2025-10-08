// import { createServiceRoleClient } from '../../server/lib/supabase-server.js';
// import bcrypt from 'bcryptjs';
// import { emailQueue } from '../server/lib/emailQueue.js';

// export default async function handler(req, res) {
//   res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'https://xauusdalgotrader.com');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   try {
//     const { email, password, name, country, mobile, broker } = req.body;

//     if (!email || !password || !name) {
//       return res.status(400).json({ 
//         error: 'Email, password, and name are required' 
//       });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ error: 'Invalid email format' });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({ error: 'Password must be at least 6 characters long' });
//     }

//     const supabase = createServiceRoleClient();

//     const { data: existingUser } = await supabase
//       .from('users')
//       .select('id')
//       .eq('email', email.toLowerCase().trim())
//       .single();

//     if (existingUser) {
//       return res.status(409).json({ error: 'User with this email already exists' });
//     }

//     const saltRounds = 12;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const { data: user, error: insertError } = await supabase
//       .from('users')
//       .insert([
//         {
//           email: email.toLowerCase().trim(),
//           password: hashedPassword,
//           name: name.trim(),
//           country: country || null,
//           mobile: mobile || null,
//           broker: broker || null,
//           role: 'user',
//           status: 'pending',
//           created_at: new Date().toISOString(),
//           updated_at: new Date().toISOString()
//         }
//       ])
//       .select()
//       .single();

//     if (insertError) {
//       console.error('Registration error:', insertError);
//       return res.status(500).json({ error: 'Failed to create user account' });
//     }

//     // Send approval notification to admin
//     const adminEmailHtml = `
//       <h2>New User Registration Requires Approval</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Country:</strong> ${country || 'Not provided'}</p>
//       <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
//       <p><strong>Broker:</strong> ${broker || 'Not provided'}</p>
//       <p><strong>Registered:</strong> ${new Date().toLocaleString()}</p>
//     `;

//     await emailQueue.addToQueue({
//       to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
//       subject: `New User Registration: ${name}`,
//       html: adminEmailHtml
//     });

//     // Send confirmation email to user
//     const userEmailHtml = `
//       <h2>Welcome to XAU/USD Algo Trader!</h2>
//       <p>Dear ${name},</p>
//       <p>Thank you for registering with XAU/USD Algo Trader. Your account is pending admin approval.</p>
//       <p>We will review your registration and notify you once your account is approved.</p>
//       <p>This process usually takes 24-48 hours.</p>
//       <hr>
//       <p><em>This is an automated message. Please do not reply.</em></p>
//     `;

//     await emailQueue.addToQueue({
//       to: email,
//       subject: 'Registration Received - XAU/USD Algo Trader',
//       html: userEmailHtml
//     });

//     res.status(201).json({
//       message: 'Registration successful. Your account is pending admin approval.',
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//         status: user.status
//       }
//     });

//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

import { createServiceRoleClient } from '../../server/lib/supabase-server.js';
import bcrypt from 'bcryptjs';
import { emailQueue } from '../server/lib/emailQueue.js';
import { registrationPendingEmail } from '../server/email/templates.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || 'https://xauusdalgotrader.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password, name, country, mobile, brokerAccounts } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({
        error: 'Email, password, and name are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    // Validate broker accounts if provided
    if (brokerAccounts && Array.isArray(brokerAccounts)) {
      for (const account of brokerAccounts) {
        if (!account.brokerName || !account.accountNumber || !account.accountType) {
          return res.status(400).json({
            error: 'All broker accounts must have broker name, account number, and account type'
          });
        }
      }
    }

    const supabase = createServiceRoleClient();

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .single();

    if (existingUser) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const { data: user, error: insertError } = await supabase
      .from('users')
      .insert([
        {
          email: email.toLowerCase().trim(),
          password: hashedPassword,
          name: name.trim(),
          country: country || null,
          mobile: mobile || null,
          role: 'user',
          status: 'pending',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error('Registration error:', insertError);
      return res.status(500).json({ error: 'Failed to create user account' });
    }

    // Create broker accounts if provided
    if (brokerAccounts && brokerAccounts.length > 0) {
      const brokerAccountsData = brokerAccounts.map(account => ({
        user_id: user.id,
        broker_name: account.brokerName.trim(),
        account_number: account.accountNumber.trim(),
        account_type: account.accountType.trim(),
        is_active: true,
        status: 'pending',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }));

      const { error: brokerError } = await supabase
        .from('broker_accounts')
        .insert(brokerAccountsData);

      if (brokerError) {
        console.error('Broker account creation error:', brokerError);
        // Don't fail registration if broker accounts fail, just log it
      }
    }

    // Send approval notification to admin using template
    const adminEmailHtml = `
      <h2>New User Registration Requires Approval</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country || 'Not provided'}</p>
      <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
      <p><strong>Broker Accounts:</strong> ${brokerAccounts ? brokerAccounts.length : 0}</p>
      <p><strong>Registered:</strong> ${new Date().toLocaleString()}</p>
      ${brokerAccounts && brokerAccounts.length > 0 ? `
        <h3>Broker Accounts:</h3>
        <ul>
          ${brokerAccounts.map(account => `
            <li>${account.brokerName} - ${account.accountNumber} (${account.accountType})</li>
          `).join('')}
        </ul>
      ` : ''}
    `;

    await emailQueue.addToQueue({
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New User Registration: ${name}`,
      html: adminEmailHtml
    });

    // Send confirmation email to user using template
    await emailQueue.addToQueue({
      to: email,
      subject: 'Registration Received - XAU/USD Algo Trader',
      html: registrationPendingEmail(name, email)
    });

    res.status(201).json({
      message: 'Registration successful. Your account is pending admin approval.',
      userId: user.id,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        status: user.status
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}