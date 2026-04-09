// ============================================
//  KEENANSEC PORTFOLIO — SHARED MATRIX JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Custom cursor ──
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.id = 'cursor';
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(cursor);
  document.body.appendChild(dot);

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    dot.style.left    = e.clientX + 'px';
    dot.style.top     = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .skill-tag, .card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '36px';
      cursor.style.height = '36px';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '20px';
      cursor.style.height = '20px';
    });
  });

  // ── Matrix rain ──
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-canvas';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEF></?!@#';
  const fontSize = 14;
  let drops = [];

  function initDrops() {
    const cols = Math.floor(canvas.width / fontSize);
    drops = Array(cols).fill(1);
  }
  initDrops();
  window.addEventListener('resize', initDrops);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(2,13,2,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px Share Tech Mono, monospace';
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 50);

  // ── Nav active state ──
  const currentPath = window.location.pathname;
  document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').replace('../', '').replace('.html', ''))) {
      link.classList.add('active');
    }
  });

  // ── Page entrance animation ──
  const main = document.querySelector('.page-wrap, .hero-content');
  if (main) {
    main.style.opacity = '0';
    main.style.transform = 'translateY(16px)';
    main.style.transition = 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s';
    requestAnimationFrame(() => {
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
    });
  }

});
