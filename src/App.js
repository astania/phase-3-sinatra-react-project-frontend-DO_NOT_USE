import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    backgroundColor: 'red'
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <div>
      <h1>Hello World</h1>
      <Button className={classes.button} variant="contained">Hey!</Button>
    </div>
  );
}

export default App;
