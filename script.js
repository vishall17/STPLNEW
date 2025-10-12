        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            if(section.id === 'home') {
                gsap.from('.hero h1', {
                    duration: 1.5,
                    y: 100,
                    opacity: 0,
                    ease: "power3.out",
                    stagger: 0.1
                });

                gsap.from('.hero p', {
                    duration: 1.5,
                    y: 50,
                    opacity: 0,
                    delay: 0.5,
                    ease: "power3.out"
                });

                gsap.from('.hero .btn', {
                    duration: 1,
                    y: 30,
                    opacity: 0,
                    delay: 1,
                    ease: "power3.out",
                    stagger: 0.2
                });

                gsap.to('.floating-element', {
                    y: 30,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                    stagger: 0.5
                });

                gsap.to('.hero .animated-shape', {
                    rotation: 360,
                    duration: 20,
                    repeat: -1,
                    ease: "none",
                    stagger: 0.5
                });
            }
            else if(section.id === 'text-animation-section') {
                var h2Data = document.querySelectorAll("#text-animation-section h2");
                
                h2Data.forEach(function(elem){
                    var textData = elem.textContent;
                    var splitedText = textData.split("");
                    var clutter = "";
                    splitedText.forEach(function(e){
                        clutter += `<span>${e}</span>`;
                    });
                    elem.innerHTML = clutter;
                });

                gsap.to("#text-animation-section h2 span", {
                    color: "#E3E3C4",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: "#text-animation-section",
                        scroller: "body",
                        start: "top 60%",
                        end: "top 1%",
                        scrub: 2,
                        //markers: true
                    }
                });

                gsap.from("#text-animation-section h2", {
                    duration: 1,
                    y: 100,
                    opacity: 0,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: "#text-animation-section",
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
            else if(section.id === 'services') {
                // gsap.from('.service-card', {
                //     duration: 1,
                //     y: 100,
                //     opacity: 0,
                //     rotationY: 15,
                //     stagger: 0.2,
                //     scrollTrigger: {
                //         trigger: section,
                //         start: "top 80%",
                //         end: "bottom 20%",
                //         toggleActions: "play none none reverse"
                //     }
                // });

                gsap.to('#services .animated-shape', {
                    rotation: 180,
                    duration: 30,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }
            else if(section.id === 'about') {
                gsap.from('.about-text', {
                    duration: 1,
                    x: -100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });

                gsap.from('.about-image', {
                    duration: 1,
                    x: 100,
                    opacity: 0,
                    scale: 0.9,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
            else if(section.id === 'stats') {
                gsap.from('.stat-item', {
                    duration: 1,
                    y: 50,
                    opacity: 0,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });

                gsap.to('#stats .animated-shape', {
                    rotation: 360,
                    duration: 40,
                    repeat: -1,
                    ease: "none"
                });
            }
            else if(section.id === 'team') {
                // Team animations
                // gsap.from('.team-card', {
                //     duration: 1,
                //     y: 100,
                //     opacity: 0,
                //     scale: 0.8,
                //     stagger: 0.2,
                //     scrollTrigger: {
                //         trigger: section,
                //         start: "top 80%",
                //         end: "bottom 20%",
                //         toggleActions: "play none none reverse"
                //     }
                // });
            }
            else if(section.id === 'contact') {
                gsap.from('.contact-info', {
                    duration: 1,
                    x: -100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });

                gsap.from('.contact-form', {
                    duration: 1,
                    x: 100,
                    opacity: 0,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });

        gsap.to("header", {
            backgroundColor: "var(--bg-color)",
            boxShadow: "var(--shadow)",
            duration: 0.3,
            scrollTrigger: {
                trigger: "body",
                start: "-1px top",
                toggleActions: "play none none reverse"
            }
        });

        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const deltaX = (x - centerX) / centerX;
                const deltaY = (y - centerY) / centerY;
                
                gsap.to(btn, {
                    duration: 0.5,
                    x: deltaX * 10,
                    y: deltaY * 10,
                    ease: "power2.out"
                });
            });
            
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    ease: "elastic.out(1, 0.5)"
                });
            });
        });

        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            let count = 0;
            const duration = 2000;
            const increment = target / (duration / 16); // 60fps
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    stat.textContent = Math.floor(count);
                    setTimeout(updateCount, 16);
                } else {
                    stat.textContent = target;
                }
            };
            
            ScrollTrigger.create({
                trigger: '#stats',
                start: 'top 80%',
                onEnter: updateCount,
                once: true
            });
        });

        const navDots = document.querySelectorAll('.nav-dot');
        
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                const scrollPos = self.scroll();
                
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        navDots.forEach(dot => dot.classList.remove('active'));
                        navDots[index].classList.add('active');
                    }
                });
            }
        });
        
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: sections[index],
                        offsetY: 70
                    },
                    ease: "power2.inOut"
                });
            });
        });

        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                gsap.to(themeToggle, {rotation: 360, duration: 0.5});
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                gsap.to(themeToggle, {rotation: -360, duration: 0.5});
            }
        });

        const mobileMenu = document.getElementById('mobileMenu');
        const navbar = document.getElementById('navbar');

        mobileMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            if (navbar.classList.contains('active')) {
                mobileMenu.innerHTML = '<i class="fas fa-times"></i>';
                gsap.from('nav ul li', {
                    duration: 0.5,
                    x: -50,
                    opacity: 0,
                    stagger: 0.1
                });
            } else {
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                mobileMenu.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });

        gsap.from('.logo', {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: "bounce.out"
        });

        const serviceIcons = document.querySelectorAll('.service-icon');
        serviceIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    duration: 0.3,
                    scale: 1.2,
                    rotation: 10,
                    ease: "back.out(1.7)"
                });
            });
            
            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    duration: 0.3,
                    scale: 1,
                    rotation: 0,
                    ease: "back.out(1.7)"
                });
            });
        });