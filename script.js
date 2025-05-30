// Navbar implementation
const homeTab = document.getElementById('nav-home');
const aboutTab = document.getElementById('nav-about'); 
const servicesTab = document.getElementById('nav-services');
const experinceTab = document.getElementById('nav-experience');
const skillsTab = document.getElementById('nav-skills');
const educationTab = document.getElementById('nav-education');
const contactTab = document.getElementById('nav-contact');

const homeTabTxt = document.getElementById('txt-home-link');
const aboutTabTxt = document.getElementById('txt-about-link');
const servicesTabTxt = document.getElementById('txt-services-link');
const skillsTabTxt = document.getElementById('txt-skills-link');
const experinceTabTxt = document.getElementById('txt-experience-link');
const educationTabTxt = document.getElementById('txt-education-link');
const contactTabTxt = document.getElementById('txt-contact-link');

const homeSection = document.getElementById('home-section');

// Declare nav bars
const bars = document.getElementById('bars');
const times = document.getElementById('close');
const navBar = document.getElementById('nav-bar');

bars.addEventListener('click', () => {
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');
    navBar.classList.remove('hidden');
});

times.addEventListener('click', () => {
    bars.classList.toggle('hidden');
    times.classList.toggle('hidden');
    navBar.classList.add('hidden');
});

// activateHomeTab();

// homeTab.addEventListener('click', () => {
//     activateHomeTab();
//     deactivateAboutTab();
//     deactivateServicesTab();
//     deactivateSkillsTab();
//     deactivateEducationTab();
//     deactivateContactTab();
// });
// aboutTab.addEventListener('click', () => {
//     deactivateHomeTab();
//     activateAboutTab();
//     deactivateServicesTab();
//     deactivateSkillsTab();
//     deactivateEducationTab();
//     deactivateContactTab();
// });
// servicesTab.addEventListener('click', () => {
//     deactivateHomeTab();
//     deactivateAboutTab();
//     activateServicesTab();
//     deactivateSkillsTab();
//     deactivateEducationTab();
//     deactivateContactTab();
// });
// skillsTab.addEventListener('click', () => {
//     deactivateHomeTab();
//     deactivateAboutTab();
//     deactivateServicesTab();
//     activateSkillsTab();
//     deactivateEducationTab();
//     deactivateContactTab();
// });
// educationTab.addEventListener('click', () => {
//     deactivateHomeTab();
//     deactivateAboutTab();
//     deactivateServicesTab();
//     deactivateSkillsTab();
//     activateEducationTab();
//     deactivateContactTab();
// });
// contactTab.addEventListener('click', () => {
//     deactivateHomeTab();
//     deactivateAboutTab();
//     deactivateServicesTab();
//     deactivateSkillsTab();
//     deactivateEducationTab();
//     activateContactTab();
// });

function activateHomeTab() {
    homeTab.style.textTransform = 'uppercase';
    homeTab.style.fontWeight = '500';
    homeTab.style.justifyContent = 'end';
    homeTabTxt.style.backgroundColor = '#1F5673';
    homeTabTxt.style.color = 'aliceblue';
}
function activateAboutTab() {
    aboutTab.style.textTransform = 'uppercase';
    aboutTab.style.fontWeight = '500';
    aboutTab.style.justifyContent = 'end';
    aboutTabTxt.style.backgroundColor = '#1F5673';
    aboutTabTxt.style.color = 'aliceblue';
}
function activateSkillsTab() {
    skillsTab.style.textTransform = 'uppercase';
    skillsTab.style.fontWeight = '500';
    skillsTab.style.justifyContent = 'end';
    skillsTabTxt.style.backgroundColor = '#1F5673';
    skillsTabTxt.style.color = 'aliceblue';
}
function activateExperienceTab() {
    experinceTab.style.textTransform = 'uppercase';
    experinceTab.style.fontWeight = '500';
    experinceTab.style.justifyContent = 'end';
    experinceTab.style.backgroundColor = '#1F5673';
    experinceTab.style.color = 'aliceblue';
}
function activateServicesTab() {
    servicesTab.style.textTransform = 'uppercase';
    servicesTab.style.fontWeight = '500';
    servicesTab.style.justifyContent = 'end';
    servicesTabTxt.style.backgroundColor = '#1F5673';
    servicesTabTxt.style.color = 'aliceblue';
}
function activateEducationTab() {
    educationTab.style.textTransform = 'uppercase';
    educationTab.style.fontWeight = '500';
    educationTab.style.justifyContent = 'end';
    educationTabTxt.style.backgroundColor = '#1F5673';
    educationTabTxt.style.color = 'aliceblue';
}
function activateContactTab() {
    contactTab.style.textTransform = 'uppercase';
    contactTab.style.fontWeight = '500';
    contactTab.style.justifyContent = 'end';
    contactTabTxt.style.backgroundColor = '#1F5673';
    contactTabTxt.style.color = 'aliceblue';
}

