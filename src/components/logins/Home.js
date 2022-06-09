import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Restaurant Reservation World!</h1>
            <h2><em>Are you a:</em></h2>
            <Link to="/guests">Guest</Link> <Link to="/restaurants">Restaurant</Link>
        </div>
    )
}

export default Home