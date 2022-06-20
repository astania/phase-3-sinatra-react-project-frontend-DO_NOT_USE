import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            {/* <div><img src={window.location.origin + "/Images/homePageBackground.jpg"} alt="A fancy restaurant interior"></img></div> */}
            <h1>Welcome to Restaurant Reservation World!</h1>
            <p>Book your restaurant reservations with confidence!</p>
            <h2><em>Are you a:</em></h2>
            <Link to="/guests/new">Guest</Link> <Link to="/restaurants/new">Restaurant</Link>
        </div>
    )
}



export default Home