import './App.css';
import { Carousel } from './components/Carousel';
import { CarouselData } from './components/Carousel/CarouselData';

function App() {
  return (
    <div className="container">
      <Carousel images={CarouselData} />
    </div>
  );
}

export default App;
