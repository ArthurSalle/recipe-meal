import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealList from '../views/MealList';
import CategoryList from '../views/CategoryList';

const MainRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={MealList} />
          <Route exact path='/meat' component={CategoryList} />
          <Route exact path='/fish' component={CategoryList} />
          <Route exact path='/veggie' component={CategoryList} />
        </Switch>
      </Router>
    </div>
  );
};

export default MainRouter;
