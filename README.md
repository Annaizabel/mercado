# 🟢 Strelow Soluções para Mercado

**Gestão integrada para minimercados com sincronização PDV, notificações automáticas e controle completo de estoque.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/strelow/mercado)

## 📋 O que é?

Sistema web moderno e intuitivo para gestão de minimercados, desenvolvido especialmente para o **Simples Nacional**. Funciona 100% offline (dados salvos no navegador) e sincroniza com PDV, envia notificações automáticas por WhatsApp/Email/Telegram.

## ✨ Principais Recursos

### 📊 Gestão de Estoque
- Cadastro central de produtos (T19 - Produtos)
- Rastreamento por lotes, validade e idade de estoque
- Alertas automáticos (estoque mínimo, vencimento)
- Controle de múltiplas unidades de medida

### 💰 Análise Financeira
- Precificação com markup/margem
- Curva ABC por fornecedor/setor
- Capital de giro em tempo real
- Fluxo de caixa detalhado
- CMV e custo fixo

### 📱 PDV & Vendas
- Importação automática de vendas (PDV UniPlus)
- Lançamentos diários
- Histórico de transações
- Análise de produtos mais vendidos

### 🚚 Fornecedores
- Cadastro de fornecedores e notas fiscais
- Gestão de boletos (vencimento, pagamento)
- Conferência de mercadoria com scanner
- Detalhamento por fornecedor

### 🔔 Notificações
- WhatsApp (Twilio)
- E-mail (Resend)
- Telegram (Bot API)
- Regras customizáveis de alerta

### 🏦 Conferência de Recebimento
- Importação de nota fiscal
- Checklist digital com scanner/RFID
- Detecção de divergências
- Quarentena de itens problemáticos
- Criação automática de lotes

## 🚀 Deploy no Vercel (5 minutos)

### 1. Clonar e fazer deploy
```bash
git clone https://github.com/strelow/mercado.git
cd mercado
npm install
vercel
```

### 2. Configurar Environment Variables
No painel Vercel, vá para **Settings > Environment Variables** e adicione:

#### WhatsApp (Twilio - opcional)
- `TWILIO_ACCOUNT_SID`: seu Account SID
- `TWILIO_AUTH_TOKEN`: seu Auth Token
- `TWILIO_PHONE_NUMBER`: seu número (ex: +1234567890)

#### E-mail (Resend - opcional)
- `RESEND_API_KEY`: sua chave da API

#### Telegram (opcional)
- `TELEGRAM_BOT_TOKEN`: token do seu bot

#### UniPlus PDV (futuro)
- `UNIPLUS_HOST`: IP do servidor
- `UNIPLUS_PORT`: porta
- `UNIPLUS_USER`: usuário
- `UNIPLUS_PASSWORD`: senha

### 3. Pronto! 🎉
Seu app está ao vivo em `seu-projeto.vercel.app`

## 📖 Como Usar

### 1️⃣ Cadastre seus produtos (T19 - Produtos)
- Nome, setor, categoria
- Preço de custo e venda
- Fornecedor, EAN
- Estoque mínimo

### 2️⃣ Configure notificações (T21 - Notificações)
- Escolha WhatsApp, E-mail ou Telegram
- Configure credenciais
- Defina regras de alerta
- Teste a conexão

### 3️⃣ Importe vendas (T14 - Lançamentos)
- Arraste relatório do PDV (TXT/CSV)
- Ou sincronize automático do UniPlus
- Sistema atualiza estoque automaticamente

### 4️⃣ Acompanhe análises
- T19 (Produtos): visão geral
- T13 (Ranking): top produtos
- T17 (Curva ABC): análise de Pareto
- T18 (Capital de Giro): saúde financeira

## 🔄 Estrutura de Pastas

```
strelow-project/
├── public/
│   └── index.html                 # App principal (366 KB)
├── api/
│   └── notify/
│       ├── whatsapp.js            # API Twilio
│       ├── email.js               # API Resend
│       └── telegram.js            # API Telegram Bot
├── vercel.json                    # Config Vercel
├── package.json
└── README.md
```

## 📡 Arquitetura

```
Navegador (Strelow App)
    ↓
localStorage (dados locais)
    ↓
API Vercel (/api/notify/*)
    ↓
Twilio / Resend / Telegram
    ↓
WhatsApp / Email / Telegram (você)

PDV UniPlus (futuro)
    ↓
API Bridge Vercel
    ↓
App Strelow (sincroniza vendas)
```

## 🔐 Segurança

- ✅ Dados salvos no navegador (100% privado)
- ✅ Nenhuma informação sensível é transmitida
- ✅ Variáveis de ambiente encrypted no Vercel
- ✅ HTTPS em todas as APIs
- ✅ Sem banco de dados central

## 📊 21 Abas Funcionais

| # | Nome | Função |
|---|------|--------|
| 1 | Precificação | Cálculo de preço mínimo |
| 2 | Análise de Promoção | Impacto de descontos |
| 3 | Negociação | Planejamento de compras |
| 4 | Saúde do Negócio | Dashboard executivo |
| 5 | Guia Rápido | Tutorial interativo |
| 6-12 | Análises Financeiras | CMV, Margem, Fluxo, etc |
| 13 | Ranking de Produtos | Top vendedores |
| 14 | Lançamentos Diários | Importar vendas PDV |
| 15 | Fornecedores | Gestão de compras |
| 16 | Notas Fiscais | Rastreamento boletos |
| 17 | Curva ABC | Análise Pareto |
| 18 | Capital de Giro | Saúde de caixa |
| 19 | Produtos (Central) | Cadastro único |
| 20 | Conferência | Recebimento com scanner |
| 21 | Notificações | Alertas automáticos |

## 🛠️ Troubleshooting

### WhatsApp não chega?
```
1. Verifique credenciais Twilio no Vercel
2. Confirme número com código país
3. Teste: curl -X POST https://seu-app.vercel.app/api/notify/whatsapp \
   -H "Content-Type: application/json" \
   -d '{"phoneNumber":"+5585987654321","message":"Teste"}'
```

### E-mail na spam?
```
1. Adicione alertas@strelow.com.br aos contatos
2. Marque como "não é spam"
```

### App não carrega?
```
1. Limpe cache: Ctrl+Shift+Delete
2. Tente em incógnito
3. Verifique: F12 > Console (erros?)
```

## 📱 Suporte & Roadmap

### Próximas Features
- [ ] Integração UniPlus em tempo real
- [ ] App mobile nativo (iOS/Android)
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Dashboard customizável
- [ ] Usuários e permissões
- [ ] Backup automático em nuvem
- [ ] Integração com contabilidade (ERP)

### Contato
- 📧 support@strelow.com.br
- 💬 WhatsApp: [seu contato]
- 🌐 strelow.com.br

## 📄 Licença

MIT © Strelow Soluções

---

**Desenvolvido com ❤️ para sua loja.**

---

## 🚀 Quick Start (TL;DR)

```bash
# Clone
git clone <repo>

# Deploy
cd mercado && vercel

# Configure env vars no painel

# Abra app
https://seu-app.vercel.app

# Configure notificações
T21 > WhatsApp/Email/Telegram > Teste

# Importe primeira venda
T14 > arraste CSV do PDV > OK

# Pronto! Sistema rodando 🎉
```
