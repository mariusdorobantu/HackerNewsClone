import RouterHandler from '../HackerNewsClone/router.js';

window.onhashchange = () => {
    setActiveLink();
  }
  
  function setActiveLink() {
     const links = document.querySelectorAll('.link--header');
     links.forEach(link => {
        const linkPath = link.getAttribute('href');
        const currentPath = window.location.hash;
        if (currentPath === linkPath) {
          link.classList.add('active');  
        } else {
          link.classList.remove('active');         
        }
     });
  }

class App {
    constructor() {
        new RouterHandler();
    }
}

new App();