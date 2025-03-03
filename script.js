// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
      hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
    }
    
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        if (hamburger.classList.contains('active')) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        }
      });
    });
    
    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
          } else if (card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Function to animate skill bars
    function animateSkillBars() {
      skillBars.forEach(bar => {
        if (isInViewport(bar)) {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        }
      });
    }
    
    // Initial check and add scroll event listener
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        // In a real application, you would send this data to a server
        // For this demo, we'll just show a success message
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
      });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Get the height of the fixed header
          const headerHeight = document.querySelector('header').offsetHeight;
          
          // Calculate the position to scroll to
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      }
    });
  });