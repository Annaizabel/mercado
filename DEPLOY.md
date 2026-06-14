# 🚀 Guia de Deploy no Vercel

## Pré-requisitos
- [ ] Conta GitHub (grátis)
- [ ] Conta Vercel (grátis)
- [ ] Contas nos serviços de notificação (opcionais):
  - Twilio (WhatsApp) - grátis para começar
  - Resend (Email) - grátis até 100/dia
  - Telegram Bot - grátis sempre

## Passo 1: Preparar Repositório GitHub

### 1.1 Criar repo no GitHub
1. Acesse https://github.com/new
2. Nome: `strelow-mercado`
3. Descrição: "Gestão para mercados - Simples Nacional"
4. Clique "Create repository"

### 1.2 Push do código
```bash
git clone <seu-repo>
cd strelow-mercado

# Copiar estrutura
# (colocar arquivos aqui)

git add .
git commit -m "Initial commit"
git push -u origin main
```

## Passo 2: Criar Contas nos Serviços

### 2.1 Twilio (WhatsApp)
1. Acesse https://www.twilio.com/console
2. Crie conta ou faça login
3. Vá para **Messaging > Try it out**
4. Escolha **WhatsApp**
5. Copie:
   - Account SID
   - Auth Token
   - Phone Number (ex: +1234567890)

### 2.2 Resend (Email)
1. Acesse https://resend.com
2. Crie conta com Google
3. Vá para **API Keys**
4. Copie sua chave (re_...)

### 2.3 Telegram Bot (opcional)
1. Abra Telegram
2. Busque **@BotFather**
3. Envie `/newbot`
4. Escolha nome e handle
5. Copie o **Token**
6. Busque **@userinfobot**
7. Copie seu **Chat ID**

## Passo 3: Deploy no Vercel

### 3.1 Conectar GitHub
1. Acesse https://vercel.com
2. Clique "New Project"
3. Selecione seu repo GitHub
4. Clique "Import"

### 3.2 Configurar
- **Framework**: "Other"
- **Build Command**: deixe em branco
- **Install Command**: deixe em branco
- Clique "Deploy"

### 3.3 Esperar
Vercel vai fazer deploy automaticamente (2-3 minutos)

Seu app estará em: `https://seu-projeto.vercel.app`

## Passo 4: Adicionar Environment Variables

### 4.1 No painel Vercel
1. Vá para **Settings > Environment Variables**
2. Clique "Add new"

### 4.2 Adicionar variáveis
Para **cada serviço** que vai usar, adicione:

**WhatsApp (Twilio):**
```
TWILIO_ACCOUNT_SID = seu_account_sid
TWILIO_AUTH_TOKEN = seu_auth_token
TWILIO_PHONE_NUMBER = +1234567890
```

**Email (Resend):**
```
RESEND_API_KEY = re_...sua_chave
```

**Telegram (optional):**
```
TELEGRAM_BOT_TOKEN = 123456:ABCdef...
```

### 4.3 Fazer redeploy
Após adicionar variáveis:
1. Vá para **Deployments**
2. Clique no último deploy
3. Clique "Redeploy"

Pronto! ✅

## Passo 5: Configurar no App

### 5.1 Abrir aplicação
https://seu-projeto.vercel.app

### 5.2 Ir para T21 - Notificações
1. Habilite os canais que vai usar
2. Preencha as credenciais:
   - WhatsApp: seu número (ex: 5585987654321)
   - Email: seu email
   - Telegram: seu Chat ID + Bot Token
3. Clique **Testar notificações**

### 5.3 Confirmar recebimento
Você deve receber mensagens nos canais configurados.

## Dúvidas Comuns

### "Como atualizar o app?"
```bash
git add .
git commit -m "Sua mensagem"
git push
# Vercel redeploy automaticamente
```

### "Como resetar dados?"
Abra DevTools (F12) > Application > localStorage > Limpe tudo

### "Preciso de backup?"
Exporte seu JSON da T19 (Produtos) regularmente.

### "Posso usar domínio customizado?"
Sim! No painel Vercel > Settings > Domains

## Support
- Docs: https://docs.strelow.com.br
- Issues: https://github.com/strelow/mercado/issues
- Email: support@strelow.com.br

---

**Deploy bem-sucedido! 🎉**
