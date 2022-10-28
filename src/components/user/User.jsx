import './user.css';

const User = ({name, profileImage, score}) => {
    return (
      <div className='user__info'>
        <img src={profileImage} alt="profile" />
        <h3>{name}</h3>
        <p>{score}</p>
      </div>
    )
  }

export default User;
