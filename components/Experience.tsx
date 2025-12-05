import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Bot, ArrowRight, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="mb-20 max-w-3xl">
         <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ivory/30"></span>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ivory-dim opacity-70">Chapter 04</h4>
         </div>
         <h2 className="font-heading text-4xl md:text-6xl font-bold text-ivory leading-tight tracking-tight">
           OmRex AI — <br/> <span className="text-ivory-dim opacity-60">Early Stage Startup</span>
         </h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group"
      >
         <div className="absolute inset-0 bg-gradient-to-r from-ivory/5 via-transparent to-ivory/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
         
         <div className="bg-gradient-to-br from-charcoal to-cool-gray/30 border border-ivory/10 rounded-3xl p-8 md:p-14 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute -top-10 -right-10 p-12 opacity-[0.03] pointer-events-none rotate-12">
               <Bot size={300} />
            </div>

            <div className="grid md:grid-cols-12 gap-12 relative z-10">
               {/* Header Info */}
               <div className="md:col-span-4 space-y-6 border-b md:border-b-0 md:border-r border-ivory/5 pb-8 md:pb-0 md:pr-8">
                  <div className="w-20 h-20 bg-ivory text-charcoal rounded-2xl flex items-center justify-center shadow-lg mb-4">
                     <Briefcase size={32} />
                  </div>
                  <div>
                     <h3 className="font-heading text-2xl font-bold text-ivory mb-2 tracking-tight">{EXPERIENCE.company}</h3>
                     <p className="font-heading text-lg text-ivory-dim font-medium">{EXPERIENCE.role}</p>
                  </div>
                  <div className="inline-block px-4 py-2 bg-ivory/5 rounded-full font-body text-xs font-semibold text-ivory uppercase tracking-wider border border-ivory/10">
                     {EXPERIENCE.period}
                  </div>
               </div>

               {/* Details */}
               <div className="md:col-span-8 space-y-10">
                  <p className="font-body text-xl md:text-2xl text-ivory font-light leading-relaxed">
                     "{EXPERIENCE.summary}"
                  </p>

                  <div className="space-y-4">
                     <h5 className="font-body text-xs font-bold text-ivory uppercase tracking-[0.2em] opacity-60 mb-4">What I get here</h5>
                     <div className="grid sm:grid-cols-2 gap-4">
                        {EXPERIENCE.description.map((item, idx) => (
                           <div key={idx} className="flex items-start gap-3">
                              <ArrowRight className="text-ivory shrink-0 mt-1.5 opacity-50" size={16} />
                              <p className="font-body text-base text-ivory-dim font-normal leading-relaxed">{item}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>
    </Section>
  );
};

export default Experience;