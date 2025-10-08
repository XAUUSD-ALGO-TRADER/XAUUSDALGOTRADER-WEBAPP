import express from 'express';
import { createServiceRoleClient } from '../lib/supabase-server.js';

const router = express.Router();

// Get user's broker accounts
router.get('/user/broker-accounts', async (req, res) => {
  try {
    const supabase = createServiceRoleClient();
    const userId = req.user.id; // From auth middleware

    const { data: brokerAccounts, error } = await supabase
      .from('broker_accounts')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({ brokerAccounts });
  } catch (error) {
    console.error('Get broker accounts error:', error);
    res.status(500).json({ error: 'Failed to fetch broker accounts' });
  }
});

// Add more broker account routes as needed...

export default router;