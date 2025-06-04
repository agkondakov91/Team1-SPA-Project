document.getElementById('link-to-section1').addEventListener('click', function(event) {
  event.preventDefault(); 

  const targetId = this.getAttribute('href').substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

document.getElementById('link-to-section2').addEventListener('click', function(event) {
  event.preventDefault(); 

  const targetId = this.getAttribute('href').substring(1); 
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});