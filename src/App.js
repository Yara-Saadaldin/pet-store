import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { PetsHomePage } from './components/pages/PetsHomePage';
import { ShoppingCartPage } from './components/pages/ShoppingCartPage';
import { PetDetailsPage} from './components/pages/PetDetailsPage'; 
import {LoginPage} from './components/pages/LoginPage/index'; 
import { NewPetPage } from './components/pages/NewPetPage/index';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <PetsHomePage />
        </Route>
        <Route path="/cart">
           <ShoppingCartPage />
        </Route>
        <Route path="/pet/:id">
          <PetDetailsPage />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/newPetPage">
          <NewPetPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;