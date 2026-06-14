// api/notify/whatsapp.js
// Envia notificações via WhatsApp usando Twilio

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { phoneNumber, message } = req.body;

  if (!phoneNumber || !message) {
    return res.status(400).json({ error: 'Missing phoneNumber or message' });
  }

  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      return res.status(500).json({
        error: 'Twilio credentials not configured in environment'
      });
    }

    const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');
    const to = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          From: fromNumber,
          To: to,
          Body: message
        }).toString()
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({
        error: error.message || 'Twilio API error'
      });
    }

    const data = await response.json();
    res.status(200).json({
      success: true,
      messageId: data.sid,
      status: data.status
    });
  } catch (error) {
    console.error('WhatsApp error:', error);
    res.status(500).json({ error: error.message });
  }
}
