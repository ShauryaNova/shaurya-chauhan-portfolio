import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for better triggering
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-ivory origin-left z-[60] shadow-[0_0_10px_rgba(245,240,232,0.5)]"
        style={{ scaleX }}
      />
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled || mobileMenuOpen
            ? 'bg-charcoal/80 backdrop-blur-xl border-b border-ivory/5 py-4 shadow-lg'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 cursor-pointer group active:scale-95 transition-transform duration-200"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            <div className="w-10 h-10 rounded-xl bg-ivory text-charcoal flex items-center justify-center font-heading font-bold italic text-lg shadow-lg group-hover:shadow-ivory/30 group-hover:scale-105 transition-all duration-300">
              SC
            </div>
            <span className="text-ivory font-heading font-semibold tracking-wide group-hover:text-white transition-colors">Shaurya Chauhan</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-body text-sm font-medium transition-all duration-200 relative py-1 hover:text-ivory active:scale-95 ${
                  activeSection === link.href.substring(1)
                    ? 'text-ivory'
                    : 'text-ivory-dim/70'
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-ivory shadow-[0_0_8px_1px_rgba(245,240,232,0.5)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-ivory p-2 hover:bg-ivory/10 rounded-lg transition-all active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-charcoal/95 backdrop-blur-xl border-b border-ivory/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-heading text-left text-2xl font-bold transition-transform duration-200 active:scale-95 origin-left ${
                      activeSection === link.href.substring(1)
                        ? 'text-ivory pl-4 border-l-2 border-ivory'
                        : 'text-ivory-dim/60 pl-4 border-l-2 border-transparent'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;