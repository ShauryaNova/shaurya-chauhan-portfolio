import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-cool-gray/30 text-center">
      <div className="container mx-auto px-6">
        <p className="font-body text-ivory text-sm font-medium">Designed and built by Shaurya Chauhan.</p>
        <p className="font-body text-ivory-dim text-xs mt-2 opacity-60">Powered by curiosity, data, and a bit of vibe coding.</p>
      </div>
    </footer>
  );
};

export default Footer;