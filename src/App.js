import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';

import Clarifai from 'clarifai' 

const app = new Clarifai.App({
  apiKey: 'bc316471ceb64c05a67421253c62b34a'
})

const particlesOptions = {
         particles : {
           number : {
             value: 5,
             density : {
                enable: true,
                value_area: 100
             }
           },
           line_linked: {
             shadow: {
               enable: true,
               color: "#3CA9D1",
               blur: 5
             }
           }
         }                    
}


class App extends React.Component {

  constructor() {
      super();

      this.state = {
          input: '',
          imageUrl: ''

      }
  } 

  onInputChange = (event) => {
    this.setState({input: event.target.value})
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
                    this.state.input).then(

      function(response) {
          console.log(response)
      },
      function(err) {
        console.log(err)
      }
      
    );

    
  }

  render() {

    return (
      <div className="App">
        <Particles className = 'particles'
                  params={particlesOptions}
                  />

        <Navigation />
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange = {this.onInputChange} 
                  onButtonSubmit = {this.onButtonSubmit} />
        <FaceRecognition imageUrl = {this.state.imageUrl}/>

      </div>
    );
  }

}

export default App;
