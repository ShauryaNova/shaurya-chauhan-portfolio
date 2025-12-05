import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Download, Terminal, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Column: Narrative */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 order-2 md:order-1 relative z-20"
        >
          <motion.div variants={fadeInUp} className="inline-block">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-ivory/10 bg-ivory/5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ivory opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ivory"></span>
              </span>
              <span className="text-[11px] font-body font-medium uppercase tracking-widest text-ivory/80">Available for new ideas</span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ivory leading-tight">
              Hey, I'm Shaurya.
            </h1>
            <p className="font-heading text-xl md:text-2xl text-ivory-dim font-medium leading-normal opacity-90">
              I build things that start as thoughts and keep me curious.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="font-body text-sm md:text-base text-ivory/75 leading-relaxed max-w-[620px]">
              Currently deep diving into Data Science @ IIT Madras BS, writing code, breaking it, fixing it, and repeating until it works beautifully.
              I love fast prototypes, simple solutions, and products that help people in real life.
            </p>
            <p className="font-heading text-lg font-medium text-ivory">
               If curiosity is fuel, I’m running on a full tank.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="group px-8 py-4 bg-ivory text-charcoal rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(245,240,232,0.1)] hover:shadow-[0_0_30px_rgba(245,240,232,0.3)]"
            >
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em]">View My Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf" // Placeholder
              className="group px-8 py-4 border border-cool-gray text-ivory rounded-xl transition-all hover:bg-cool-gray/30 hover:border-ivory/50 flex items-center gap-2 backdrop-blur-sm active:scale-95"
            >
              <span className="font-body text-[11px] font-bold uppercase tracking-[0.15em] text-ivory/90 group-hover:text-ivory">Download Resume</span>
              <Download size={16} className="text-ivory-dim group-hover:text-ivory transition-colors" />
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8 border-t border-ivory/5">
             <div className="flex flex-wrap gap-x-6 gap-y-3 font-body text-[11px] font-medium text-ivory/50 uppercase tracking-[0.15em]">
               <span>Android & AI Apps</span>
               <span className="w-1 h-1 rounded-full bg-ivory/20 my-auto"/>
               <span>Rapid Prototyping</span>
               <span className="w-1 h-1 rounded-full bg-ivory/20 my-auto"/>
               <span>Learn → Build → Refine</span>
               <span className="w-1 h-1 rounded-full bg-ivory/20 my-auto"/>
               <span>Data Science Journey</span>
             </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Abstract Geometric Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 md:order-2 flex justify-center md:justify-end relative h-[500px] w-full"
        >
          <div className="relative w-full h-full flex items-center justify-center">
             {/* Center Core */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute w-72 h-72 border border-ivory/5 rounded-full flex items-center justify-center"
             >
                <div className="absolute w-full h-full border-t border-ivory/20 rounded-full" />
             </motion.div>

             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute w-96 h-96 border border-ivory/5 rounded-full flex items-center justify-center"
             >
                <div className="absolute w-2 h-2 bg-ivory rounded-full top-0" />
             </motion.div>

             {/* Floating Badge Cards */}
             <motion.div 
               animate={{ y: [-15, 15, -15] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 right-10 md:right-0 bg-cool-gray/30 backdrop-blur-md p-4 rounded-2xl border border-ivory/10 shadow-xl"
             >
                <Terminal className="text-ivory mb-2" size={24} />
                <div className="h-1 w-12 bg-ivory/20 rounded mb-1" />
                <div className="h-1 w-8 bg-ivory/10 rounded" />
             </motion.div>

             <motion.div 
               animate={{ y: [20, -20, 20] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute bottom-20 left-10 md:left-0 bg-cool-gray/30 backdrop-blur-md p-4 rounded-2xl border border-ivory/10 shadow-xl"
             >
                <Cpu className="text-ivory mb-2" size={24} />
                <div className="h-1 w-12 bg-ivory/20 rounded mb-1" />
                <div className="h-1 w-8 bg-ivory/10 rounded" />
             </motion.div>

             <motion.div 
               animate={{ x: [-10, 10, -10] }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-charcoal border border-ivory/20 rounded-2xl p-6 shadow-2xl z-10"
             >
                <span className="font-heading font-bold italic text-2xl text-ivory block mb-1">SC</span>
                <span className="font-body text-[10px] font-medium text-ivory-dim uppercase tracking-widest">Builder Profile</span>
             </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;