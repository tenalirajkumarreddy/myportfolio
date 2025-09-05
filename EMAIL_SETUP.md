# EmailJS Setup Instructions

To enable actual email sending functionality in your portfolio contact form, follow these steps:

## 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- The free plan includes 200 emails per month

## 2. Create an Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your chosen provider

## 3. Create an Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use these template variables in your email template:
  - `{{name}}` - Sender's name
  - `{{email}}` - Sender's email
  - `{{message}}` - Message content

Example template:
```
Subject: New Contact Form Message from {{name}}

You have received a new message from your portfolio website:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

## 4. Get Your Configuration Keys
- Service ID: Found in Email Services section
- Template ID: Found in Email Templates section  
- Public Key: Found in Account > API Keys

## 5. Update Configuration
Open `src/utils/emailService.ts` and update the configuration:

```typescript
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here', 
  publicKey: 'your_public_key_here',
};
```

## 6. Enable Email Sending
Uncomment this line in `src/utils/emailService.ts`:
```typescript
await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, data, EMAILJS_CONFIG.publicKey);
```

And comment out the demo simulation code.

## 7. Test Your Form
- Run your portfolio locally or deploy it
- Fill out the contact form
- Check your email for the message

## Alternative Solutions

If you prefer not to use EmailJS, here are other options:

### Formspree
- Simple form backend service
- Free tier available
- Easy integration with HTML forms

### Netlify Forms
- Built-in form handling for Netlify deployments
- Free tier included with Netlify hosting

### Backend API
- Create your own backend service
- Use Node.js with Express and Nodemailer
- Deploy on platforms like Vercel, Netlify Functions, or AWS Lambda

## Security Note
Never expose sensitive API keys in your frontend code. EmailJS public keys are safe to use in frontend applications as they are designed for this purpose.
