import React from 'react';
import '../Education/education.css';
import Study1 from '../../img/study.png'
import Degrees from '../Degrees/degree';
import Study2 from '../../img/amazon.png'
import Resume from '/Users/shivamtkd12/portfolio-starter/src/Components/Education/sf.pdf'
import { useContext } from 'react';
import { themeContext } from '../../context';

const Education = () => {

    const theme = useContext(themeContext);
              const darkMode = theme.state.darkMode;
              
    return (

        <div className="education">


            {/* left side */}
            <div className="about">
                <span style={{color: darkMode? 'white': ''}} >My </span>
                <span>Quallification</span>
                <span style={{ textAlign: "justify" }}> "I completed my schooling under the Bihar Board,followed by a Bachelor's degree <br />
                    in Computer Applications (BCA) from MMHAPU Patna. Subsequently,
                    I earned my <br /> Master's degree in Computer Applications (MCA)
                    from Chandigarh University." </span>

                    <a href={Resume} download>
                    <button className='button e-button'>Download CV </button>

                    </a>
                
            </div>



            {/* // right side */}

            <div className="degrees">

                {/* 1st card  */}
                <div style={{ left: '12rem' }}>
                    <Degrees
                        emoji={Study1}
                        heading={'MCA'}
                        detail={'Chandigarh University'}
                    />
                
                </div>
                

                {/* 2nd card */}

                <div style={{top: "12rem" , left: "-8rem"}}>
                    <Degrees
                    emoji={Study1}
                    heading={'BCA'}
                    detail={'MMHAPU'}
                    
                
                    />
                                <div className="blur e-blur1" style={{background : "var(--purple)"}}> </div>

                </div>

                {/* 3rd card */}
                <div style={{top: "20rem" , left: "10rem"}}>

                    <Degrees
                    emoji={Study1}
                    heading={'10th & 12th'}
                    detail={'BSEB'}
                    />
                    <div className="blur e-blur2" style={{background : "#bfffff"}}> </div>
                </div>

                

            </div>


        </div>


    )
}

export default Education;