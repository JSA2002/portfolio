/* toggle icon navbar */
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/* scroll active class */
let sectionNav = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sectionNav.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
      });
    };
  })
}


/* about section */
let more = document.querySelector("#rmore");
let less = document.querySelector("#rless");

more.onclick = () => {
  document.querySelector("#readmore").style.display = "block";
  more.style.display = "none";
  less.style.display = "block"
}
less.onclick = () => {
  document.querySelector("#readmore").style.display = "none";
  more.style.display = "block";
  less.style.display = "none"
}

/* skills reload */
skillsClass = document.querySelectorAll(".skills-main .skills-bar .bar span");
const skillsArray = ['html', 'css', 'js', 'react', 'bootstrap', 'git', 'mongodb', 'node', 'linux','next'];
let i = 0;
window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;
  windowHeight = window.innerHeight;
  if (scrollPosition > windowHeight * 3) {
    skillsClass.forEach((sClass) => {
      sClass.classList.add(skillsArray[i++]);
      //skillsArray.shift();
    })
  }
});
