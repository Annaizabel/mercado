# 📁 Estrutura do Projeto

```
strelow-mercado/
│
├── 📄 package.json              # Metadados do projeto
├── 📄 vercel.json               # Configuração Vercel
├── 📄 .gitignore                # Arquivos ignorados Git
├── 📄 .env.example              # Template de variáveis
│
├── 📖 README.md                 # Documentação principal
├── 📖 QUICKSTART.md             # Guia rápido (30 min)
├── 📖 DEPLOY.md                 # Deployment detalhado
├── 📖 ESTRUTURA.md              # Este arquivo
│
├── 📁 public/                   # Arquivos servidos publicamente
│   └── 📄 index.html            # App principal (366 KB)
│                                 # Contém todo o sistema
│                                 # - 21 abas funcionais
│                                 # - BD em localStorage
│                                 # - Interface Strelow
│
└── 📁 api/                      # APIs serverless (Node.js)
    └── 📁 notify/               # Notificações
        ├── 📄 whatsapp.js       # API Twilio (WhatsApp)
        ├── 📄 email.js          # API Resend (Email)
        └── 📄 telegram.js       # API Telegram Bot

```

## 📊 Explicação de Cada Pasta

### `public/` - App Frontend
**O que é:** Seu aplicativo web principal  
**Arquivo:** `index.html` (366 KB)  
**Contém:**
- Todas as 21 abas funcionais
- Sistema de notificações integrado
- Database em localStorage
- Interface responsiva Strelow

**Como funciona:**
1. Usuário acessa `https://seu-app.vercel.app`
2. Vercel serve `public/index.html`
3. App carrega no navegador
4. Dados salvos localmente no browser

### `api/notify/` - APIs de Notificação
**O que são:** Funções serverless que enviam notificações  
**Como funcionam:**

#### whatsapp.js
```
App (Strelow) 
  → POST /api/notify/whatsapp
    → whatsapp.js (Vercel)
      → Twilio API
        → WhatsApp (seu celular)
```

**Variáveis necessárias:**
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`

#### email.js
```
App (Strelow)
  → POST /api/notify/email
    → email.js (Vercel)
      → Resend API
        → Email (seu inbox)
```

**Variáveis necessárias:**
- `RESEND_API_KEY`

#### telegram.js
```
App (Strelow)
  → POST /api/notify/telegram
    → telegram.js (Vercel)
      → Telegram Bot API
        → Telegram (seu chat)
```

**Variáveis necessárias:**
- `TELEGRAM_BOT_TOKEN`

## 🔄 Fluxo de Dados

```
┌─────────────────────────────────────────────────────────┐
│                   Navegador (Strelow)                  │
│                                                          │
│  localStorage (Dados da Loja)                           │
│  ├── Produtos                                           │
│  ├── Movimentações (Vendas/Entradas)                    │
│  ├── Notas Fiscais                                      │
│  └── Lotes                                              │
│                                                          │
│  UI (21 Abas)                                           │
│  ├── T1-T18: Análises                                   │
│  ├── T19: Produtos Central                              │
│  ├── T20: Conferência                                   │
│  └── T21: Notificações                                  │
└─────────────────────────────────────────────────────────┘
        ↓ (se alerta acionado)
┌─────────────────────────────────────────────────────────┐
│              Vercel (Backend Serverless)                │
│                                                          │
│  /api/notify/whatsapp.js                                │
│  /api/notify/email.js                                   │
│  /api/notify/telegram.js                                │
└─────────────────────────────────────────────────────────┘
        ↓
┌─────────────────────────────────────────────────────────┐
│         Serviços Externos (Notificações)                │
│                                                          │
│  Twilio ──→ WhatsApp (seu celular)                     │
│  Resend ──→ Email (seu inbox)                          │
│  Telegram ──→ Bot (seu chat)                            │
└─────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│              UniPlus PDV (Futuro)                        │
│                                                           │
│  Relatório de vendas (diário ou em tempo real)          │
│       ↓                                                   │
│  /api/pdv/sync.js (será criado)                         │
│       ↓                                                   │
│  App Strelow atualiza estoque automaticamente           │
└──────────────────────────────────────────────────────────┘
```

## 🔐 Segurança & Dados

### Onde os dados ficam?
- **Produção:** localStorage do navegador (cliente)
- **Backup:** Você faz download manualmente
- **Nuvem:** Nenhuma, exceto notificações

### O que é enviado pra nuvem?
- Apenas mensagens de notificação (texto)
- Credenciais seguras em Environment Variables (criptografadas pelo Vercel)
- Nenhum dado sensível da loja

### Como fazer backup?
1. Vá para T19 (Produtos)
2. Menu > Exportar dados
3. Salve o JSON

## 📦 Dependências

- **JavaScript puro** (nenhuma framework JS)
- **HTML5** (nenhum bundle necessário)
- **Vercel Functions** (Node.js 18.x)
- **Nenhuma dependência npm** (app é standalone)

## 🚀 Performance

| Métrica | Valor |
|---------|-------|
| Tamanho app | 366 KB |
| Tempo carregamento | < 2s |
| Armazenamento | localStorage (~5-50 MB) |
| Usuários simultâneos | Unlimited |
| APIs de notificação | < 100ms |

## 🔄 Fluxo de Desenvolvimento

```
Seu código local
    ↓
git push → GitHub
    ↓
Vercel webhook detecta push
    ↓
Vercel faz build + deploy automático
    ↓
App ao vivo em https://seu-projeto.vercel.app
    ↓
Usuários acessam
```

## 📝 Variáveis de Ambiente

Todas as variáveis estão definidas em `vercel.json`:

```json
"env": {
  "TWILIO_ACCOUNT_SID": "@twilio_account_sid",
  "TWILIO_AUTH_TOKEN": "@twilio_auth_token",
  "TWILIO_PHONE_NUMBER": "@twilio_phone_number",
  "RESEND_API_KEY": "@resend_api_key",
  "TELEGRAM_BOT_TOKEN": "@telegram_bot_token",
  "UNIPLUS_HOST": "@uniplus_host",
  "UNIPLUS_PORT": "@uniplus_port",
  "UNIPLUS_USER": "@uniplus_user",
  "UNIPLUS_PASSWORD": "@uniplus_password"
}
```

O prefixo `@` significa que Vercel procura a variável no painel.

## 🛠️ Extensões Futuras

```
api/
└── notify/          (atual)
    ├── whatsapp.js
    ├── email.js
    └── telegram.js

api/
├── notify/          (atual)
├── pdv/             (futuro - UniPlus)
│   ├── sync.js      # Sincroniza vendas
│   └── products.js  # Sincroniza preços/estoque
├── backup/          (futuro)
│   └── export.js    # Backup automático
└── reports/         (futuro)
    ├── pdf.js       # Gera relatórios PDF
    └── excel.js     # Gera relatórios Excel
```

## ✅ Checklist de Deploy

- [ ] Clone do repositório
- [ ] `npm install`
- [ ] `vercel` (primeira vez)
- [ ] Crie contas (Twilio/Resend/Telegram)
- [ ] Configure Environment Variables no painel Vercel
- [ ] Redeploy
- [ ] Teste notificações
- [ ] Acesse app em produção
- [ ] Configure T21 (Notificações)
- [ ] Importe primeira venda
- [ ] Pronto! 🎉

---

**Documentação estruturada para desenvolvimento sustentável.**
