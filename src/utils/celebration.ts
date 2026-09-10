export const triggerCelebration = (options: { wrapper: HTMLElement; particleCount?: number }) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const { wrapper, particleCount = 40 } = options;
  const rect = wrapper.getBoundingClientRect();
  
  // Create a local container for this burst
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '-1'; // 24. Z-INDEX FIX: Go behind button but trapped in isolated wrapper
  wrapper.appendChild(container);

  // Colors from the El Chico palette
  const colors = [
    'var(--color-strawberry)', 
    'var(--color-butter)', 
    'var(--color-mint)', 
    'var(--color-sky)', 
    'var(--color-lavender)', 
    'var(--color-peach)'
  ];

  const shapes = ['sprinkle', 'circle', 'star', 'heart'];

  // 25. ORIGIN FIX: Local coordinates relative to wrapper, slightly below center
  const originX = rect.width / 2;
  const originY = rect.height * 0.7;

  type Particle = {
    x: number; y: number;
    vx: number; vy: number;
    rotation: number; rotationVelocity: number;
    size: number;
    life: number; maxLife: number;
    element: HTMLElement;
  };

  const particles: Particle[] = [];

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Style the particle
    p.style.position = 'absolute';
    p.style.backgroundColor = shape === 'circle' || shape === 'sprinkle' ? color : 'transparent';
    p.style.willChange = 'transform, opacity';
    
    const size = Math.random() * 6 + 4; // 4px to 10px

    if (shape === 'sprinkle') {
      p.style.width = `${size * 2.5}px`;
      p.style.height = `${size * 0.8}px`;
      p.style.borderRadius = '9999px';
    } else if (shape === 'circle') {
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.borderRadius = '50%';
    } else if (shape === 'star') {
      p.style.width = `${size * 1.5}px`;
      p.style.height = `${size * 1.5}px`;
      p.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
      p.style.backgroundColor = color;
    } else if (shape === 'heart') {
      // Approximate heart shape using clip-path, or just a simple rotated square for paper piece
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.backgroundColor = color;
      p.style.borderRadius = '2px'; // Paper scrap look
    }

    container.appendChild(p);

    // Initial Physics State
    // Angle: mostly upward, slight spread. 200 to 340 degrees (in radians: ~ -2.7 to -0.3)
    const angle = (Math.random() * 140 + 200) * (Math.PI / 180);
    const speed = Math.random() * 600 + 300; // pixels per second initial speed
    
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      rotation: Math.random() * 360,
      rotationVelocity: (Math.random() - 0.5) * 720, // up to 360 deg/sec
      size,
      maxLife: Math.random() * 0.6 + 0.8, // 0.8s to 1.4s
      life: 0,
      element: p,
    });
  }

  const gravity = 1200; // pixels per second squared
  const drag = 0.98; // slight air resistance

  let lastTime: number | null = null;

  const update = (time: number) => {
    if (!lastTime) lastTime = time;
    const dt = (time - lastTime) / 1000;
    lastTime = time;

    // Safety cap on dt to prevent explosions on tab switch
    const delta = Math.min(dt, 0.1);

    let activeParticles = false;

    for (const p of particles) {
      if (p.life >= p.maxLife) {
        if (p.element.parentNode) p.element.parentNode.removeChild(p.element);
        continue;
      }
      activeParticles = true;

      p.life += delta;
      
      // Physics step
      p.vy += gravity * delta;
      p.vx *= Math.pow(drag, delta * 60);
      p.vy *= Math.pow(drag, delta * 60);

      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.rotation += p.rotationVelocity * delta;

      // Opacity fade out
      const progress = p.life / p.maxLife;
      const opacity = progress > 0.6 ? 1 - ((progress - 0.6) / 0.4) : 1;

      // Render
      p.element.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`;
      p.element.style.opacity = opacity.toString();
    }

    if (activeParticles) {
      requestAnimationFrame(update);
    } else {
      // Cleanup
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
  };

  requestAnimationFrame(update);
};
