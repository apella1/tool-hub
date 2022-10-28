import { Search } from '../../components';
import './fixCitation.css';

const FixCitation = () => {
  return (
    <section className='citation'>
      <div className="citation__heading">
        <h4>In page <span>The effects of sleep on memory;</span></h4>
      </div>
      <p className="citation__text">
        Sleep is essential for maximum productivity and social well-being. When one has sufficient and quality sleep, the body is in an optimum state to carry out activities that are beneficial to learning and to the further extent memory. 
        Several activities have been known to enhance the quality of sleep such as avoiding exposure to bright light before sleep time, avoiding caffeine and alcohol before sleep time, and avoiding strenuous exercise before sleep time.
        However, the effects of sleep on memory have not been fully understood.
      </p>
      <a href='/'>Provide Citation</a>

      <div className="citation__buttons">
        <button className='citation__buttons--fix'>I can fix this!</button>
        <button className='citation__buttons--next'>View Next!</button>
      </div>

      <Search />
    </section>
  )
}

export default FixCitation;
