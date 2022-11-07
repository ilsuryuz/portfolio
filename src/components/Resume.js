import React from 'react'
const Resume = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('IlsurYuzlikeyev.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'IlsurYuzlikeyev.pdf';
        alink.click();
      })
    })
  }
  return (
    <section id='resume' className='resume'>
        <h2>Resume</h2>
        <hr />

        <div className='resume-content'>
            <h3>Click the button to download my resume in .pdf format</h3>
            <button onClick={onButtonClick} className='download'>
                Download PDF
            </button>
        </div>
    </section>
  )
}

export default Resume