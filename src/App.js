import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
      {/* {

      <ImageLinkForm/>
      <FaceRecogntion/>} */}

    </div>
  );
}

export default App;
