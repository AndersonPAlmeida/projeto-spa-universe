export class Router {
   routes = {}

   addRoute(routeName, page, background) {
      this.routes[routeName] = {page, background};
   } 

   route(href) {
      window.history.pushState({}, "", href);

      this.handle();
   }

   handle() { 
      const { pathname } = window.location;
      const route = this.routes[pathname];

      fetch(route.page)
      .then(data =>  data.text())
      .then(html => {
         document.querySelector('#app').innerHTML = html;
         document.body.style.backgroundImage = `url(../assets/${route.background})`;
      });
   }
}