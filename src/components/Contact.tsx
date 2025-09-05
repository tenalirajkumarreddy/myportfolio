import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { sendEmail, isValidEmail, sanitizeInput } from '../utils/emailService';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    const sanitizedName = sanitizeInput(formData.name);
    if (!sanitizedName) {
      newErrors.name = 'Name is required';
    } else if (sanitizedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    const sanitizedMessage = sanitizeInput(formData.message);
    if (!sanitizedMessage) {
      newErrors.message = 'Message is required';
    } else if (sanitizedMessage.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      // Sanitize form data before sending
      const emailData = {
        name: sanitizeInput(formData.name),
        email: formData.email.trim(),
        message: sanitizeInput(formData.message)
      };

      // Send email using the email service
      await sendEmail(emailData);
      
      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader size={20} className="animate-spin" />;
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <AlertCircle size={20} />;
      default:
        return <Send size={20} />;
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return 'Sending...';
      case 'success':
        return 'Message Sent!';
      case 'error':
        return 'Try Again';
      default:
        return 'Send Message';
    }
  };

  const getButtonStyle = () => {
    const baseStyle = "w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2";
    
    switch (status) {
      case 'loading':
        return `${baseStyle} bg-blue-400 text-white cursor-not-allowed`;
      case 'success':
        return `${baseStyle} bg-green-600 text-white hover:bg-green-700`;
      case 'error':
        return `${baseStyle} bg-red-600 text-white hover:bg-red-700`;
      default:
        return `${baseStyle} bg-blue-600 text-white hover:bg-blue-700`;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Get In Touch</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and innovation. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">tenalirajkumar@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="text-gray-600">+91 6305295757</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Location</div>
                    <div className="text-gray-600">Guntur, Andhra Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              {/* Status Message */}
              {status !== 'idle' && statusMessage && (
                <div className={`mb-6 p-4 rounded-lg ${
                  status === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : status === 'error'
                    ? 'bg-red-50 text-red-800 border border-red-200'
                    : 'bg-blue-50 text-blue-800 border border-blue-200'
                }`}>
                  <div className="flex items-center gap-2">
                    {status === 'success' && <CheckCircle size={16} />}
                    {status === 'error' && <AlertCircle size={16} />}
                    <span className="text-sm">{statusMessage}</span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                  disabled={status === 'loading'}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  disabled={status === 'loading'}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                  disabled={status === 'loading'}
                  maxLength={1000}
                />
                <div className="flex justify-between items-center mt-1">
                  <div>
                    {errors.message && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    {formData.message.length}/1000
                  </p>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={getButtonStyle()}
              >
                {getStatusIcon()}
                {getButtonText()}
              </button>

              <p className="mt-4 text-xs text-gray-500 text-center">
                * Required fields. Your information will be kept private and secure.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};