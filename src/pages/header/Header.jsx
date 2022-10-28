import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <p>The following piece of text from Wikimedia has no <a href="/">reliable source.</a> Do you fancy yourself to provide one?</p>
      <p>Click <b>I can fix this!</b> to go to Wikimedia and <a href="/">fix the citation,</a> or <b>View next!</b> to view a different piece. Best of luck!</p>
    </div>
  )
}

export default Header