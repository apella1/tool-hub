import './dashboard.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <div className='navigation__links'>
                <Link to='/'>Home</Link>
                <Link to='/leaderboard'>Leaderboard</Link>
            </div>

            <div className="dashboard__items">
                <p>Total number of tools in the records: <span>3</span></p>
                <p>Number of tools with missing information: <span>3</span></p>
                <p>Percentage of tools with missing information compared with the total number of tools in the records: <span>40%</span></p>
                <p>Number of tools edited using this record management tool: <span>2</span></p>
            </div>
            <Footer />
    </section>
    )
}

export default Dashboard;

// todo how to write tests for the react components 