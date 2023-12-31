import { Router } from "./route.js";

const router = new Router();
const links = document.querySelectorAll('a');

router.addRoute('/', '/pages/home.html', 'background1.png');
router.addRoute('/exploitation', '/pages/exploitation.html', 'background3.png');
router.addRoute('/universe', '/pages/universe.html', 'background2.png');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

links.forEach(link => {
   link.addEventListener('click', (event) => {
      event.preventDefault();
      removeActive();

      if (link.querySelector('img')) {
         link.parentElement.nextElementSibling.firstElementChild.classList.add('active');
      }
      else {
         link.classList.add('active');
      }
      router.route(link.getAttribute('href'));
   });
});

function removeActive() {
   document.querySelector('a.active').classList.remove('active');
}