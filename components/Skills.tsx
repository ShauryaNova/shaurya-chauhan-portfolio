import React from 'react';
import Section from './Section';
import { SKILL_GROUPS } from '../constants';
import { motion } from 'framer-motion';
import { Terminal, Database, Wrench, Lightbulb } from 'lucide-react';

const icons = {
  'Core & Languages': Terminal,
  'Data Science': Database,
  'Building & Tools': Wrench,
  'Product Thinking': Lightbulb,
};

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="mb-16 md:flex md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ivory-dim opacity-70 mb-3">Chapter 02</h4>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-6 tracking-tight">Tools I Use To Build</h2>
          <p className="font-body text-base md:text-lg text-ivory-dim font-light leading-relaxed max-w-[640px]">
            I don't collect tools for the sake of it. I pick technologies that help me move from "idea" to "shipped" with clarity and speed.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = icons[group.category as keyof typeof icons] || Terminal;
          return (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(245,240,232,0.1)" }}
              className="group p-8 bg-charcoal border border-ivory/10 rounded-3xl hover:border-ivory/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-ivory/5 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 bg-cool-gray/50 rounded-xl border border-ivory/10 text-ivory group-hover:bg-ivory group-hover:text-charcoal transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-ivory tracking-tight">{group.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 font-body text-xs font-medium rounded-lg bg-cool-gray/30 text-ivory-dim border border-ivory/5 
                    transition-all duration-300 cursor-default
                    group-hover:border-ivory/20 group-hover:bg-cool-gray/50
                    hover:scale-110 hover:bg-ivory/10 hover:text-ivory hover:border-ivory/50 hover:shadow-[0_0_12px_rgba(245,240,232,0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;