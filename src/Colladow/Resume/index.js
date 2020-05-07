import React from 'react';

import jobDetails from './jobDetails';

const Resume = () => (
  <React.Fragment>
    <section>
      <h3>Work Experience</h3>

      {jobDetails.map(job => (
        <div key={job.name}>
          <p><strong>{job.name},</strong> {job.location}</p>
          <p><strong>{job.dates}</strong></p>

          <p><em>{job.title}</em></p>

          <p>{job.description}</p>

          <div>
            <p>Personal contributions include:</p>

            <ul>
              {job.contributions.map((contrib, index) => (
                <li key={index}>{contrib}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>

    <section>
      <h3>Education</h3>

      <div>
        <p><strong>2005 - 2009</strong></p>
        <p>
          <strong>Polytechnic Institute of New York University,</strong>
          Brooklyn, NY
        </p>
        <p>Bachelor of Science in Computer Science</p>

        <ul>
          <li>Cumulative GPA: 3.212</li>
          <li>Major GPA: 3.462</li>
        </ul>
      </div>
    </section>
  </React.Fragment>
);

export default Resume;
