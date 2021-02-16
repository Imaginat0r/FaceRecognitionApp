import React from 'react'


class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '', 
            password: '',
            name: ''
        }

    }


onNameChange = (event) => {
    this.setState({name: event.target.value})
}

onEmailChange = (event) => {
    this.setState({email: event.target.value})
}

onPasswordChange = (event) => {
    this.setState({password: event.target.value})
}


//Quand l'utilisateur s'incrit
onRegister = () => {
        //Par défaut fetch fait un GET request
        fetch('http://localhost:3000/register', {
            method: 'post',
            //Il faut préciser le type de la requête
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:     this.state.name,
                email:    this.state.email,
                password: this.state.password
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
                    <div className="measure" style ={{color: '#2bbc8a'}}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input onChange = {this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange = {this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        
                        </fieldset>
                        <div className="" >
                            <label className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"                                
                                    style ={{color: '#2bbc8a'}}
                                    onClick = {this.onRegister}
                                     >Register</label>
                        </div>
                        
                    </div>
                    </main>
                </article>

        )

    }
}

export default Register;