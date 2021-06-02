const routes = {
    "/login": { templateId: "login", title: "Bank App || Login" },
    "/dashboard": { templateId: "dashboard", title: "Bank App || Dashboard" }
  };
  
  function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];
  
    if (!route) {
      return navigate("/login");
    }
    document.title = route.title;
    if (route.templateId == "dashboard") {
    console.log('Dashboard is shown')
  }
    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById("app");
  
    app.innerHTML = "";
    app.appendChild(view);
  }
  
  function navigate(path) {
    let location = path;
    if (path.startsWith("/")) {
      location = window.location.origin + path
    }
    
    
    window.history.pushState({}, path, location);
    updateRoute();
  }
  
  function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
  }
  
  window.onpopstate = () => updateRoute();
  updateRoute();
  