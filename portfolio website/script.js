(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
  
    const scrollHandler = () => {
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute('id');
        const sectionEnd = sectionTop + sectionHeight;
        const currentScroll = window.scrollY;
  
        // Check if the user has scrolled within the current section
        if (currentScroll >= sectionTop - 150 && currentScroll < sectionEnd) {
          navLinks.forEach(link => {
            // Remove the "active" class from all links
            link.classList.remove('active');
            // If the current section is the one that corresponds to the link, add the "active" class
            if (link.getAttribute('href').includes(id)) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  
    // Call the scrollHandler function on initial load and on scroll
    window.addEventListener('load', scrollHandler);
    window.addEventListener('scroll', scrollHandler);
  })();