import './styles/App.scss';
import Header from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Latest from './components/Latest/Latest';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Latest />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
