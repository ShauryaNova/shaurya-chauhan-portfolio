import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-32 md:py-40 scroll-mt-20 relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="container mx-auto px-6 max-w-5xl relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;