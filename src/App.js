import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Sidenavbar from "./components/Sidenavbar/Sidenavbar";
import CarouselBox from "./components/CarouselBox/CarouselBox";
import Chat from "./components/Chat/Chat";
import Tabs from "./components/Tabs/Tabs";

export default function App() {
  return (
    <div className="App">
      <div className="headerBox">
        <Navbar />
      </div>

      <div className="sidenavCarousel">
        <div>
          <Sidenavbar />
          <Chat />
        </div>
        <div>
          <CarouselBox />
          <Tabs/>
        </div>
      </div>
        
      <div>
        
        
      </div>
    </div>
  );
}
