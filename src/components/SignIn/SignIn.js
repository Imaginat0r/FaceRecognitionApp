import React from 'react'


const SignIn = ({onRouteChange}) => {
    return (
        <article className="mw5 center br3 pa3 pa4-ns mv6 ba b--black-10 shadow-5" >
            <main className="pa4 black-80">
                <form className="measure" style ={{color: '#2bbc8a'}}>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                    
                    </fieldset>
                    <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            style ={{color: '#2bbc8a'}}
                            onClick = {() => onRouteChange('home')}
                             value="Sign in"/>

                    </div>
                    <div className="lh-copy mt3">
                    <p onClick = {() => onRouteChange('register')} className="f6 link dim black db pointer" style ={{color: '#2bbc8a'}}>Register</p>
                   
                    </div>
                </form>
                </main>
            </article>

    )
}

export default SignIn;