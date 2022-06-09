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
import ReservationForm from './components/reservationInfo/ReservationForm'
import ReservationCard from './components/reservationInfo/ReservationCard'
import ReservationList from './components/reservationInfo/ReservationList'
import RestaurantList from './components/restaurantInfo/RestaurantsList'
import RestaurantForm from './components/restaurantInfo/RestaurantForm'
import RestaurantCard from './components/restaurantInfo/RestaurantCard'
import RestaurantProfile from './components/restaurantInfo/RestaurantProfile'
import GuestNavBar from './components/navigation/GuestNavBar'
import RestaurantNavBar from './components/navigation/RestaurantNavBar'




const App = () => {
  // const classes = useStyles()
  return (
    <div>
      <Router>

        <Header slogan="Never wait for a table again!" storeName="Reservation World" />

        <Switch>

          <Route path="/guests/new">
            <GuestNavBar />
            <GuestForm />
          </Route>

          <Route path="/restaurants/new">
            <RestaurantNavBar />
            <RestaurantForm />
          </Route>

          <Route path="/reservations/new">
            <GuestNavBar />
            <ReservationForm />
          </Route>

          <Route path="/reservation/:id">
            <GuestNavBar />
            <ReservationCard />
          </Route>

          <Route path="/restaurant/:id">
            <GuestNavBar />
            <RestaurantCard />
          </Route>

          <Route path="/guest/:id">
            <GuestCard />
          </Route>

          <Route  path="/restaurant/profile">
            <GuestNavBar />
            <RestaurantProfile />
          </Route>

          <Route path="/guest/profile">
          <GuestNavBar />
            <GuestProfile />
          </Route>

          <Route path="/restaurants">
          <GuestNavBar />
            <RestaurantList />
          </Route>

          <Route path="/guest/reservations">
          <GuestNavBar />
            <ReservationList />
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