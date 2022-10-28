import './leaderboard.css';
import { Link } from 'react-router-dom';
import Female from '../../assets/female.jpg';
import Male from '../../assets/male.jpg';
import Footer from '../footer/Footer';
import handleClick7 from './LeaderboardPreview';
import { User } from '../../components';

const Leaderboard = () => {
  return (
    <section className='leaderboard'>
      <div className='navigation__links'>
        <Link to='/'>Home</Link>
        <Link to='/dashboard'>Dashboard</Link>
      </div>

      <h2>Leaderboard</h2>

      <div className="scores-period">
        <button onClick={handleClick7}>7 Days</button>
        <button>14 Days</button>
        <button>30 Days</button>
        <button>All Time Stats</button>
      </div>

      <div className="users">
        <p>
          <User 
           name='Carl Jung'
           score='32'
           profileImage={Male}
          />
        </p>
        <p>
          <User 
           name='Marjorie Oludhe'
           score='20'
           profileImage={Female}
          />
        </p>
        <p>
          <User 
           name='Peter Mukolo'
           score='17'
           profileImage={Male}
          />
        </p>
        <p>
          <User 
           name='Sarah Rodriguez'
           score='14'
           profileImage={Female}
          />
        </p>
        <p>
          <User 
           name='Michael Faraday'
           score='10'
           profileImage={Male}
          />
        </p>
        <p>
          <User 
           name='Elsa Okoye'
           score='7'
           profileImage={Female}
          />
        </p>
        <p>
          <User 
           name='Ignaz Semmelweis'
           score='6'
           profileImage={Male}
          />
        </p>
        <p>
          <User 
           name='Yvonne Wambui'
           score='5'
           profileImage={Female}
          />
        </p>
        <p>
          <User 
           name='Robert Greene'
           score='4'
           profileImage={Male}
          />
        </p>
        <p>
          <User 
           name='Luvvie Ajaiyi'
           score='3'
           profileImage={Female}
          />
        </p>
        <p>
          <User 
           name='Jomo Makeba'
           score='2'
           profileImage={Male}
          />
        </p>
        <p>
          <User 
           name='Diana Temple'
           score='1'
           profileImage={Female}
          />
        </p>
        
      </div>
      <Footer />
    </section>
  )
}

export default Leaderboard;
