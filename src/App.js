import './App.css';
import { Footer, Navbar } from './components';
import { FixCitation, Header } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <FixCitation />
      <Footer />
    </div>
  );
}

export default App;
