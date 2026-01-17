import React, { useState } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, BarChart3, ImageOff } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [imgError, setImgError] = useState(false);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  // Transforms
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Subtle parallax for the inner content
  const contentX = useTransform(mouseX, [-0.5, 0.5], ["-8px", "8px"]);
  const contentY = useTransform(mouseY, [-0.5, 0.5], ["-8px", "8px"]);
  
  // Subtle shine effect position
  const shineX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    // Calculate normalized position (-0.5 to 0.5)
    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}
    >
      {/* Visual Side (Mockup with Tilt) */}
      <div className={`${!isEven ? 'md:col-start-2' : ''} relative perspective-1000 z-10`}>
        <motion.div
          style={{ 
            rotateX, 
            rotateY,
            transformStyle: "preserve-3d" 
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative group cursor-pointer"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-ivory/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-z-[-20px]" />
          
          <div className="bg-cool-gray/20 border border-ivory/10 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(245,240,232,0.15)] group-hover:border-ivory/20">
             
             {/* Dynamic Shine Effect */}
             <motion.div 
                style={{ 
                  background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(245,240,232,0.1), transparent 80%)` 
                }}
                className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
             />

             {/* Parallax Content Container */}
             <motion.div 
               style={{ x: contentX, y: contentY, z: 30 }}
               className="relative w-full h-full flex items-center justify-center"
             >
                 {/* Abstract Phone or Dashboard depending on project ID for visual variety */}
                 {project.id === 'yt-link-player' ? (
                   /* Mobile Mockup with Screenshot */
                   <div className="w-[220px] border-[8px] border-charcoal bg-charcoal rounded-[2.5rem] shadow-2xl flex flex-col relative overflow-hidden transform transition-transform duration-500">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-charcoal rounded-b-xl z-20 pointer-events-none"/>
                      
                      {/* Screenshot Image with Error Handling */}
                      {!imgError ? (
                        <img 
                          src="/streamlink.jpg" 
                          alt="StreamLink App Interface" 
                          className="w-full h-full object-cover rounded-[2rem]"
                          onError={() => {
                            setImgError(true);
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-cool-gray flex flex-col items-center justify-center p-4 text-center space-y-2">
                          <ImageOff className="text-ivory/30" size={24} />
                          <p className="font-body text-[10px] text-ivory/50 font-medium leading-tight">
                            Image not found.<br/>
                            Ensure <strong>streamlink.jpg</strong><br/>is in root folder.
                          </p>
                        </div>
                      )}
                   </div>
                 ) : (
                   /* Dashboard/Laptop Mockup Style for Goals Tracker */
                   <div className="w-[95%] aspect-[16/10] border-[8px] border-charcoal bg-charcoal rounded-xl shadow-2xl flex flex-col relative overflow-hidden transition-transform duration-500">
                      {/* Browser/Window Header */}
                      <div className="h-7 bg-charcoal border-b border-ivory/5 flex items-center px-3 gap-1.5 shrink-0 z-10">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"/>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"/>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"/>
                         <div className="ml-4 h-3 w-1/3 bg-ivory/5 rounded-full opacity-30"></div>
                      </div>
                      
                      {/* Image Container */}
                      <div className="flex-1 bg-cool-gray relative overflow-hidden">
                         {!imgError ? (
                            <img 
                               src="/goalstracker.png" 
                              alt="Goals Tracker Interface" 
                              className="w-full h-full object-cover"
                              onError={() => setImgError(true)}
                            />
                         ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-cool-gray">
                               <BarChart3 className="text-ivory/10 w-12 h-12 mb-3" />
                               <div className="bg-charcoal/50 p-3 rounded-lg border border-ivory/5 backdrop-blur-sm">
                                  <p className="font-body text-[10px] text-ivory/50 font-medium leading-tight">
                                    Image not found.<br/>
                                    Ensure <strong>goalstracker.png</strong><br/>is in root folder.
                                  </p>
                               </div>
                            </div>
                         )}
                      </div>
                   </div>
                 )}
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="space-y-8">
        <div>
           <div className="flex items-center gap-3 mb-4">
              <span className="font-heading text-5xl font-bold text-ivory/10 -ml-1">0{index + 1}</span>
              <div className="h-px bg-ivory/20 flex-grow" />
           </div>
           <h3 className="font-heading text-3xl font-bold text-ivory mb-2 tracking-tight">{project.title}</h3>
           <p className="font-body text-lg text-ivory/90 font-medium opacity-80">"{project.tagline}"</p>
        </div>

        <div className="space-y-6">
           <div className="prose prose-invert">
              <p className="font-body text-sm md:text-base text-ivory-dim leading-relaxed font-normal">{project.description}</p>
           </div>

           <div className="space-y-3">
              <h4 className="font-body text-xs font-semibold text-ivory uppercase tracking-[0.15em] opacity-70">Key Features</h4>
              <ul className="grid grid-cols-1 gap-2">
                 {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-ivory-dim">
                       <CheckCircle2 size={14} className="mt-1 text-ivory shrink-0" />
                       {feature}
                    </li>
                 ))}
              </ul>
           </div>

           <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map(t => (
                 <span key={t} className="px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider bg-ivory/5 text-ivory rounded-full border border-ivory/10">
                    {t}
                 </span>
              ))}
           </div>

           {project.link && (
             <a href={project.link} className="inline-flex items-center gap-2 font-body text-sm font-bold text-ivory hover:gap-3 transition-all mt-4 border-b border-ivory/30 pb-1 hover:border-ivory active:scale-95 origin-left uppercase tracking-wide">
                View Project <ArrowUpRight size={16} />
             </a>
           )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="mb-20">
        <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-ivory-dim opacity-70 mb-3">Chapter 03</h4>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-ivory mb-6 tracking-tight">Things I Built <span className="text-ivory-dim opacity-50 block md:inline text-3xl md:text-5xl font-normal">(And What They Taught Me)</span></h2>
      </div>

      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;