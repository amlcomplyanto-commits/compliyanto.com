import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact | ComplyAnto AML Consulting";
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    company: false,
    email: false,
    service: false,
    message: false
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Full Name is required';
        break;
      case 'company':
        if (!value.trim()) error = 'Company is required';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Business Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'service':
        if (!value) error = 'Please select a service';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name as keyof typeof touched]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateField('name', formData.name),
      company: validateField('company', formData.company),
      email: validateField('email', formData.email),
      service: validateField('service', formData.service),
      message: validateField('message', formData.message)
    };
    
    setErrors(newErrors);
    setTouched({
      name: true,
      company: true,
      email: true,
      service: true,
      message: true
    });

    const isValid = !Object.values(newErrors).some(err => err !== '');
    
    if (isValid) {
      console.log(formData);
      alert('Thank you for your inquiry. A senior compliance consultant will contact you shortly.');
      setFormData({ name: '', company: '', email: '', service: '', message: '' });
      setTouched({ name: false, company: false, email: false, service: false, message: false });
      setErrors({ name: '', company: '', email: '', service: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
            Contact ComplyAnto
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Schedule a confidential consultation with our senior AML/BSA advisory team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-sm"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Get in Touch</h2>
            <p className="text-slate-600 mb-12 leading-relaxed">
              Whether you need an independent AML review, a comprehensive risk assessment, or strategic compliance consulting, our experts are ready to assist your institution.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <Mail className="w-6 h-6 text-[#2563eb]" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Email Us</h3>
                  <p className="text-lg font-medium text-slate-900">contact@complyanto.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-slate-50 text-slate-900 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-[#2563eb]'} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:border-transparent outline-none transition-all`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-slate-50 text-slate-900 border ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-[#2563eb]'} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:border-transparent outline-none transition-all`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Business Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-slate-50 text-slate-900 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-[#2563eb]'} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:border-transparent outline-none transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Service Needed</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-slate-50 text-slate-900 border ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-[#2563eb]'} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:border-transparent outline-none transition-all appearance-none`}
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="aml-risk-assessment">AML Risk Assessment</option>
                  <option value="independent-aml-review">Independent AML Review</option>
                  <option value="msb-compliance-consulting">MSB Compliance Consulting</option>
                  <option value="suspicious-activity-investigation">Suspicious Activity Investigation</option>
                  <option value="other">Other Inquiry</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full bg-slate-50 text-slate-900 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-[#2563eb]'} rounded-xl px-4 py-3 text-sm focus:ring-2 focus:border-transparent outline-none transition-all resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#2563eb] text-white py-4 rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 transition-all flex items-center justify-center shadow-lg active:scale-95 group"
              >
                <span>Request Compliance Consultation</span>
                <Send size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
