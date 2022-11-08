import React from 'react'

function Projects() {
  return (
    <section id='projects' className='projects'>
      <h2>Showroom</h2>
      <hr />
      <div className='projects-content'>
        <div className='project-card'>
          <h2>Scap Forum</h2>
          <div className='card-links flux'>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://scap-forum.herokuapp.com/">
              App
            </a>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://github.com/ilsuryuz/Scap">
              GitHub
            </a>
          </div>
          <img src='/projects/scap.png' alt='scap'></img>
          <p>
            A forum like website, where you can view various posts. Create an account and chat with users that are online. Create your own threads, and reply to other posts.
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/js.png' alt='js' />
                JAVASCRIPT
              </li>
              <li>
                <img src='technologiesImg/nodejs.png' alt='expressjs'/>
                EXPRESSJS
              </li>
              <li>
                <img src='technologiesImg/mongodb.png' alt='mongodb'/>
                MONGODB
              </li>
              <li>
                <img src='technologiesImg/socketio.svg' alt='socketio'/>
                SOCKETIO
              </li>
              <li>
                <img src='technologiesImg/css3.png' alt='css3'/>
                CSS3
              </li>
            </ul>
          </div>
        </div>

        <div className='project-card'>
          <h2>VibeVoyage</h2>
          <div className='card-links  flux'>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://vibe-voyage.netlify.app/">
              App
            </a>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://github.com/ilsuryuz/VibeVoyage-frontend">
              GitHub
            </a>
          </div>
          <img src='/projects/vibevoyage.png' alt='vibevoyage'></img>
          <p>
            This app was made in a team of four. VibeVoyage was made for users to leave kind notes to themselves with abilities to edit or delete them. Users can also relax with provided meditation and breathing videos.
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/mongodb.png' alt='mongodb' />
                MONGODB
              </li>
              <li>
                <img src='technologiesImg/nodejs.png' alt='expressjs'/>
                EXPRESSJS
              </li>
              <li>
                <img src='technologiesImg/react.png' alt='react'/>
                REACT
              </li>
              <li>
                <img src='technologiesImg/nodejs.png' alt='nodejs'/>
                NODEJS
              </li>
              <li>
                <img src='technologiesImg/css3.png' alt='css3'/>
                CSS3
              </li>
            </ul>
          </div>
        </div>

        <div className='project-card'>
          <h2>KarMa</h2>
          <div className='card-links  flux'>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://karmasite.herokuapp.com/">
              App
            </a>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://github.com/ilsuryuz/KarMa">
              GitHub
            </a>
          </div>
          <img src='/projects/karma.png' alt='karma'></img>
          <p>
          This is a social media app where people who like cars can post own cars as well as browse other peoples posts. I love cars especiallys the ones made in the 90 and was happy building this application with django! Enjoy!
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/python.png' alt='python'/>
                PYTHON
              </li>
              <li>
                <img src='technologiesImg/django.svg' alt='django'/>
                DJANGO
              </li>
              <li>
                <img src='technologiesImg/psql.png' alt='postgresql'/>
                POSTGRESQL
              </li>
              <li>
                <img src='technologiesImg/materialize.png' alt='materializecss'/>
                MATERIALIZE.CSS
              </li>
              <li>
                <img src='technologiesImg/aws.png' alt='aws'/>
                AWS
              </li>
            </ul>
          </div>
        </div>

        <div className='project-card'>
          <h2>Game Info</h2>
          <div className='card-links  flux'>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://game-info-project.netlify.app/">
              App
            </a>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://github.com/ilsuryuz/Game-Info">
              GitHub
            </a>
          </div>
          <img src='/projects/gameinfo.png' alt='gameinfo'></img>
          <p>
            This was my first ever app built!
            This app is used as a little WIKI to find out information about characters, maps, weapons, in the game Valorant.
            I implemented AJAX calls from an API with data about the game which makes it possible to have a light-weight application.
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/js.png' alt='javascript'/>
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
                <img src='technologiesImg/jquery.png' alt='jquery'/>
                JQUERY
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default Projects