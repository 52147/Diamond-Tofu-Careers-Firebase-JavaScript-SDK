import React from 'react'
import { Button } from "react-bootstrap";

export const Jobdes = () => {
  return (
    <section className="jobdes">
      <div className="container padding-top">
        <div className="text-black text-center">
          <h1>Full-Time Software Engineer</h1>
        </div>

        <div className=" text-black text-center">
          <h3>Responsibilities: </h3>
          <p>
            Participate in the development of software applications and systems
            under the direction of a project manager. Write code in one or more
            programming languages, such as Java, Python, C++, etc. Test and
            debug software to ensure its quality and reliability. Collaborate
            with cross-functional teams to understand requirements and provide
            solutions. Participate in code reviews and contribute to the
            development of best practices and standards Attend conferences and
            presentations to stay abreast of project progress and provide
            updates on work. Learn new technologies and programming languages to
            continuously improve your skills and knowledge. Note:
            Responsibilities may vary depending on the company, project, and
            level of experience.
          </p>
        </div>
        <div className="text-black text-center">
          <h3>Qualifications:</h3>
          <p>
            Currently pursuing a Bachelor's or Master's degree in Computer
            Science, Software Engineering, or a related field. Strong knowledge
            of one or more programming languages such as Java, Python, C++, etc.
            Good understanding of data structures, algorithms, and software
            development principles. Experience with software development tools
            such as Git, JIRA, etc. is a plus. Ability to work effectively in a
            team and communicate ideas clearly. Ability to learn quickly and
            adapt to new technologies and programming languages. Strong
            problem-solving skills and attention to detail. Passion for
            technology and software development.
          </p>
        </div>
        <div className="text-black text-center">
          <h3>Job Information:</h3>
          <p>
            Location: Boston, MA (Remote until further notice) Duration: 3-6
            months
          </p>
        </div>
        <div className="btnpadding btn-block ">
          <Button>Apply</Button>
        </div>
      </div>
    </section>
  );
}
