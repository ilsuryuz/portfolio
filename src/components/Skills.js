import React from 'react'
function Skills() {
    return (
        <section id='skills' className='skills'>
            <h2>Skills</h2>
            <hr />
            <div className='skills-content'>
                <ul className='list-skill'>
                    <li>
                        <img src='technologiesImg/js.png' alt='js' />
                        JAVASCRIPT
                    </li>
                    <li>
                        <img src='technologiesImg/html5.png' alt='html5'/>
                        HTML5
                    </li>
                    <li>
                        <img src='technologiesImg/css3.png' alt='css3'/>
                        CSS3
                    </li>
                    <li>
                        <img src='technologiesImg/python.png' alt='python'/>
                        PYTHON
                    </li>                             
                </ul>
                <ul className='list-skill'>
                    <li>
                        <img src='technologiesImg/nodejs.png' alt='nodejs'/>
                        NODE.JS
                    </li>
                    <li>
                        <img src='technologiesImg/nodejs.png' alt='expressjs'/>
                        EXPRESS.JS
                    </li>
                    <li>
                        <img src='technologiesImg/nodejs.png' alt='mongoose'/>
                        MONGOOSE
                    </li>
                    <li>
                        <img src='technologiesImg/mongodb.png' alt='mongodb'/>
                        MONGODB
                    </li>
                </ul>
                <ul className='list-skill'>
                    <li>
                        <img src='technologiesImg/react.png' alt='react'/>
                        REACT
                    </li>
                    <li>
                        <img src='technologiesImg/django.svg' alt='django'/>
                        DJANGO
                    </li>
                    <li>
                        <img src='technologiesImg/socketio.svg' alt='socketio'/>
                        SOCKET.IO
                    </li>
                    <li>
                        <img src='technologiesImg/jquery.png' alt='jquery'/>
                        JQUERY
                    </li>
                </ul>
                <ul className='list-skill'>
                    <li>
                        <img src='technologiesImg/psql.png' alt='postgresql'/>
                        POSTGRESQL
                    </li>
                    <li>
                        <img src='technologiesImg/firebase.png' alt='firebase'/>
                        FIREBASE
                    </li>
                    <li>
                        <img src='technologiesImg/git.png' alt='git'/>
                        GIT
                    </li>
                    <li>
                        <img src='technologiesImg/materialize.png' alt='materialize'/>
                        MATERIALIZE
                    </li>
                </ul>
            </div>
            <hr />
        </section>
    )
}

export default Skills