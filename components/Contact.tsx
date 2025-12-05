import React, { useState } from 'react';
import Section from './Section';
import { CONTACT_LINKS } from '../constants';
import { ArrowUpRight, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:shauryachauhan863@gmail.com?subject=${subject}&body=${body}`;

    await new Promise(resolve => setTimeout(resolve, 800));
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Section id="contact" className="mb-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-ivory text-charcoal rounded-[2rem] p-10 md:p-20 overflow-hidden shadow-2xl"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute right-0 top-0 w-96 h-96 bg-charcoal rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
           <div className="absolute left-0 bottom-0 w-64 h-64 bg-charcoal rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
           {/* Left Column: Text & Links */}
           <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal/5 rounded-full mb-2">
                 <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                 <span className="font-body text-[10px] font-bold uppercase tracking-widest opacity-60">Open for opportunities</span>
              </div>

              <div className="space-y-6">
                <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight leading-none">
                  Let’s build something together.
                </h2>
                <p className="font-body text-xl font-medium italic opacity-80 leading-relaxed">
                  "If you’re building something interesting — an app, an AI idea, a product that needs love — I’d love to hear about it."
                </p>
                <p className="font-body text-lg opacity-70 leading-relaxed font-normal">
                   I’m open to internships, collaborations, or just conversation over ideas.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                 {CONTACT_LINKS.map((link) => (
                   <a
                     key={link.label}
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group px-6 py-3 bg-charcoal text-ivory rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-xl font-body text-xs font-bold uppercase tracking-wider"
                   >
                     <link.Icon size={18} />
                     {link.label}
                     <ArrowUpRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                   </a>
                 ))}
              </div>
           </div>

           {/* Right Column: Form */}
           <div className="bg-white/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-charcoal/5 shadow-lg">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-16 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-charcoal">Opening Email...</h3>
                    <p className="font-body text-charcoal/70 text-lg">Please hit send in your email app to complete the process.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 font-body text-sm font-bold text-charcoal hover:underline active:scale-95 transition-transform uppercase tracking-wide"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block font-body text-xs font-bold text-charcoal/60 mb-2 uppercase tracking-widest">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`font-body w-full px-4 py-4 rounded-xl bg-white border text-charcoal text-lg placeholder:text-charcoal/30 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-charcoal/10 focus:border-charcoal/30 focus:ring-charcoal/5'} focus:outline-none focus:ring-4 transition-all`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-2 flex items-center gap-1 font-medium"><AlertCircle size={12} /> {errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-body text-xs font-bold text-charcoal/60 mb-2 uppercase tracking-widest">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`font-body w-full px-4 py-4 rounded-xl bg-white border text-charcoal text-lg placeholder:text-charcoal/30 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-charcoal/10 focus:border-charcoal/30 focus:ring-charcoal/5'} focus:outline-none focus:ring-4 transition-all`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-2 flex items-center gap-1 font-medium"><AlertCircle size={12} /> {errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-body text-xs font-bold text-charcoal/60 mb-2 uppercase tracking-widest">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`font-body w-full px-4 py-4 rounded-xl bg-white border text-charcoal text-lg placeholder:text-charcoal/30 ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-charcoal/10 focus:border-charcoal/30 focus:ring-charcoal/5'} focus:outline-none focus:ring-4 transition-all resize-none`}
                        placeholder="What's on your mind?"
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-2 flex items-center gap-1 font-medium"><AlertCircle size={12} /> {errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-charcoal text-ivory rounded-xl font-body font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-3 active:scale-95 active:translate-y-0"
                    >
                      {isSubmitting ? (
                        <span className="w-6 h-6 border-2 border-ivory/30 border-t-ivory rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <Send size={20} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
           </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;