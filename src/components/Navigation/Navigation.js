import React from 'react'


const Navigation = () => {
    return (
        <nav style = {{display: 'flex', justifyContent:'flex-end', paddingRight: '20px'}}>
            <p className= 'f3 link dim black underline pa3 pointer' style = {{color: '#2bbc8a'}}> Sign Out</p>
        </nav>
    )
}

export default Navigation;