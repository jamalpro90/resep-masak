import './styles/App.scss';
import Header from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Latest from './components/Latest/Latest';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Latest />
    </div>
  );
}

export default App;
