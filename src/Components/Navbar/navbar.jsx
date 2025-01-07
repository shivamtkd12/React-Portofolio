import React from 'react'
import '../Navbar/navbar.css'
import Toggle from '../Toggle/Toggle'


const Navbar=() => {
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Shivam</div>
                <Toggle/>
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Education</li>
                        <li>Skills</li>
                        <li>Work</li>
                        <li>Portfolio</li>
                        </ul>
                </div>
                <button className='button n-button'>
                    Contact 
                </button>
            </div>
        </div>
    )
}

export default Navbar