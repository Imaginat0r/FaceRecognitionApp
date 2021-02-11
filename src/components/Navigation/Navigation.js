import React from 'react'

// Pour le onClick, on ne veut pas directement appeler la fonction, on utilise ainsi une arrow function

const Navigation = ({onRouteChange, isSignedIn}) => {
    
        if (isSignedIn){
            return(
            <nav style = {{display: 'flex', justifyContent:'flex-end', paddingRight: '20px'}}>
                <p onClick = {() => onRouteChange('signout')} lassName= 'f3 link dim black underline pa3 pointer' style = {{color: '#2bbc8a', cursor:'pointer'}}> Sign Out</p>
            </nav>)
        } else {
            return (
               
            <nav style = {{display: 'flex', justifyContent:'flex-end', paddingRight: '20px'}}>
                <p onClick = {() => onRouteChange('signin')} lassName= 'f3 link dim black underline pa3 pointer' style = {{color: '#2bbc8a', cursor:'pointer'}}> Sign In</p>
                <p onClick = {() => onRouteChange('register')} lassName= 'f3 link dim black underline pa3 pointer' style = {{color: '#2bbc8a', cursor:'pointer'}}> Register</p>
            </nav> 
            )
        }
        
    
}

export default Navigation;