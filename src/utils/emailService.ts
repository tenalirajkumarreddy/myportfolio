import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_imav409', // Your EmailJS service ID
  templateId: 'template_1o7x0j7', // Replace with your EmailJS template ID
  publicKey: 'iZsc-XjuJAc4029V4', // Your EmailJS public key
};

export interface EmailData {
  name: string;
  email: string;
  message: string;
  [key: string]: unknown;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    // Send email using EmailJS
    await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, data, EMAILJS_CONFIG.publicKey);
    
    console.log('Email sent successfully!', data);
    
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};

// Function to validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Function to sanitize input
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};
