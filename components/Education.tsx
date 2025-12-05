import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';
import { BookMarked } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <Section id="education">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ivory-dim opacity-70 mb-3">Chapter 05</h4>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ivory mb-6 tracking-tight">Where I'm Building My Fundamentals</h2>
          <p className="font-body text-base text-ivory-dim font-light leading-relaxed max-w-md">
            Structure matters. While I learn by building, my academic path provides the rigorous mathematical and statistical backbone needed for serious Data Science work.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-7"
        >
           <div className="bg-cool-gray/10 border border-ivory/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ivory/5 rounded-full blur-3xl -mr-10 -mt-10" />
              
              <div className="flex items-start gap-6">
                 <div className="p-4 bg-charcoal rounded-2xl border border-ivory/10 shrink-0">
                    <BookMarked className="text-ivory" size={32} />
                 </div>
                 
                 <div className="space-y-4">
                    <div>
                       <h3 className="font-heading text-2xl font-bold text-ivory tracking-tight">{EDUCATION.institution}</h3>
                       <p className="font-heading text-lg text-ivory opacity-90">{EDUCATION.degree}</p>
                       <p className="font-body text-xs text-ivory-dim mt-2 font-medium uppercase tracking-wider">{EDUCATION.period}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                       {EDUCATION.details.map((detail, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-ivory/5 text-ivory-dim font-body text-xs font-medium rounded-lg border border-ivory/5">
                             {detail}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;