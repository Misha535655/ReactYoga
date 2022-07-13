import "./style.css";
import {
  Header,
  Banner,
  Card,
  Footer,
  Image,
  Information,
  Programm,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Programm />
      <Image />
      <Information />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
