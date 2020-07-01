import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Movie from './components/movie';
import Customer from './components/customer';
import Rental from './components/rental';
import MovieDetail from './components/movieDetail';
import LoginForm from './components/loginForm';
import MovieForm from './components/movieForm';
import RegisterForm from './components/registerForm';
import NotFound from './components/notFound';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import NavBar from './components/navBar';
import User from './components/user';
import './App.css';




function App() {
  return (
    <div>
      <User />
    </div>






    // <React.Fragment>
    //   < NavBar />
    //   <main className="container" style={{ marginTop: 15 }}>
    //     <Switch>
    //       <Route path="/rentals" component={Rental} />
    //       <Route path="/customers" component={Customer}></Route>
    //       <Route path="/not-found" component={NotFound}></Route>
    //       <Route path="/movies" exact component={MovieDetail}></Route>
    //       <Route path="/movies/add" exact component={MovieForm} />
    //       {/* <Route path="/movies/new" exact component={MovieForm} /> */}
    //       <Route path="/" exact component={Movie} />
    //       <Route path="/register" component={RegisterForm} />
    //       <Route path="/login" component={LoginForm} />
    //       <Redirect to="/not-found" />
    //     </Switch>
    //   </main >

    // </React.Fragment>
  );
}

export default App;
