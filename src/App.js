import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai' 
import Key from './API_Key.js'

const app = Key;

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
          imageUrl: '',
          box: {},
          // Le route permet de localiser où nous sommes sur la page
          route: 'signin',
          isSignedIn : false,
          user: {
            id: '',
            name: '',
            email: '',
            entries: 0,
            joined: ''
          }
      }
  } 


  
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }
  

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
        leftCol : clarifaiFace.left_col*width,
        topRow: clarifaiFace.top_row*height,
        bottomRow : height - (clarifaiFace.bottom_row*height),
        rightCol : width - (clarifaiFace.right_col*width),
    }
    
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})    
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    
    app.models
              .predict(Clarifai.FACE_DETECT_MODEL,
                    this.state.input)
                    .then( response => {
                      if (response) {
                        fetch('http://localhost:3000/image', {
                          method: 'put',
                          //Il faut préciser le type de la requête
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify({
                              //Le serveur n'a besoin que de l'ID de l'utilisateur
                              id:  this.state.user.id
                          })

                        })
                        .then(response => response.json()) //On déchiffre la réponse
                        .then(count => {
                          //On actualise seulement la propriété entries de l'objet user
                          this.setState(Object.assign(this.state.user, {entries: count}))
                        })      
                    }
                      this.displayFaceBox(this.calculateFaceLocation(response))
                  }).catch( err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
       this.setState({isSignedIn: false})   
    } else if (route === 'home') {
        this.setState({isSignedIn: true})
    }
    
    this.setState({route: route});    
  }

  render() {
    
    const {isSignedIn, imageUrl, route, box, user} = this.state;

    return (
      <div className="App">
        <Particles className = 'particles'
                  params={particlesOptions}
                  />

        <Navigation isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange} />
        {route === 'home' ?    
                <div>
                    <Logo/>
                    <Rank name = {user.name} entries = {user.entries} />
                    <ImageLinkForm onInputChange = {this.onInputChange} 
                              onButtonSubmit = {this.onButtonSubmit} />
                    <FaceRecognition box = {box} imageUrl = {imageUrl}/>
                </div>             
              : (
                route === 'signin' ?              
               <SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange} />
               :
               <Register loadUser={this.loadUser} onRouteChange = {this.onRouteChange} />
               )

           }
      </div>
    );
  }

}

export default App;
