import React from 'react'
import Tilt from 'react-tilt'
import logo_img from '../../img/logo.png'

const Logo = () => {
    return (
        <div className ='ma2 mt0'>
            <Tilt className="Tilt" options={{ max : 40 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner"> <img src = {logo_img} style = {{height: '120 px', width: '120px'}}></img> </div>
            </Tilt>

        </div>
    )
}

export default Logo;