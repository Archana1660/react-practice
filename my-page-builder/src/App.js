import { Header } from "./containers/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductList } from './containers/ProductList';
import { ProductDescription } from './containers/ProductDescription';



function App() {

  return (
    <div label="hi" className="App">
      <Router>
        <Header />
        <Switch>

          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDescription} />
          <Route>404</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
