import Counter from '../Counter';
import Github from '../Github';

const routes = [
  {
    name: 'counter',
    path: '/',
    component: Counter,
    exact: true
  },
  {
    name: 'github.repos',
    path: '/github/repos',
    component: Github,
    exact: true
  }
];

function routePath(name, args = null) {
  let route = routes.find(route => route.name === name);

  if (route === undefined) return '';
  if (args === null) return route.path;

  return Object.keys(args).reduce(
    (path, arg) => path.replace(':' + arg, args[arg]),
    route.path
  );
}

export default routes;

export { routePath };
