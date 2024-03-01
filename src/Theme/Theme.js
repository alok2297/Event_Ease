import CurrentTheme from "./Theme.json"
let pages
let routes = {}
const setTheme = () => {
  pages = CurrentTheme?.pages
  Object.keys(pages).map((r)=> {
    return routes[r] = {
      path: r,
      name: pages[r].title
    }
  })
}
setTheme()
export const getPageForRoute = (name) => {
    if (!routes[name]) return null;
    return pages[routes[name].path] || null;
  }

export const getRoutes = () => {
  console.log(routes);
    if (!routes) return null;
    return routes || null;
  }

export const getPage = (name) => {
    let page = getPageForRoute(name);
    if (page) {
      // create a copy
      page = { ...page };
      let { header, footer } = CurrentTheme;

      if (page.layout === "full") {
        page.structure = {
          body: page.child,
        };
      }
      else if (page.layout === "noHeader") {
        page.structure = {
          body: page.child,
          footer: footer.child,
        };
      }
      else if (page.layout === "noFooter") {
        page.structure = {
          header: header.child,
          body: page.child,
        };
      }
       else {
        header = header || {};

        footer = footer || {};

        page.structure = {
          header: header.child,
          body: page.child,
          footer: footer.child,
        };
      }
      delete page.child;
      return page;
    }
    return null;
  }