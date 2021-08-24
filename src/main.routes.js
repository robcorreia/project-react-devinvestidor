import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import DashboardRoutes from 'modules/dashboard/dashboard.routes';
import TasksRoutes from 'modules/tasks/tasks.routes';
import UsersRoutes from 'modules/users/users.routes';

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/tarefas">Tarefas</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuários</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard" component={DashboardRoutes} />
          <Route path="/tarefas" component={TasksRoutes} />
          <Route path="/usuarios" component={UsersRoutes} />

          <Redirect to="/dashboard" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default MainRoutes;
