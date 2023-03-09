import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Jobdes = ({ setTitle}) => {
  console.log(setTitle);
  let jobTitle = "";
  let jobDescription = "";
  let jobDuration = "";
  let jobQualifications = "";

  if (setTitle === "internship-software-engineer") {
    jobTitle = "Internship Software Engineer";
    jobDescription = "Participate in the development of software applications and systems under the direction of a project manager. Write code in one or more programming languages, such as Java, Python, C++, etc. Test and debug software to ensure its quality and reliability. Collaborate with cross-functional teams to understand requirements and provide solutions. Participate in code reviews and contribute to the development of best practices and standards Attend conferences and presentations to stay abreast of project progress and provide updates on work. Learn new technologies and programming languages to continuously improve your skills and knowledge. Note: Responsibilities may vary depending on the company, project, and level of experience.";
    jobQualifications = "Currently pursuing a Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field. Strong knowledge of one or more programming languages such as Java, Python, C++, etc.    Good understanding of data structures, algorithms, and software development principles.     Experience with software development tools such as Git, JIRA, etc. is a plus.    Ability to work effectively in a team and communicate ideas clearly.     Ability to learn quickly and adapt to new technologies and programming languages.     Strong problem-solving skills and attention to detail.     Passion for technology and software development.";
    jobDuration = "3-6 months";
  } else if (setTitle === "internship-data-scientist") {
    jobTitle = "Internship Data Scientist";
    jobDescription = "Participate in data collection, analysis and interpretation activities to help drive decision-making in an organization. Work with large datasets and use statistical and machine learning techniques to extract insights and create predictive models. Collaborate with cross-functional teams to understand requirements and provide solutions. Attend conferences and presentations to stay abreast of project progress and provide updates on work. Learn new technologies and programming languages to continuously improve your skills and knowledge. Note: Responsibilities may vary depending on the company, project, and level of experience.";
    jobQualifications = "Currently pursuing a Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field. Strong knowledge of one or more programming languages such as Java, Python, C++, etc.    Good understanding of data structures, algorithms, and software development principles.     Experience with software development tools such as Git, JIRA, etc. is a plus.    Ability to work effectively in a team and communicate ideas clearly.     Ability to learn quickly and adapt to new technologies and programming languages.     Strong problem-solving skills and attention to detail.     Passion for technology and software development.";
    jobDuration = "4-6 months";
  } else if (setTitle === "internship-project-manager") {
    jobTitle = "Internship Project Manager";
    jobDescription = "Assist in planning and allocating resources, preparing budgets, monitoring progress, and keeping stakeholders informed throughout the project lifecycle. Collaborate with cross-functional teams to understand requirements and provide solutions. Participate in project meetings and contribute to the development of best practices and standards Attend conferences and presentations to stay abreast of project progress and provide updates on work. Learn new technologies and project management methodologies to continuously improve your skills and knowledge. Note: Responsibilities may vary depending on the company, project, and level of experience.";
    jobQualifications = "Currently pursuing a Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field. Strong knowledge of one or more programming languages such as Java, Python, C++, etc.    Good understanding of data structures, algorithms, and software development principles.     Experience with software development tools such as Git, JIRA, etc. is a plus.    Ability to work effectively in a team and communicate ideas clearly.     Ability to learn quickly and adapt to new technologies and programming languages.     Strong problem-solving skills and attention to detail.     Passion for technology and software development.";
    jobDuration = "6-9 months";
  }  else if (setTitle === "full-time-software-engineer") {
    jobTitle = "Full-Time Software Engineer";
    jobDescription = "Assist in planning and allocating resources, preparing budgets, monitoring progress, and keeping stakeholders informed throughout the project lifecycle. Collaborate with cross-functional teams to understand requirements and provide solutions. Participate in project meetings and contribute to the development of best practices and standards Attend conferences and presentations to stay abreast of project progress and provide updates on work. Learn new technologies and project management methodologies to continuously improve your skills and knowledge. Note: Responsibilities may vary depending on the company, project, and level of experience.";
    jobQualifications = "Currently pursuing a Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field. Strong knowledge of one or more programming languages such as Java, Python, C++, etc.    Good understanding of data structures, algorithms, and software development principles.     Experience with software development tools such as Git, JIRA, etc. is a plus.    Ability to work effectively in a team and communicate ideas clearly.     Ability to learn quickly and adapt to new technologies and programming languages.     Strong problem-solving skills and attention to detail.     Passion for technology and software development.";
    jobDuration = "6-9 months";
  }  else if (setTitle === "full-time-data-scientist") {
    jobTitle = "Full-Time Data Scientist";
    jobDescription = "Assist in planning and allocating resources, preparing budgets, monitoring progress, and keeping stakeholders informed throughout the project lifecycle. Collaborate with cross-functional teams to understand requirements and provide solutions. Participate in project meetings and contribute to the development of best practices and standards Attend conferences and presentations to stay abreast of project progress and provide updates on work. Learn new technologies and project management methodologies to continuously improve your skills and knowledge. Note: Responsibilities may vary depending on the company, project, and level of experience.";
    jobQualifications = "Currently pursuing a Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field. Strong knowledge of one or more programming languages such as Java, Python, C++, etc.    Good understanding of data structures, algorithms, and software development principles.     Experience with software development tools such as Git, JIRA, etc. is a plus.    Ability to work effectively in a team and communicate ideas clearly.     Ability to learn quickly and adapt to new technologies and programming languages.     Strong problem-solving skills and attention to detail.     Passion for technology and software development.";
    jobDuration = "6-9 months";
  }  else if (setTitle === "full-time-project-manager") {
    jobTitle = "Full-Time Project Manager";
    jobDescription = "Assist in planning and allocating resources, preparing budgets, monitoring progress, and keeping stakeholders informed throughout the project lifecycle. Collaborate with cross-functional teams to understand requirements and provide solutions. Participate in project meetings and contribute to the development of best practices and standards Attend conferences and presentations to stay abreast of project progress and provide updates on work. Learn new technologies and project management methodologies to continuously improve your skills and knowledge. Note: Responsibilities may vary depending on the company, project, and level of experience.";
    jobQualifications = "Currently pursuing a Bachelor's or Master's degree in Computer Science, Software Engineering, or a related field. Strong knowledge of one or more programming languages such as Java, Python, C++, etc.    Good understanding of data structures, algorithms, and software development principles.     Experience with software development tools such as Git, JIRA, etc. is a plus.    Ability to work effectively in a team and communicate ideas clearly.     Ability to learn quickly and adapt to new technologies and programming languages.     Strong problem-solving skills and attention to detail.     Passion for technology and software development.";
    jobDuration = "6-9 months";
  }

  return (
    <>
    <section className="jobdes">
      <div className="container">
        <div className="px-9 pt-9 pb-9">
          <div className="text-center text-violet-700">
            <h1>{jobTitle}</h1>
          </div>
          <br />
          <div className=" text-black text-left text-violet-700">
            <h3>Responsibilities: </h3>
            <br />
            <p className="pl-1.5">{jobDescription}</p>
            <br />
          </div>
          <div className=" text-black text-left text-violet-700">
            <h3>Qualifications: </h3>
            <br />
            <p className="pl-1.5">{jobDescription}</p>
            <br />
          </div>
          <div className="text-black text-left">
            <h3>Job Information:</h3>
            <br />
            <p>Location: Boston, MA (Remote until further notice) Duration: {jobDuration}</p>
          </div>
          <br />
          <div className="btnpadding btn-block ">
            <Button onClick={() => {
                        window.location.replace(`/form`);
                      }}>Apply</Button>
          </div>
        </div>
        </div>
        </section>
        </>)
        };











