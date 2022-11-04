import React from 'react'
import Typewriter from 'typewriter-effect'
import {Carousel} from '3d-react-carousal'
function Header() {
    let slides = [
        <img  className="profile"src="1.png" alt="1" />,
        <img className="profile" src="3.png" alt='2'/>,
        <img  className="profile"src="4.png" alt="3" />,
        <img  className="profile"src="2.png" alt="4" />,   ];
    return (
        <header>
            <div className='profile-content'>
                <h1>Ilsur Yuzlikeyev</h1>
                <div className='carousel'>
                <Carousel slides={slides} autoplay={true} interval={5000} arrows={false} />
                </div>
                <Typewriter
                    options={{loop: true}}
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
            <nav>
                <ul>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li>Projects</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header