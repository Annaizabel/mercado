# ⚡ Quick Start (30 minutos)

## 1️⃣ CLONE & SETUP (3 min)

```bash
# Clone
git clone https://github.com/strelow/mercado.git
cd mercado

# Instale dependências
npm install
```

## 2️⃣ VERCEL SETUP (5 min)

### Primeira vez:
```bash
# Deploy inicial
vercel
```

Vercel vai te fazer algumas perguntas:
- Scope: Use seu nome/conta
- Project name: `strelow-mercado`
- Directory: `.` (ponto)
- Build command: deixe em branco
- Output directory: deixe em branco

**Seu app está ao vivo em:** `https://seu-projeto.vercel.app` 🎉

### Depois (rápido):
```bash
vercel --prod
```

## 3️⃣ CONFIGURAR NOTIFICAÇÕES (10 min)

### No painel Vercel:
1. Vá para seu projeto
2. **Settings > Environment Variables**
3. Clique **Add new**

### Se quiser WhatsApp:
```
Copie de https://www.twilio.com/console:

TWILIO_ACCOUNT_SID = seu_account_sid
TWILIO_AUTH_TOKEN = seu_auth_token
TWILIO_PHONE_NUMBER = +1234567890
```

### Se quiser Email:
```
Copie de https://resend.com:

RESEND_API_KEY = re_sua_chave_aqui
```

### Se quiser Telegram:
```
De @BotFather no Telegram:

TELEGRAM_BOT_TOKEN = 123456:ABCdef...XYZABC
```

### Depois de adicionar variáveis:
1. Volte para **Deployments**
2. Clique no último deploy
3. Clique **Redeploy**
4. Aguarde 1 minuto

## 4️⃣ PRIMEIRA EXECUÇÃO (5 min)

1. Abra: `https://seu-projeto.vercel.app`
2. Vá para **T21 - Notificações**
3. Habilite o(s) canal(is) que ativou
4. Preencha as credenciais
5. Clique **Testar notificações**
6. Verifique se chegou no seu WhatsApp/Email/Telegram

## 5️⃣ COMEÇAR A USAR (7 min)

### Cadastre seus produtos:
1. Vá para **T19 - Produtos**
2. Clique **+ Novo produto**
3. Preencha: nome, setor, preço custo, preço venda
4. Salva automaticamente

### Configure limites de alerta:
1. Vá para **T11 - Estoque**
2. Seção "Regras de alerta"
3. Configure:
   - Idade máxima do estoque: 180 dias
   - Validade avisar com: 30 dias
   - Estoque mínimo ativo: ✅

### Importe sua primeira venda:
1. Vá para **T14 - Lançamentos**
2. Clique **Importar PDF de nota fiscal**
3. Arraste relatório do PDV
4. Sistema atualiza estoque automaticamente

## 6️⃣ PRÓXIMOS PASSOS

- [ ] Sincronizar com UniPlus PDV (avançado)
- [ ] Treinar equipe
- [ ] Backup de dados
- [ ] Customizar alertas

## 🆘 Troubleshooting

### "Vercel diz 'Not Found'"
```
Aguarde 5 minutos de redeploy após adicionar variáveis
```

### "WhatsApp não chega"
```
1. Confirme número com código país (5585987654321)
2. Teste com curl:
   curl -X POST https://seu-app.vercel.app/api/notify/whatsapp \
   -H "Content-Type: application/json" \
   -d '{"phoneNumber":"+5585987654321","message":"Teste"}'
```

### "Email na spam"
```
Adicione alertas@strelow.com.br aos contatos
```

## 📚 Documentação Completa

- **DEPLOY.md** - Guia detalhado de deployment
- **README.md** - Documentação completa do app
- **VERCEL_SETUP.md** - Setup específico Vercel

## ✅ Checklist Final

- [ ] App ao vivo no Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Notificações testadas
- [ ] Primeiro produto cadastrado
- [ ] Primeira venda importada
- [ ] Equipe acessando

**Parabéns! Seu Strelow está rodando! 🚀**

---

Dúvidas? support@strelow.com.br
