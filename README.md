# Seu Link na Bio Profissional 🚀

Página de captura de alta conversão para criação de **Links na Bio** e **Mini Sites Profissionais**. Desenvolvida com design escuro de alto padrão, degradê dourado/champanhe, mockups 3D em camadas de smartphones para diferentes nichos e formulário integrado diretamente ao WhatsApp.

---

## ✨ Características

- **Sem Header / Distrações**: Acesso direto à proposta de valor de alto impacto.
- **Formulário Acima da Dobra (Mobile-First)**:
  - Campos de Nome e WhatsApp.
  - Máscara dinâmica de telefone brasileiro: `(XX) 9XXXX-XXXX`.
  - Redirecionamento automático para o WhatsApp com mensagem formatada personalizada.
  - Notificação toast visual instantânea.
- **Mockups de Smartphones 3D em Camadas**:
  - **Sabor da Vila**: Gastronomia / Restaurante e lanchonete.
  - **Dra. Mariana Silva**: Advocacia (mockup central em destaque elevado).
  - **Lucas Ferreira**: Personal Trainer / Fitness.
  - **Beleza & Bem-estar**: Estética avançada e clínica de bem-estar.
  - Interatividade: clique em qualquer botão dos mockups para rolar suavemente e focar no formulário.
- **Destaques de Confiança**:
  - ⚡ *Entrega rápida* (Em poucos dias)
  - 📱 *100% responsivo* (Funciona no celular)
  - 🛡️ *Seguro e confiável* (Seus dados protegidos)
- **100% Vanilla**: Sem dependências pesadas, HTML5, CSS3 moderno e JavaScript puro.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** semântico e estruturado para SEO
- **CSS3** (Variáveis customizadas, Flexbox, Grid, Glassmorphism, 3D transforms e micro-animações)
- **JavaScript (ES6+)** para validação, máscara e integração WhatsApp

---

## 🚀 Como Executar Localmente

Você pode simplesmente abrir o arquivo `index.html` em qualquer navegador, ou iniciar o servidor local:

```bash
# Executando com Node.js
node server.js
```

Em seguida, acesse no navegador: `http://localhost:3000`

---

## ⚙️ Configuração do WhatsApp

Para alterar o número de WhatsApp que recebe os leads, edite o arquivo `script.js`:

```javascript
const WHATSAPP_CONFIG = {
  destinationNumber: '5574999249182', // DDI + DDD + Número
  customMessagePrefix: 'Olá! Meu nome é '
};
```
