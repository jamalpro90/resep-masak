import './styles/App.scss';
import Header from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Latest from './components/Latest/Latest';
import Category from './components/Category/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Latest />
      <Category />
    </div>
  );
}

export default App;
