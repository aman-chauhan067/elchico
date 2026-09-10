import React from 'react';
import styles from './DesktopStory.module.css';
import { Reveal } from '../../ui/Reveal';
import { useParallax } from '../../../utils/useParallax';
import { Sticker } from '../../stickers/Sticker';

export const DesktopStory: React.FC = () => {
  const parallaxImg1 = useParallax(0.08);
  const parallaxImg2 = useParallax(-0.06);
  const parallaxDate = useParallax(0.15);

  return (
    <section className={styles.section} id="story">
      <div className={styles.container}>
        
        {/* Giant Faded Date Parallax */}
        <div ref={parallaxDate as React.RefObject<HTMLDivElement>} className={styles.giantDate}>
          1964
        </div>

        <div className={styles.editorialSpread}>
          
          {/* Left Column: Story Text */}
          <div className={styles.textColumn}>
            <Reveal animation="fade-up">
              <span className={styles.handwrittenIntro}>where it all began</span>
              <h2 className={styles.heading}>
                A Legacy of Taste
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={200}>
              <div className={styles.paragraphs}>
                <p>
                  Since 1964, El Chico has been a cornerstone of culinary excellence in Prayagraj. 
                  What started as a humble vision has grown into a cherished tradition, passing down 
                  recipes and passion through generations.
                </p>
                <p>
                  Every loaf of bread, every delicate pastry, and every cup of coffee we serve 
                  is a testament to our enduring commitment to quality and community. We don't just 
                  bake food; we craft memories.
                </p>
              </div>
            </Reveal>

            <Reveal animation="fade-in" delay={400}>
              <div className={styles.signature}>
                The El Chico Family
              </div>
            </Reveal>
          </div>

          {/* Right Column: Archival Imagery */}
          <div className={styles.imageColumn}>
            
            <div className={styles.imageWrapper1}>
              <Reveal animation="slide-left" duration={1000}>
                <div ref={parallaxImg1 as React.RefObject<HTMLDivElement>} className={styles.imageFrame1}>
                  <img 
                    src="/assets/source/images/elrestro.jpg" 
                    alt="El Chico Historic Restaurant" 
                    className={styles.archivalImage}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                  <div className={styles.photoCaption}>Original dining room</div>
                </div>
              </Reveal>
              <div className={styles.sticker1}>
                <Sticker variant="butter" rotation={10} size="sm">PRAYAGRAJ</Sticker>
              </div>
            </div>

            <div className={styles.imageWrapper2}>
              <Reveal animation="fade-up" delay={300} duration={1000}>
                <div ref={parallaxImg2 as React.RefObject<HTMLDivElement>} className={styles.imageFrame2}>
                  <img 
                    src="/assets/source/images/veggiepage2.jpg" 
                    alt="Baking tradition" 
                    className={styles.archivalImage}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop';
                    }}
                  />
                  <div className={styles.photoCaption}>Generations of baking</div>
                </div>
              </Reveal>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
