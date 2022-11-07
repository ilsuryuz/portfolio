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
          <img src='/projects/scap.png'></img>
          <p>
            A forum like website, were you can view various posts. Create an account and chat with users that are online. Create your own threads, and reply to other posts.
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/js.png' />
                JAVASCRIPT
              </li>
              <li>
                <img src='technologiesImg/nodejs.png' />
                EXPRESSJS
              </li>
              <li>
                <img src='technologiesImg/mongodb.png' />
                MONGODB
              </li>
              <li>
                <img src='technologiesImg/socketio.svg' />
                SOCKETIO
              </li>
              <li>
                <img src='technologiesImg/css3.png' />
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
          <img src='/projects/vibevoyage.png'></img>
          <p>
            This app was made in a team of four. VibeVoyage was made for users to leave kind notes to themselves with abilities to edit or delete them. Users can also relax with provided meditation and breathing videos.
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/mongodb.png' />
                MONGODB
              </li>
              <li>
                <img src='technologiesImg/nodejs.png' />
                EXPRESSJS
              </li>
              <li>
                <img src='technologiesImg/react.png' />
                REACT
              </li>
              <li>
                <img src='technologiesImg/nodejs.png' />
                NODEJS
              </li>
              <li>
                <img src='technologiesImg/css3.png' />
                CSS3
              </li>
            </ul>
          </div>
        </div>

        <div className='project-card'>
          <h2>KarMa</h2>
          <div className='card-links  flux'>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://vibe-voyage.netlify.app/">
              App
            </a>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://github.com/ilsuryuz/KarMa">
              GitHub
            </a>
          </div>
          <img src='/projects/karma.png'></img>
          <p>
          This is a social media app where people who like cars can post own cars as well as browse other peoples posts. I love cars especiallys the ones made in the 90 and was happy building this application with django! Enjoy!
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/python.png' />
                PYTHON
              </li>
              <li>
                <img src='technologiesImg/django.svg' />
                DJANGO
              </li>
              <li>
                <img src='technologiesImg/psql.png' />
                POSTGRESQL
              </li>
              <li>
                <img src='technologiesImg/materialize.png' />
                MATERIALIZE.CSS
              </li>
              <li>
                <img src='technologiesImg/aws.png' />
                AWS
              </li>
            </ul>
          </div>
        </div>

        <div className='project-card'>
          <h2>Game Info</h2>
          <div className='card-links  flux'>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://vibe-voyage.netlify.app/">
              App
            </a>
            <a className='' target="_blank" rel="noopener noreferrer" href="https://github.com/ilsuryuz/Game-Info">
              GitHub
            </a>
          </div>
          <img src='/projects/gameinfo.png'></img>
          <p>
            This was my first ever app built!
            This app is used as a little WIKI to find out information about characters, maps, weapons, in the game Valorant.
            I implemented AJAX calls from an API with data about the game which makes it possible to have a light-weight application.
          </p>
          <div>
            <ul className='tool-list'>
              <li>
                <img src='technologiesImg/js.png' />
                JAVASCRIPT
              </li>
              <li>
                <img src='technologiesImg/html5.png' />
                HTML5
              </li>
              <li>
                <img src='technologiesImg/css3.png' />
                CSS3
              </li>
              <li>
                <img src='technologiesImg/jquery.png' />
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