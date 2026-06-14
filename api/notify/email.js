// api/notify/email.js
// Envia notificações via E-mail usando Resend

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: 'Resend API key not configured'
      });
    }

    const htmlMessage = message
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'alertas@strelow.com.br',
        to: to,
        subject: subject,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #333; line-height: 1.6; max-width: 600px;">
            <div style="background: linear-gradient(135deg, #0d6b4f 0%, #12916a 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
              <h2 style="margin: 0; font-size: 20px;">⚠️ Alerta Strelow</h2>
            </div>
            <div style="background: #f6f8f7; padding: 20px; border-radius: 0 0 10px 10px;">
              <p>${htmlMessage}</p>
              <hr style="border: none; border-top: 1px solid #eceef0; margin: 20px 0;">
              <p style="font-size: 12px; color: #8a958f; margin: 0;">
                Este é um alerta automático do sistema Strelow Soluções para Mercado.
              </p>
            </div>
          </div>
        `
      })
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({
        error: error.message || 'Email API error'
      });
    }

    const data = await response.json();
    res.status(200).json({
      success: true,
      messageId: data.id
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: error.message });
  }
}
