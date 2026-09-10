import React, { useRef, useEffect } from 'react';
import styles from './DesktopGallery.module.css';
import { gallery } from '../../../data';
import { Reveal } from '../../ui/Reveal';

const CONTENT_WIDTH = 2600;
const CONTENT_HEIGHT = 1800;

// Create 12 items from the gallery data
const galleryItems = [
  { img: gallery[0 % gallery.length], x: 0, y: 0, w: 350, h: 450, rot: -2, type: 'portrait' },
  { img: gallery[1 % gallery.length], x: 500, y: -200, w: 450, h: 300, rot: 1, type: 'landscape' },
  { img: gallery[2 % gallery.length], x: 1000, y: 100, w: 300, h: 300, rot: -1, type: 'square' },
  { img: gallery[3 % gallery.length], x: 1500, y: -300, w: 250, h: 350, rot: 3, type: 'polaroid' },
  
  { img: gallery[4 % gallery.length], x: -300, y: 500, w: 550, h: 350, rot: 1, type: 'large' },
  { img: gallery[0 % gallery.length], x: 400, y: 600, w: 350, h: 450, rot: -3, type: 'portrait' },
  { img: gallery[1 % gallery.length], x: 1100, y: 550, w: 600, h: 400, rot: 2, type: 'landscape' },
  
  { img: gallery[2 % gallery.length], x: -600, y: -100, w: 400, h: 400, rot: -1, type: 'square' },
  { img: gallery[3 % gallery.length], x: -800, y: 700, w: 500, h: 300, rot: 2, type: 'landscape' },
  { img: gallery[4 % gallery.length], x: 1700, y: 400, w: 350, h: 450, rot: -2, type: 'portrait' },
  { img: gallery[0 % gallery.length], x: -100, y: -600, w: 250, h: 250, rot: 4, type: 'small' },
  { img: gallery[1 % gallery.length], x: 900, y: -700, w: 300, h: 400, rot: -2, type: 'portrait' }
];

export const DesktopGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let state = { x: 0, y: 0, vx: 0, vy: 0, isDragging: false };
    let lastPointer = { x: 0, y: 0 };
    let animationFrameId: number;

    const onPointerDown = (e: PointerEvent) => {
      state.isDragging = true;
      state.vx = 0;
      state.vy = 0;
      lastPointer = { x: e.clientX, y: e.clientY };
      if (containerRef.current) containerRef.current.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!state.isDragging) return;
      const dx = e.clientX - lastPointer.x;
      const dy = e.clientY - lastPointer.y;
      state.x -= dx;
      state.y -= dy;
      state.vx = -dx;
      state.vy = -dy;
      lastPointer = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      state.isDragging = false;
      if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);
    }

    const loop = () => {
      if (!state.isDragging) {
        // Friction / Damping
        state.vx *= 0.92;
        state.vy *= 0.92;
        state.x += state.vx;
        state.y += state.vy;

        // Magnetic Center Attraction
        if (Math.abs(state.vx) < 0.5 && Math.abs(state.vy) < 0.5) {
          let nearestItem = null;
          let minDist = Infinity;
          
          galleryItems.forEach(item => {
            let dx = (item.x - state.x) % CONTENT_WIDTH;
            if (dx > CONTENT_WIDTH / 2) dx -= CONTENT_WIDTH;
            if (dx < -CONTENT_WIDTH / 2) dx += CONTENT_WIDTH;

            let dy = (item.y - state.y) % CONTENT_HEIGHT;
            if (dy > CONTENT_HEIGHT / 2) dy -= CONTENT_HEIGHT;
            if (dy < -CONTENT_HEIGHT / 2) dy += CONTENT_HEIGHT;

            let dist = dx * dx + dy * dy;
            if (dist < minDist) {
              minDist = dist;
              nearestItem = { dx, dy };
            }
          });

          if (nearestItem) {
            // Spring towards the nearest item
            state.x += (nearestItem as {dx: number, dy: number}).dx * 0.04;
            state.y += (nearestItem as {dx: number, dy: number}).dy * 0.04;
          }
        }
      }

      // Update DOM with Toroidal Wrap
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const item = galleryItems[i];
        
        let dx = (item.x - state.x) % CONTENT_WIDTH;
        if (dx > CONTENT_WIDTH / 2) dx -= CONTENT_WIDTH;
        if (dx < -CONTENT_WIDTH / 2) dx += CONTENT_WIDTH;

        let dy = (item.y - state.y) % CONTENT_HEIGHT;
        if (dy > CONTENT_HEIGHT / 2) dy -= CONTENT_HEIGHT;
        if (dy < -CONTENT_HEIGHT / 2) dy += CONTENT_HEIGHT;

        // Using transform scale to emphasize the center item slightly
        const distToCenter = Math.sqrt(dx * dx + dy * dy);
        const scale = Math.max(0.9, 1 - (distToCenter / 2000));
        const zIndex = distToCenter < 300 ? 10 : 1;
        const opacity = distToCenter < 1000 ? 1 : Math.max(0.2, 1 - (distToCenter - 1000) / 500);

        el.style.transform = `translate(-50%, -50%) translate3d(${dx}px, ${dy}px, 0) rotate(${item.rot}deg) scale(${scale})`;
        el.style.zIndex = zIndex.toString();
        el.style.opacity = opacity.toString();
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener('pointerdown', onPointerDown);
      }
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  return (
    <section className={styles.section} id="gallery">
      <Reveal animation="fade-up" className={styles.header}>
        <h2 className={styles.title}>IN EVERY DETAIL</h2>
        <p className={styles.subtitle}>Drag to explore</p>
      </Reveal>

      <div className={styles.viewportWrapper}>
        <div ref={containerRef} className={styles.viewport} style={{ touchAction: 'none' }}>
          {galleryItems.map((item, idx) => {
            // Apply different frame styles based on type
            let frameClass = styles.frameNormal;
            if (item.type === 'polaroid') frameClass = styles.framePolaroid;
            if (item.type === 'square') frameClass = styles.frameSquare;

            return (
              <div 
                key={idx} 
                ref={el => itemsRef.current[idx] = el}
                className={`${styles.galleryItem} ${frameClass}`}
                style={{ width: item.w, height: item.h }}
              >
                <img src={item.img.src} alt={item.img.type} className={styles.image} draggable={false} />
                {item.type === 'polaroid' && <div className={styles.caption}>{item.img.type}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
