// import { Button, makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   button: {
//     backgroundColor: 'red'
//   }
// })
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/logins/home'
import Footer from './components/navigation/Footer'
import Header from './components/navigation/Header'
import NavBar from './components/navigation/NavBar'
import GuestForm from './components/guestInfo/GuestForm'
import GuestCard from './components/guestInfo/GuestCard'
import GuestProfile from './components/guestInfo/GuestProfile'
import ReservationForm from './components/reservationInfo/ReservationForm'
import ReservationCard from './components/reservationInfo/ReservationCard'
import ReservationList from './components/reservationInfo/ReservationList'
import RestaurantList from './components/restaurantInfo/RestaurantList'
import RestaurantForm from './components/restaurantInfo/RestaurantForm'
import RestaurantCard from './components/restaurantInfo/RestaurantCard'
import RestaurantProfile from './components/restaurantInfo/RestaurantProfile'




const App = () => {
  // const classes = useStyles()
  return (
    <div>
      <Router>
        <NavBar />
        <Header slogan="Never wait for a table again!" storeName="Reservation World" />

        <Switch>

          <Route exact path="/guest/new">
            <GuestForm />
          </Route>

          <Route exact path="/restaurant/new">
            <RestaurantForm />
          </Route>

          <Route exact path="/reservation/new">
            <ReservationForm />
          </Route>

          <Route exact path="/reservation/:id">
            <ReservationCard />
          </Route>

          <Route exact path="/restaurant/:id">
            <RestaurantCard />
          </Route>

          <Route exact path="/guest/:id">
            <GuestCard />
          </Route>

          <Route exact path="/restaurant/profile">
            <RestaurantProfile />
          </Route>

          <Route exact path="/guest/profile">
            <GuestProfile />
          </Route>

          <Route path="/*">
            {"404 Not Found"}
          </Route>
        
          <Route exact path="/">
            <Home />
          </Route>


        </Switch>









      </Router>
      <Footer />
    </div>
  );
}

export default App;

/* <Button className={classes.button} variant="contained">Hey!</Button> */