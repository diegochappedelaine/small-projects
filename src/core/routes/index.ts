type Route = {
  path: string;
  title: string;
};

type Routes = Route[];

export const homePageRoute = { title: 'Home', path: '/' };
export const binaryToDescRoute = {
  title: 'Binary To Descimal',
  path: '/bin-2-desc',
};

export const routes: Routes = [homePageRoute, binaryToDescRoute];

export const routesWithouthomePageRoute: Routes = routes.filter(
  (route) => route.path !== '/',
);
