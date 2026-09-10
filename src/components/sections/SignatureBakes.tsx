import React from 'react';
import styles from './SignatureBakes.module.css';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { menu } from '../../data';
import { Sticker } from '../stickers/Sticker';

export const SignatureBakes: React.FC = () => {
  return (
    <section id="menu" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <Reveal>
          <SectionHeading 
            title="Signature Bakes" 
            subtitle="A selection of our most beloved creations, baked fresh every morning."
          />
        </Reveal>

        <div className={styles.grid}>
          {menu.items.map((item, index) => (
            <Reveal 
              key={item.id} 
              animation="fade-up" 
              delay={index * 150}
              className={styles.itemWrapper}
            >
              <div className={styles.item}>
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.name} className={styles.image} loading="lazy" />
                  {item.badge && (
                    <div className={styles.badgeWrapper}>
                      <Sticker variant="peach" size="sm" rotation={-4}>{item.badge}</Sticker>
                    </div>
                  )}
                </div>
                
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3 className={styles.name}>{item.name}</h3>
                    {item.price && <span className={styles.price}>{item.price}</span>}
                  </div>
                  <p className={styles.category}>{item.category}</p>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
