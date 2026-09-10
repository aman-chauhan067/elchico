import React from 'react';
import styles from './TabletSignatureBakes.module.css';
import { menu } from '../../../data';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../ui/Reveal';
import { Sticker } from '../../stickers/Sticker';

export const TabletSignatureBakes: React.FC = () => {
  return (
    <section className={styles.section} id="menu">
      <div className={`container ${styles.container}`}>
        <Reveal animation="fade-up">
          <SectionHeading 
            title="Signature Bakes" 
            subtitle="Handcrafted daily" 
            centered={true}
          />
        </Reveal>

        <div className={styles.grid}>
          {menu.items.slice(0, 4).map((bake, idx) => (
            <Reveal key={bake.id} animation="fade-up" delay={idx * 100} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={bake.image} alt={bake.name} className={styles.image} />
                {idx === 0 && (
                   <div className={styles.stickerPos}>
                     <Sticker variant="strawberry" rotation={-3} size="sm">BAKER'S PICK</Sticker>
                   </div>
                )}
              </div>
              <div className={styles.content}>
                <div className={styles.headerRow}>
                  <h3 className={styles.title}>{bake.name}</h3>
                  <span className={styles.price}>{bake.price}</span>
                </div>
                <p className={styles.desc}>{bake.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
