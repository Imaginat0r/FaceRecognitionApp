import React from 'react'


class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            signInEmail: '',
            signInPassword: ''
        }

    }


    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value})
    }

    //Quand l'utilisateur clique sur Sign
    onSubmitSignIn = () => {
        //Par défaut fetch fait un GET request
        fetch('http://localhost:3000/signin', {
            method: 'post',
            //Il faut préciser le type de la requête
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:    this.state.signInEmail,
                password: this.state.signInPassword
            })
        }) 
          .then(response => response.json())  //D'abord on récupère la réponse
          .then(user => {
                if (user) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
          })  //Puis on prend la décision par rapport à cette réponse du serveur   
        
    }


    render() {
 

        return (
            <article className="mw5 center br3 pa3 pa4-ns mv6 ba b--black-10 shadow-5" >
                <main className="pa4 black-80">
                    <form className="measure" style ={{color: '#2bbc8a'}}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        
                        </fieldset>
                        <div className= "ba b--transparent ph0 mh0">
                            <label className="b center center ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"                                  
                                    style ={{color: '#2bbc8a', 'textAlign': 'center'}}
                                    onClick = {this.onSubmitSignIn}
                                    >Sign In</label>
                        </div>
                       
                    </form>
                    </main>
                </article>

        )

    };
}

export default SignIn;