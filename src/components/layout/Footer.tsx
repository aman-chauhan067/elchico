import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';
import { sourceBrand } from '../../data/source/brand';
import { sourceContact } from '../../data/source/contact';
import { HeartIllustration } from '../illustrations';
import logoImage from '../../assets/logo.webp';

export const Footer: React.FC = () => {
  const verifiedPhone = sourceContact.phones.find(p => p.verified)?.number;
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.topSection}>
          <div className={styles.brandCol}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img src={logoImage} alt="El Chico Logo" style={{ height: '140px', width: 'auto' }} />
            </Link>
            <p className={styles.tagline}>{sourceBrand.tagline}</p>
            <p className={styles.since}>Since {sourceBrand.establishedYear}</p>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Explore</h4>
            <ul className={styles.list}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/our-menu">Menu</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/take-away">Take Away</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Experiences</h4>
            <ul className={styles.list}>
              <li><Link to="/elchico-restaurant">El Chico Restaurant</Link></li>
              <li><Link to="/the-baking-co">The Baking Co.</Link></li>
              <li><Link to="/veggie-veg">Veggie Veg</Link></li>
            </ul>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.heading}>Contact</h4>
            <ul className={styles.list}>
              {sourceContact.locations[0]?.address && (
                <li style={{ opacity: 0.8, maxWidth: '200px', lineHeight: 1.4 }}>
                  {sourceContact.locations[0].address}
                </li>
              )}
              {verifiedPhone && <li><a href={`tel:+91${verifiedPhone.replace(/^0/, '').replace(/\s+/g, '')}`}>+91 {verifiedPhone.replace(/^0/, '')}</a></li>}
              {sourceContact.emails.find(e => e.verified)?.email && (
                <li><a href={`mailto:${sourceContact.emails.find(e => e.verified)?.email}`}>{sourceContact.emails.find(e => e.verified)?.email}</a></li>
              )}
              <li>
                <div className={styles.socials}>
                  <a href="https://www.facebook.com/ElchicoRestaurant" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook size={20} />
                  </a>
                  <a href="https://www.instagram.com/cafeelchico/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>© {new Date().getFullYear()} {sourceBrand.name}. All rights reserved.</p>
          <div className={styles.signoff}>
            <span className={styles.handwritten}>baked with love</span>
            <HeartIllustration size={16} color="var(--color-strawberry)" className={styles.heart} />
          </div>
        </div>

      </div>
    </footer>
  );
};