function deactivateHomeTab() {
    homeTab.style.textTransform = 'capitalize';
    homeTab.style.fontWeight = '';
    homeTab.style.justifyContent = 'center';
    homeTabTxt.style.backgroundColor = 'transparent';
    homeTabTxt.style.color = '#1F5673';
}
function deactivateAboutTab() {
    aboutTab.style.textTransform = 'capitalize';
    aboutTab.style.fontWeight = '';
    aboutTab.style.justifyContent = 'center';
    aboutTabTxt.style.backgroundColor = 'transparent';
    aboutTabTxt.style.color = '#1F5673';
}
function deactivateServicesTab() {
    servicesTab.style.textTransform = 'capitalize';
    servicesTab.style.fontWeight = '';
    servicesTab.style.justifyContent = 'center';
    servicesTabTxt.style.backgroundColor = 'transparent';
    servicesTabTxt.style.color = '#1F5673';
}
function deactivateSkillsTab() {
    skillsTab.style.textTransform = 'capitalize';
    skillsTab.style.fontWeight = '';
    skillsTab.style.justifyContent = 'center';
    skillsTabTxt.style.backgroundColor = 'transparent';
    skillsTabTxt.style.color = '#1F5673';
}
function deactivateExperienceTab() {
    experinceTab.style.textTransform = 'capitalize';
    experinceTab.style.fontWeight = '';
    experinceTab.style.justifyContent = 'center';
    experinceTab.style.backgroundColor = 'transparent';
    experinceTab.style.color = '#1F5673';
}
function deactivateEducationTab() {
    educationTab.style.textTransform = 'capitalize';
    educationTab.style.fontWeight = '';
    educationTab.style.justifyContent = 'center';
    educationTabTxt.style.backgroundColor = 'transparent';
    educationTabTxt.style.color = '#1F5673';
}
function deactivateContactTab() {
    contactTab.style.textTransform = 'capitalize';
    contactTab.style.fontWeight = '';
    contactTab.style.justifyContent = 'center';
    contactTabTxt.style.backgroundColor = 'transparent';
    contactTabTxt.style.color = '#1F5673';
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const linksTxts = document.querySelectorAll('.link-txt');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const navLink = document.querySelector(`#nav-${entry.target.id}`);
        const navtxt = document.querySelector(`#txt-${entry.target.id}-link`)
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("nav-tab-active"));
            linksTxts.forEach(par => par.classList.remove("nav-txt-active"));
            navLink.classList.add("nav-tab-active");
            navtxt.classList.add("nav-txt-active");
        }
    });
}, {threshold: 0.7});

sections.forEach(section => observer.observe(section));

const element = document.getElementById('typewriter');
const words = ['websites', 'mobile apps', 'desktop apps'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const visibleText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  element.textContent = visibleText;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const typingSpeed = isDeleting ? 100 : 150;
  setTimeout(type, typingSpeed);
}

type();

// Skills implementation
const htmlProgressRing = document.getElementById('htmlProgressRing');
const htmlProgressValue = document.getElementById('htmlProgressValue');
const cssProgressRing = document.getElementById('cssProgressRing');
const cssProgressValue = document.getElementById('cssProgressValue');
const jsProgressRing = document.getElementById('jsProgressRing');
const jsProgressValue = document.getElementById('jsProgressValue');

let htmlProgress = 0;
let cssProgress = 0;
let jsProgress = 0;
const htmlTarget = 85; // target percentage
const cssTarget = 70; // target percentage
const jsTarget = 60; // target percentage
const speed = 20;  // smaller = faster

const interval = setInterval(() => {
    if (htmlProgress >= htmlTarget) {
    clearInterval(interval);
    } else {
    htmlProgress++;
    htmlProgressRing.style.background = `conic-gradient(#00aaff 0% ${htmlProgress}%, #e0e0e0 ${htmlProgress}% 100%)`;
    htmlProgressValue.textContent = `${htmlProgress}%`;
    }
}, speed);

const cssInterval = setInterval(() => {
    if (cssProgress >= cssTarget) {
    clearInterval(cssInterval);
    } else {
    cssProgress++;
    cssProgressRing.style.background = `conic-gradient(#00aaff 0% ${cssProgress}%, #e0e0e0 ${cssProgress}% 100%)`;
    cssProgressValue.textContent = `${cssProgress}%`;
    }
}, speed);

const jsInterval = setInterval(() => {
    if (jsProgress >= jsTarget) {
        clearInterval(jsInterval);
    } else {
        jsProgress++;
        jsProgressRing.style.background = `conic-gradient(#00aaff 0% ${jsProgress}%, #e0e0e0 ${jsProgress}% 100%)`;
        jsProgressValue.textContent = `${jsProgress}%`;
    }
}, speed);