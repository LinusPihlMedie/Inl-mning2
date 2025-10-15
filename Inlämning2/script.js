// Card 3 Slider
      let card3CurrentSlide = 0;
      const card3SliderContainer = document.querySelector('.card-3-slider-container');
      const card3Dots = document.querySelectorAll('.card-3-slider-nav span');
      
      function moveCard3Slide(index) {
        // Update current slide
        card3CurrentSlide = index;
        
        // Move slider
        card3SliderContainer.style.transform = `translateX(-${index * 33.333}%)`;
        
        // Update active dot
        card3Dots.forEach(dot => dot.classList.remove('active'));
        card3Dots[index].classList.add('active');
      }


      // Card 6 Slider
   let card6CurrentSlide = 0;
const card6Slider = document.querySelector('.card-6-slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesToShow = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
const maxSlide = totalSlides - slidesToShow; // <-- change here

function moveCard6Slide(direction) {
  card6CurrentSlide += direction;
  
  if (card6CurrentSlide < 0) {
    card6CurrentSlide = 0; // prevent going negative
  } else if (card6CurrentSlide > maxSlide) {
    card6CurrentSlide = maxSlide; // prevent overshooting
  }
  
  // Use pixel width for exact positioning
  const gap = parseFloat(getComputedStyle(card6Slider).gap);
const slideWidth = slides[0].offsetWidth + gap;
  card6Slider.style.transform = `translateX(-${card6CurrentSlide * slideWidth}px)`;
}

      // Auto slide for testimonials
      setInterval(() => {
        moveCard3Slide((card3CurrentSlide + 1) % 3);
      }, 6000);

      // Auto slide for blog
      setInterval(() => {
        moveCard6Slide(1);
      }, 5000);

      // Scroll animations
      function checkScroll() {
        const elements = document.querySelectorAll('.fade-in, .card-1-text, .card-1-contactCard, .card-2-box-1, .card-2-box-2, .card-2-box-3, .card-2-box-4, .card-4-text, .slide');
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
            element.classList.add('appear');
          }
        });
      }

      // Initial check
      window.addEventListener('scroll', checkScroll);
      window.addEventListener('load', checkScroll);

      // Initialize slides
      window.addEventListener('load', () => {
        const initialSlidesToShow = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
        slides.forEach((slide, index) => {
          if (index < initialSlidesToShow) {
            slide.classList.add('visible');
          }
        });
      });
       
// Form submission
      document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const organization = document.getElementById('organization').value;
        const service = document.getElementById('service').value;
        
        // Get checked services
        const checkedServices = [];
        document.querySelectorAll('input[name="additionalServices"]:checked').forEach(checkbox => {
          checkedServices.push(checkbox.value);
        });
        
        // Show success modal
        document.getElementById('successModal').classList.add('show');
        
        // Reset form
        this.reset();
      });
      
      // Close modal
      document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('successModal').classList.remove('show');
      });
      
      // Close modal when clicking outside
      document.getElementById('successModal').addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('show');
        }
      });

      // Initial check
      window.addEventListener('scroll', checkScroll);
      window.addEventListener('load', checkScroll);

      // Initialize slides
      window.addEventListener('load', () => {
        const initialSlidesToShow = window.innerWidth <= 768 ? 1 : (window.innerWidth <= 1024 ? 2 : 3);
        slides.forEach((slide, index) => {
          if (index < initialSlidesToShow) {
            slide.classList.add('visible');
          }
        });
      });

      document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
});