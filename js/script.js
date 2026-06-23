// ===========================
// Scroll Animation Observer
// ===========================
document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for anchor-only links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Gallery items hover effect
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Resource links — informational popups
    const resourceInfo = {
        'Anxiety': 'Anxiety disorders are characterized by persistent excessive worry and fear. Common symptoms include restlessness, rapid heartbeat, and difficulty concentrating. Treatment options include therapy (CBT), medication, and lifestyle changes.',
        'Depression': 'Depression is a mood disorder causing persistent feelings of sadness and loss of interest. Symptoms include fatigue, changes in appetite, and difficulty concentrating. Treatment includes therapy, medication, and support groups.',
        'Bipolar Disorder': 'Bipolar disorder involves extreme mood swings from emotional highs (mania) to lows (depression). Treatment includes mood stabilizers, therapy, and lifestyle management.',
        'OCD': 'Obsessive-Compulsive Disorder involves unwanted repetitive thoughts (obsessions) and behaviors (compulsions). Treatment includes exposure therapy and medication.',
        'Eating Disorders': 'Eating disorders involve serious disturbances in eating behaviors and related thoughts. Types include anorexia, bulimia, and binge eating disorder. Treatment requires a comprehensive approach including therapy and medical care.',
        'ADHD': 'Attention-Deficit/Hyperactivity Disorder affects focus, impulse control, and organizational skills. Treatment includes medication, behavioral therapy, and educational support.',
        'PTSD': 'Post-Traumatic Stress Disorder can develop after experiencing traumatic events. Symptoms include flashbacks, nightmares, and severe anxiety. Treatment includes trauma-focused therapy and medication.',
        'Stress': 'Chronic stress can impact both mental and physical health. Management includes relaxation techniques, exercise, time management, and seeking support when needed.'
    };

    document.querySelectorAll('.resource-link-text').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const title = this.closest('.resource-card-small').querySelector('h4').textContent;
            const info = resourceInfo[title] || 'Information about this topic is being updated. Please contact us for more details.';
            alert(`${title}\n\n${info}\n\nFor more information or support, please contact us at Naymh.official@gmail.com`);
        });
    });

    // Parallax effect for hero section (uses RAF to avoid scroll jank)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const heroGallery = document.querySelector('.hero-gallery');
                if (heroGallery && scrolled < heroGallery.offsetHeight) {
                    heroGallery.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Contact form submission via mailto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const mailtoLink = `mailto:Naymh.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            window.location.href = mailtoLink;
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            if (!isActive) faqItem.classList.add('active');
        });

        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    const firstFaqItem = document.querySelector('.faq-item');
    if (firstFaqItem) firstFaqItem.classList.add('active');

    // Hamburger mobile menu toggle
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.querySelector('.nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = nav.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Team Accordion (click delegation + keyboard navigation)
    const teamToggles = Array.from(document.querySelectorAll('.team-toggle'));

    document.addEventListener('click', function(e) {
        const btn = e.target.closest && e.target.closest('.team-toggle');
        if (!btn) return;

        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        if (!isOpen) {
            btn.setAttribute('aria-expanded', 'true');
            if (panel) {
                panel.classList.add('open');
                panel.setAttribute('aria-hidden', 'false');
                setTimeout(() => { panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 120);
            }
        } else {
            btn.setAttribute('aria-expanded', 'false');
            if (panel) {
                panel.classList.remove('open');
                panel.setAttribute('aria-hidden', 'true');
            }
        }
    });

    document.addEventListener('keydown', function(e) {
        const active = document.activeElement;
        const btn = active && active.classList && active.classList.contains('team-toggle') ? active : null;
        if (!btn) return;

        const idx = teamToggles.indexOf(btn);
        if (idx === -1) return;

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            teamToggles[(idx + 1) % teamToggles.length].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            teamToggles[(idx - 1 + teamToggles.length) % teamToggles.length].focus();
        }
    });
});
