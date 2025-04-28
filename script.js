// document.addEventListener("DOMContentLoaded", function() {
//     gsap.from(".hero h1", { opacity: 0, y: -20, duration: 1 });
//     gsap.from(".hero p", { opacity: 0, y: -20, duration: 1, delay: 0.3 });
//     gsap.from(".cta-button", { opacity: 0, y: -20, duration: 1, delay: 0.6 });
//     gsap.from(".skills-container .skill-box", { opacity: 0, y: 20, duration: 1, stagger: 0.3 });
//     gsap.from(".project-card", { opacity: 0, scale: 0.9, duration: 1, delay: 0.5 });

//     // New animations
//     gsap.from(".skill-box", { opacity: 0, scale: 0.5, duration: 0.5, stagger: 0.2 });
//     gsap.from(".project-card", { rotationY: 180, duration: 0.5, stagger: 0.3, ease: "back.out(1.7)" });
// });
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".hero h1", { opacity: 0, y: -20, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -20, duration: 1, delay: 0.3 });
    gsap.from(".cta-button", { opacity: 0, y: -20, duration: 1, delay: 0.6 });

    // Services Section Animation
    gsap.from(".service-card", { opacity: 0, y: 30, duration: 1, stagger: 0.3, ease: "power2.out" });

    // Skills Section Animation
    gsap.from(".skills-container .skill-box", { opacity: 0, scale: 0.7, duration: 0.8, stagger: 0.2, ease: "elastic.out(1, 0.5)" });

    // Projects Section Animation (Fixing duplicate animation)
    gsap.from(".project-card", { opacity: 0, scale: 0.9, rotationY: 180, duration: 1, stagger: 0.3, ease: "back.out(1.7)" });
});
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

observer.observe(aboutSection);