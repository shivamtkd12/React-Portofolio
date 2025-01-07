import React from 'react'
import '../Intro/Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Victor1 from '../../img/Vector1.png'
import Victor2 from '../../img/Vector2.png'
import Mypic from '../../img/mypic3.png'
import Crown from '../../img/crown.png'
import Thumb from '../../img/thumbup.png'

import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/floatingdiv'

import { themeContext } from '../../context'
import { useContext } from 'react'

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="i-left">

                <div className="i-name">
                    <span style={{ color : darkMode? 'white' :''}}>Hi! I Am</span>
                    <span>Shivam</span>
                    <span>Seeking an opportunity in the field of software engineering. Good
                        knowledge of JAVA, Python, Automation Tools, Cloud and DevOps.
                    </span>
                </div>
                <button className="button i-button" >Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/shivamtkd12"> <img src={Github} alt="" /> </a>
                    <a href="https://www.linkedin.com/in/shivam-kumar-srivastava-913519249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> <img src={Linkedin} alt="" /></a>

                    <a href="https://www.instagram.com/srivastava_shivam12?igsh=MmU2ZXgzZWdyZDNt&utm_source=qr"><img src={Instagram} alt="" /></a>
                </div>
            </div>

            <div className="i-right">

                <img src={Victor1} alt="" />
                <img src={Victor2} alt="" />
                <img className="mypic" src={Mypic} alt="" />
                <img src={glassesimoji} alt="" />
                <div className="floatingdiv1">
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer ' />
                </div>
                <div className="floatingdiv2">
                    <FloatingDiv image={Thumb} txt1='Best Design' txt2='Award' />
                </div>

                <div className="blur" style={{background : "rgb(238 210 255)"}}>

                </div>

                <div className="blur" style={{background:"#C1F5FF", top: '17rem', width:'21rem',height:'15rem', left:'-14rem' }}>

                </div>



            </div>

        </div>
    )
}

export default Intro