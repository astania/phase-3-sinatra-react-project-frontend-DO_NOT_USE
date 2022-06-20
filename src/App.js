// import { Button, makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   button: {
//     backgroundColor: 'red'
//   }
// })
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/logins/Home'
import Footer from './components/navigation/Footer'
import Header from './components/navigation/Header'
import NavBar from './components/navigation/NavBar'
import GuestForm from './components/guestInfo/GuestForm'
import GuestCard from './components/guestInfo/GuestCard'
import GuestProfile from './components/guestInfo/GuestProfile'
import GuestLogInPage from './components/guestInfo/GuestLogInPage'
import ReservationForm from './components/reservationInfo/ReservationForm'
import ReservationCard from './components/reservationInfo/ReservationCard'
import ReservationList from './components/reservationInfo/ReservationList'
import RestaurantList from './components/restaurantInfo/RestaurantsList'
import RestaurantForm from './components/restaurantInfo/RestaurantForm'
import RestaurantCard from './components/restaurantInfo/RestaurantCard'
import RestaurantProfile from './components/restaurantInfo/RestaurantProfile'
import RestaurantLogInPage from './components/restaurantInfo/RestaurantLogInPage'

import RestaurantNavBar from './components/navigation/RestaurantNavBar'




const App = () => {
  // const classes = useStyles()
  return (
    <div>
      <Router>

        <Header slogan="Never wait for a table again!" storeName="Reservation World" />

        <Switch>

          <Route path="/guests/new">
            <GuestForm />
          </Route>

          <Route path="/restaurants/new">
            <RestaurantForm />
          </Route>

          <Route path="/restaurants/:id">
            <RestaurantCard />
          </Route>

          <Route path="/restaurants/profile">
            <RestaurantProfile />
          </Route>

          <Route path="/reservations/new">
            <ReservationForm />
          </Route>

          <Route path="/reservations/:id">
            <ReservationCard />
          </Route>

          <Route path="/guests/:id">
            <GuestCard />
            <GuestProfile />
          </Route>

          <Route path="/guests/reservations">
            <ReservationList />
          </Route>

          <Route path="/guests/profile">
            <GuestProfile />
          </Route>

          <Route path="/guests/restaurants">
            <RestaurantList />
          </Route>

          <Route exact path="/guests">
            <GuestLogInPage />
          </Route>

          <Route exact path="/restaurants">
            <RestaurantLogInPage />

          </Route>

          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>

          <Route path="*">
            {"404 Not Found"}
          </Route>


        </Switch>









      </Router>
      <Footer />
    </div>
  );
}

export default App;

/* <Button className={classes.button} variant="contained">Hey!</Button> */