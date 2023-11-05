import { Router } from "./route.js";

const router = new Router();

router.addRoute('/', '/pages/home.html', 'background1.png');
router.addRoute('/exploitation', '/pages/exploitation.html', 'background3.png');
router.addRoute('/universe', '/pages/universe.html', 'background2.png');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();