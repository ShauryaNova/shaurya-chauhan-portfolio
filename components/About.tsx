import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Coffee, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-12 gap-16 md:gap-24 items-start">
        
        {/* Left Column: Narrative */}
        <div className="md:col-span-7 space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-ivory/30"></span>
              <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ivory-dim opacity-80">Chapter 01</h4>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-10 tracking-tight">My Story So Far</h2>
            
            <div className="space-y-8">
              <div className="font-body text-sm md:text-base text-ivory/75 leading-relaxed max-w-[640px] space-y-4">
                <p className="text-lg text-ivory font-medium">I’m Shaurya — someone who learns by doing.</p>
                <p>
                  Most people think → learn first, build later.<br/>
                  I do it the other way around → <span className="text-ivory border-b border-ivory/20 pb-0.5 font-medium">I build to learn.</span>
                </p>
                <p>
                  I’m pursuing the BS Degree in Data Science & Applications from IIT Madras, where I’m exploring how data, algorithms, design, and human behaviour meet in real world products.
                </p>
              </div>

              <div className="pt-8 border-t border-ivory/5">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-ivory mb-4 flex items-center gap-2">
                  <Brain size={24} className="text-ivory opacity-80" /> How I Think
                </h3>
                <p className="font-body text-sm md:text-base text-ivory/75 leading-relaxed max-w-[640px]">
                  I like ideas that scratch an itch — something small, useful, or just fun. 
                  If something interests me, I open my laptop and start building, even if I don’t fully know how yet.
                </p>
                <p className="mt-4 font-body font-medium text-ivory/90 text-base italic border-l-2 border-ivory/20 pl-4">
                  Curiosity first. Research second. Code third. Refine forever.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Key Points Cards */}
        <div className="md:col-span-5 relative space-y-8 mt-8 md:mt-0">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="sticky top-32"
          >
             {/* What I Enjoy Card */}
             <div className="bg-cool-gray/20 border border-ivory/10 rounded-3xl p-8 backdrop-blur-md mb-8 hover:border-ivory/20 transition-colors duration-500 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-ivory/10 rounded-lg text-ivory"><Sparkles size={20} /></div>
                   <h3 className="font-heading text-lg font-bold text-ivory uppercase tracking-wider">What I Enjoy</h3>
                </div>
                <ul className="space-y-4">
                   {[
                     'Building apps that solve real annoyances',
                     'Designing clean & distraction-free interfaces',
                     'Vibecoding late at night with music on',
                     'Making tech feel human, simple & helpful'
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 font-body text-sm text-ivory/80 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-ivory/40 rounded-full shrink-0" />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>

             {/* Currently Card */}
             <div className="bg-charcoal border border-ivory/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-ivory/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:opacity-100 transition-opacity" />
               
               <div className="flex items-center gap-3 mb-6 relative z-10">
                   <div className="p-2 bg-ivory/10 rounded-lg text-ivory"><Lightbulb size={20} /></div>
                   <h3 className="font-heading text-lg font-bold text-ivory uppercase tracking-wider">Currently</h3>
                </div>
                
               <ul className="space-y-4 relative z-10">
                   {[
                     'Learning & polishing DS + ML fundamentals',
                     'Iterating personal projects',
                     'Experimenting with AI workflows',
                     'Growing under OmRex AI'
                   ].map((item, i) => (
                     <li key={i} className="flex items-start gap-3 font-body text-sm text-ivory/80 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-green-500/50 rounded-full shrink-0" />
                        {item}
                     </li>
                   ))}
               </ul>

               <div className="mt-8 pt-6 border-t border-ivory/5 text-center">
                  <p className="font-body font-medium italic text-ivory/70 text-base">
                    "If you want to understand what I do, just look at what I build."
                  </p>
               </div>
             </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
};

export default About;