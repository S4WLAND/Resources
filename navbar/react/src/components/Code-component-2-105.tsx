import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useScrolled } from './hooks/useScrolled';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const isScrolled = useScrolled(50);

  const menuItems = [
    { name: 'Home', emoji: '🏠', href: '#home' },
    { name: 'About', emoji: '👤', href: '#about' },
    { name: 'Skills', emoji: '⚡', href: '#skills' },
    { name: 'Services', emoji: '🛠️', href: '#services' },
    { name: 'Engineering', emoji: '🏗️', href: '#engineering' }
  ];

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
  };

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out
    ${isScrolled 
      ? 'backdrop-blur-xl bg-zinc-900/25 shadow-2xl shadow-orange-500/10' 
      : 'backdrop-blur-md bg-zinc-900/15'
    }
    border-b border-white/15
  `;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={navbarClasses}
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-[70px] md:h-[80px]">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div 
                className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)',
                  boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)'
                }}
              >
                <span className="text-white font-bold text-lg md:text-xl">JP</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => handleItemClick(item.name)}
                  className={`
                    relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                    flex items-center space-x-2 group cursor-pointer
                    ${activeItem === item.name 
                      ? 'text-white bg-white/12' 
                      : 'text-zinc-300 hover:text-white hover:bg-white/6'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base">{item.emoji}</span>
                  <span>{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-cyan-400 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/15 to-cyan-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative w-12 h-6 rounded-full p-1 transition-all duration-300"
                style={{
                  background: theme === 'dark' 
                    ? 'linear-gradient(135deg, #262626 0%, #404040 100%)' 
                    : 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                  }`}
                  style={{
                    background: theme === 'dark' 
                      ? 'linear-gradient(135deg, #00b4d8 0%, #52b788 100%)'
                      : 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                  layout
                >
                  {theme === 'dark' ? (
                    <Moon className="w-2.5 h-2.5 text-white" />
                  ) : (
                    <Sun className="w-2.5 h-2.5 text-white" />
                  )}
                </motion.div>
              </motion.button>

              {/* CTA Button */}
              <motion.button
                className="hidden md:block px-6 py-2.5 rounded-lg font-medium text-white relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 25px rgba(255, 107, 53, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg bg-white/10 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: 'rgba(15, 15, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center justify-center h-full space-y-8 px-8"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onClick={() => handleItemClick(item.name)}
                  className={`
                    flex items-center space-x-4 px-8 py-4 rounded-2xl text-xl font-medium transition-all duration-300
                    ${activeItem === item.name 
                      ? 'text-white bg-white/12 shadow-lg' 
                      : 'text-zinc-300 hover:text-white hover:bg-white/6'
                    }
                  `}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8 px-8 py-4 rounded-2xl font-medium text-white text-xl relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #e63946 100%)',
                  boxShadow: '0 6px 25px rgba(255, 107, 53, 0.4)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 8px 35px rgba(255, 107, 53, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;