import React from 'react'
import Typewriter from 'typewriter-effect'
import { Carousel } from '3d-react-carousal'
import { IonIcon } from '@ionic/react'
import { logoGithub, logoLinkedin, idCard, fileTrayStacked, codeWorking, caretUpCircle } from 'ionicons/icons'
function Header() {
    let slides = [
        <img className="profile" src="1.png" alt="1" />,
        <img className="profile" src="3.png" alt='2' />,
        <img className="profile" src="4.png" alt="3" />,
        <img className="profile" src="2.png" alt="4" />,];
    return (
        <header>
            <div className='profile-content flux'>
                <h1 id='totop' className='neonFont'>Ilsur Yuzlikeyev</h1>
                <div className='pc-grid'>
                    <div className='logo'>
                        <a className='logo-header logo-github' target="_blank" rel="noopener noreferrer" href="https://github.com/ilsuryuz">
                            <IonIcon icon={logoGithub} />
                            <span>GitHub</span>
                        </a>
                    </div>
                    <div className='carousel'>
                        <Carousel slides={slides} autoplay={true} interval={5000} arrows={false} />
                    </div>
                    <div className='logo'>
                        <a className='logo-header logo-github' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ilsuryuz">
                            <IonIcon icon={logoLinkedin} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
                <Typewriter 
                    options={{ loop: true }}
                    onInit={(typewriter) => {

                        typewriter
                            .typeString("I'm a Full-stack Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I'm multi-langual")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I'm a car enthusiast")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I  L O V E CODING <3")
                            .start();
                    }}
                />
            </div>
            <hr />
            <nav>
                <ul>
                    <li>
                        <IonIcon icon={caretUpCircle} />
                        <a href='#totop'>To Top</a>
                    </li>
                    <li>
                        <IonIcon icon={idCard} />
                        <a href='#about'>About Me</a>
                    </li>
                    <li>
                        <IonIcon icon={fileTrayStacked} />
                        <a href='#skills'>Skills</a></li>
                    <li>
                        <IonIcon icon={codeWorking} />
                        Projects
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header