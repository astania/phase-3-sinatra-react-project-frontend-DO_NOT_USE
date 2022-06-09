// import { Button, makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   button: {
//     backgroundColor: 'red'
//   }
// })

import Footer from './components/navigation/Footer';
import Header from './components/navigation/Header'
import LogInPage from './components/logins/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  // const classes = useStyles()
  return (
    <div>
      <Router>
        <Header />

    
        <Route exact path="/" element={<LogInPage />}>
          </Route>

  
          
      
        
      </Router>
      <Footer />
    </div>
  );
}

export default App;

/* <Button className={classes.button} variant="contained">Hey!</Button> */