const sections = document.querySelectorAll('section');
for (section of sections) {
  section.style.border = '2px solid steelblue';
  section.style.marginBottom = '15px';
  section.style.borderRadius = '10px';
  section.style.padding = '10px';
  section.style.backgroundColor = 'lightblue';
}

// const skillsContainer = document.getElementById('skills-container');
// skillsContainer.style.backgroundColor = 'lightYellow';

const skillsContainer = document.getElementById('skills-container');
skillsContainer.classList.add('text-center');
skillsContainer.classList.remove('demo-class');


