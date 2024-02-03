const image1Width = 990;
const image1Height = 950;
const image2Width = 1044;
const image2Height = 674;

const image1AspectRatio = image1Width / image1Height;
const image2AspectRatio = image2Width / image2Height;

new hoverEffect({
  parent: document.querySelector('.displacement'),
  intensity: 0.5,
  image1: './images/main.png',
  image2: './images/main-bg.png',
  displacementImage: './images/displacement.png',
  imagesRatio: image1AspectRatio / image2AspectRatio,
});

gsap.from('.nav-top-bar', {
  duration: 1.5,
  delay: 1.4,
  opacity: 0,
  y: 10,
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.from('.navigation', {
  duration: 1.5,
  delay: 1.5,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.to('#hero', {
  duration: 2,
  delay: 1.6,
  backgroundColor: '#fff5f5',
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.from('.hero-text', {
  duration: 2,
  delay: 1.7,
  opacity: 0,
  x: -20,
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.from('.displacement', {
  duration: 2,
  delay: 1.8,

  opacity: 0,
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.from('.logo-container', {
  duration: 1.5,
  delay: 2,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.from('.recent-product', {
  duration: 1.5,
  delay: 2.2,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.from('.sale', {
  duration: 1.5,
  delay: 2.4,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
  stagger: 0.08,
});

gsap.from('#popular-product', {
  duration: 1.5,
  delay: 2.4,
  opacity: 0,
  y: 20,
  ease: 'expo.inOut',
  stagger: 0.08,
});
