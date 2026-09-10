import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';

import logoImage from '../../assets/logo.webp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Menu', href: '/our-menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoImage} alt="El Chico Logo" style={{ height: '70px', width: 'auto', transform: 'scale(1.2)' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.href} 
              className={({ isActive }) => 
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className={styles.socialLinks}>
            <a href="https://www.facebook.com/ElchicoRestaurant" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/cafeelchico/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
          </div>

          <Button variant="primary" size="sm" asChild>
            <Link to="/take-away">Order Now</Link>
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className={styles.mobileTrigger} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavOverlay}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className={styles.mobileNavAction}>
              <Button variant="primary" size="lg" asChild>
                <Link to="/take-away" onClick={() => setIsMobileMenuOpen(false)}>Order Now</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
