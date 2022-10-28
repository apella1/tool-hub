import './error.css';
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <>
    <p className='error-message'>
        404: Page not found.
    </p>
    <Link to='/'>Back Home</Link>
    </>
  )
}

export default Error