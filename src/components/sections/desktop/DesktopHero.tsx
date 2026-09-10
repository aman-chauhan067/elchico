import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DesktopHero.module.css';
import { Button } from '../../ui/Button';
import { Reveal } from '../../ui/Reveal';
import { Sticker } from '../../stickers/Sticker';
import { ArrowIllustration } from '../../illustrations';
import { useParallax } from '../../../utils/useParallax';
import { sourceBrand } from '../../../data/source/brand';
import { useAdmin } from '../../../context/AdminContext';

export const DesktopHero: React.FC = () => {
  const { galleryItems } = useAdmin();
  const parallaxBg = useParallax(0.12);
  const navigate = useNavigate();
  
  // Use first 5 image photos for the stack
  const photos = galleryItems.filter(i => i.type === 'image').slice(0, 5);
  const [topIndex, setTopIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isHovered || photos.length === 0) return;

    const interval = setInterval(() => {
      setIsShuffling(true);
      
      // Wait for shuffle-out animation, then update index
      setTimeout(() => {
        setTopIndex((prev) => (prev + 1) % photos.length);
        setIsShuffling(false);
      }, 500); // 500ms allows the card to fly out before snapping to back
      
    }, 4500); // 4.5s between shuffles

    return () => clearInterval(interval);
  }, [isHovered, photos.length]);

  return (
    <section className={styles.hero}>
      {/* GIANT TYPOGRAPHY WATERMARK */}
      <div className={styles.giantTextWrapper}>
        <div ref={parallaxBg as React.RefObject<HTMLDivElement>} className={styles.giantText}>
          {sourceBrand.name.toUpperCase()}
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        
        {/* LEFT: TYPOGRAPHY & CTA */}
        <div className={styles.content}>
          <Reveal animation="fade-in" delay={100}>
            <div className={styles.eyebrowContainer}>
              <span className={styles.eyebrow}>
                <span>S</span>ince {sourceBrand.establishedYear}
              </span>
              <svg className={styles.eyebrowUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,9 100,2" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </Reveal>
          
          <Reveal animation="fade-up" delay={200}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                <span className={styles.titleRow1}>
                  <span className={styles.titleWord1}>SWEET</span>
                  <span className={styles.titleWord2}>little</span>
                </span>
                <span className={styles.titleWord3}>MOMENTS</span>
              </h1>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={300}>
            <div className={styles.supportingCopy}>
              <p>Baked with love, served with joy.</p>
              <p>Sweet <span className={styles.pinkScript}>little</span> moments, every single day.</p>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={400}>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" celebration onClick={() => {
                setTimeout(() => navigate('/our-menu'), 800);
              }}>Explore Menu</Button>
              <div className={styles.arrowContainer}>
                <ArrowIllustration color="var(--color-strawberry)" strokeWidth={3} size={40} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: PHOTO STACK */}
        <div 
          className={styles.visual}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Reveal animation="fade-in" delay={300} duration={1000} className={styles.photoStack}>
            {photos.map((photo, index) => {
              // Calculate relative position (0 = top)
              let offset = (index - topIndex + photos.length) % photos.length;
              
              // Handle CSS classes for positioning and shuffling out
              let positionClass = styles[`photoPosition${offset}`];
              const isShufflingOut = isShuffling && offset === 0;

              return (
                <div 
                  key={photo.id}
                  className={`${styles.photoFrame} ${positionClass} ${isShufflingOut ? styles.shufflingOut : ''}`}
                  style={{
                    zIndex: photos.length - offset,
                  }}
                >
                  <img src={photo.src} alt={photo.type} className={styles.photoImage} />
                  
                  {/* Decorative element on the first item in the array to persist on that specific photo */}
                  {index === 0 && (
                    <div className={styles.stickerFresh}>
                      <Sticker variant="strawberry" rotation={-5} size="sm">FRESH BAKED</Sticker>
                    </div>
                  )}
                  {index === 2 && (
                    <div className={styles.stickerLove}>
                      <Sticker variant="butter" rotation={8} size="sm">BAKED W/ LOVE</Sticker>
                    </div>
                  )}
                </div>
              );
            })}
          </Reveal>
        </div>

      </div>
    </section>
  );
};
