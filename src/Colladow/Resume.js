import React from 'react';
import styled from 'styled-components';

import jobDetails from './jobDetails';
import SectionTitle from './components/SectionTitle';
import Text from './components/Text';

const Job = styled.section`
  margin-top: ${props => props.theme.margin * 3}px;

  &:first-child {
    margin-top: 0;
  }
`;

const CompanyInfo = styled.div`
  position: relative;
`;

const JobTitle = styled.div`
  margin-top: ${props => props.theme.margin / 2}px;
`;

const Dates = styled(Text)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;

  @media screen and (max-width: 600px) {
    position: relative;
  }
`;

const Contribution = styled(Text)`
  margin-top: 0;
`;

const Container = styled.div`
  margin-top: ${props => props.theme.margin * 2}px;
`;

const Resume = () => (
  <React.Fragment>
    <SectionTitle>Work Experience</SectionTitle>

    <Container>
      {jobDetails.map(job => (
        <Job key={job.name}>
          <CompanyInfo>
            <Dates><strong>{job.dates}</strong></Dates>

            <Text><strong>{job.name},</strong> {job.location}</Text>
            <JobTitle><em>{job.title}</em></JobTitle>
          </CompanyInfo>

          <Text>{job.description}</Text>

          <div>
            <Text>Personal contributions include:</Text>

            <ul>
              {job.contributions.map((contrib, index) => (
                <li key={index}><Contribution>{contrib}</Contribution></li>
              ))}
            </ul>
          </div>
        </Job>
      ))}
    </Container>

    <SectionTitle>Education</SectionTitle>

    <Container>
      <CompanyInfo>
        <Dates><strong>2005 - 2009</strong></Dates>

        <Text>
          <strong>Polytechnic Institute of New York University,</strong>
          Brooklyn, NY
        </Text>
        <Text>Bachelor of Science in Computer Science</Text>
      </CompanyInfo>

      <ul>
        <li><Text>Cumulative GPA: 3.212</Text></li>
        <li><Text>Major GPA: 3.462</Text></li>
      </ul>
    </Container>
  </React.Fragment>
);

export default Resume;
