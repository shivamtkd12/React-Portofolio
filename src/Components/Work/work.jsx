import React from "react";
import './work.css'
import Facebook from '../../img/Facebook.png'
import Upwork from '../../img/Upwork.png'
import Shopify from '../../img/Shopify.png'
import Amazon from '../../img/amazon.png'
import Fiverr from '../../img/fiverr.png'
import { useContext } from "react";
import { themeContext } from "../../context";

const Work = () => {

     const theme = useContext(themeContext);
          const darkMode = theme.state.darkMode;
          
    return (
        <div className="works">

            {/* left side */}
            <div className="about">
                <span style={{color: darkMode? 'white': ''}}>Work For These</span>
                <span>Company</span>
                
                <span style={{ textAlign: "justify" }}> I previously worked at Teleperformance in the Escalation Department. In this role, <br />I was responsible for managing and resolving complex customer issues <br /> that had been escalated beyond the regular support level. <br />This involved addressing sensitive cases, ensuring quick and effective solutions,<br /> and maintaining a high level of customer satisfaction. <br />I collaborated with both clients and internal teams to resolve concerns and improve service quality. </span>
                <button className='button e-button'>Hire Me </button>
                <div className="blur e-blur1" style={{ background: "var(--purple)", left: "-14rem", top:"-3rem"}}> </div>




            </div>


            {/* right side */}

            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt=""/>
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
            
                </div>
                <div className="blur" style={{background:"#C1F5FF", top: '23rem', width:'21rem',height:'15rem', left:'20rem' }}></div>

                {/* Background Circle */}

                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
        </div>
    )
}

export default Work