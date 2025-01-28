import React, { useState, useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    document.title = "Resume - John Brunson's Portfolio";
}, []);
  const [fileName, setFileName] = useState('Carlson_Brandon_Resume_Final.pdf'); // What file name should this save with?
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume/Carlson_Brandon_Resume_Final.pdf'; // Where is the file located?
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="container">
      <div className="row pt-1">
        <h1 className="lora-header">Resume</h1>
        <div className="container col-md-6 body-main pt-2 mt-3">
          <div className="resume">
            <h2 className="lora-header">Programming Knowledge</h2>
            <ul>
              <li className="raleway-body"><p class="fs-2">HTML</p></li>
              <li className="raleway-body"><p class="fs-2">CSS</p></li>
              <li className="raleway-body"><p class="fs-2">Javascript/Typescript</p></li>
              <li className="raleway-body"><p class="fs-2">SQL</p></li>
              <li className="raleway-body"><p class="fs-2">React</p></li>
              <li className="raleway-body"><p class="fs-2">NodeJS</p></li>
              <li className="raleway-body"><p class="fs-2">Servers/API's</p></li>
            </ul>
          </div>
        </div>
        <div className="container col-md-6 body-main pt-2 mt-3">
          <h2 className="lora-header">Other Skills & Expertise</h2>
          <ul>
            <li className="raleway-body">Transformative and results-oriented professional with 13+ years of success in sales and customer service leadership. Skilled in building strong client relationships, identifying unmet needs, and developing strategic solutions to exceed expectations. Proven ability to lead and motivate teams, fostering a positive and productive work environment that prioritizes customer satisfaction. Adept at problem-solving and exceeding goals in fast-paced environments. Seeking to leverage expertise in a challenging role that allows me to contribute to business growth. I have excelled in the following roles: </li>
            <li className="raleway-body"><p class="fw-bolder">Customer Relationship Management:</p>Building and maintaining strong client relationships to drive loyalty and satisfaction.</li>
            <li className="raleway-body"><p class="fw-bolder">Strategic Sales Management:</p> Developing and executing sales strategies to achieve revenue targets and exceed goals.</li>
            <li className="raleway-body"><p class="fw-bolder">Team Leadership & Development:</p> Coaching, motivating, and empowering teams to achieve high performance.</li>
            <li className="raleway-body"><p class="fw-bolder">Business Operations:</p> Managing all aspects of business operations, including HR, shipping, sales, and customer service.</li>
            <li className="raleway-body"><p class="fw-bolder">Leadership and Management:</p> Successfully led and managed teams of 25+ employees, handling all aspects of small business operations, including HR, shipping, sales, and customer service. </li>
          </ul>
        </div>

      
        <button className="btn btn-success" onClick={handleDownload}>Download My Resume!</button>

      </div>
    </div>

  )

}