import './search.css';

const Search = () => {
  return (
    <form className='search__form'>
      <h3>Search for a topic.</h3>
      <input type="text" placeholder='Dopamine receptors'/>
      <button>Search</button>
    </form>
  )
}

export default Search
