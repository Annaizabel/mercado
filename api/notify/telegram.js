// api/notify/telegram.js
// Envia notificações via Telegram Bot API

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { chatId, message, botToken } = req.body;

  if (!chatId || !message) {
    return res.status(400).json({ error: 'Missing chatId or message' });
  }

  try {
    const token = botToken || process.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
      return res.status(500).json({
        error: 'Telegram bot token not configured'
      });
    }

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        })
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({
        error: error.description || 'Telegram API error'
      });
    }

    const data = await response.json();
    res.status(200).json({
      success: true,
      messageId: data.result.message_id
    });
  } catch (error) {
    console.error('Telegram error:', error);
    res.status(500).json({ error: error.message });
  }
}
