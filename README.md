![ci-badge](https://github.com/ics-software-engineering/meteor-application-template-react/workflows/ci-meteor-application-template-react/badge.svg)

For installation details, please see http://ics-software-engineering.github.io/meteor-application-template-react/

We have established an agile developmental process using a Kanban Board
For more details please see https://github.com/KWong41/LocalKineGrinds/projects/1

Project online repository:
https://github.com/KWong41/LocalKineGrinds

Project wiki page:
https://github.com/KWong41/LocalKineGrinds/wiki

Team Members:

Kevin Wong - Front-End / Back-End development

John Bigornia - Project Management Developmental Cycle / Tester / Test Case logger

Calvan Liang - README.md / Wikipage documentation / Tester / Test Case logger

Ryota Seki - Project Management Developmental Cycle / Project Architecture / Tester / Test Case logger

**(02/21/2021 - 03/21/2021) UPDATE**

**Progress**: Decided on the project concept on being a dating-app that connects users based on their anime preferences. Implemented basically funtionality similar to the typical dating app.  
**Link**: https://github.com/KWong41/LocalKineGrinds/projects/1  
**Pending**: Completing the matching endpoint tab. Adding in a profiles tab for other users that have already finished "matching". Currently testing cases.  
**Roles and responsibilities**:

**John**  
New Completions: Updates to Documenation and Creation/Updates to Assessments  
Current: Attack Surface Assessment, Snyk Screening Vulnerabilities, Deprecative Assessments  
Next: Work on In-Progress Testing and Documentation

**Kevin**  
New Completions: Basic Functionality of the Application and Addition of Theme  
Current: Front End Development, Back End Development, Project Management  
Next: Database Implementation

**Calvan**  
New Completions: Updated README.md and Documentation.  
Current: README.md, Documentation, Testing.  
Next: Work on In-Progress Testing and Documentation  

**Ryota**  
New Completions: Basic Functionality of the Application and Addition of Theme  
Current: Front End Development, Back End Development  
Next: Database Implementation  

**(03/21/2021 - 04/18/2021) UPDATE**

Kanban Board (what was done before the last update in March 2021)
**Link**: https://github.com/KWong41/LocalKineGrinds/projects/1  

**Progress**: Completed playtest cases and risk management cases of Fuzzing and other functional requirements.  You may check these here https://docs.google.com/spreadsheets/d/1120eU6o1NT_tKWytwXOKIMFdsSlSDFUXxZL7NdkrWqg/edit#gid=1161341563

**Link to Kanban Board**: https://github.com/KWong41/LocalKineGrinds/projects/1  
**Pending**:  We have all decided to implement a "matching" algorithm into our project.  We are in the risk assessment and testing phase of our project.  Each team member is playtesting our project to see if anything needs revision due to vulnerabilities or non-functional implementations that are supposed to be functional (broken code).

Fuzzing strategy

We have used a fuzzing tool in linux ubuntu virtualbox to fuzz the application file “main.js”.  This fuzzing tool called radamsa, is able to fuzz particular inputs (any input) to change it to a random output string.  For example, using the command `echo 1000 | radamsa` would output a random string that is not the string 1000.  In this particular risk assessment, we have decided to fuzz the file main.js in our project.  The following syntax includes the main.js file syntax coded in javascript:

We have called on the fuzzing tool radamsa including the argument or the filepath and name to execute the tool.  All three attempts of fuzzing have changed the import javascript syntax to random types of syntax.  Although this is profoundly inaccurate, the fuzzing tool also included additional lines of code.  We will go through this process in more depth starting with the first attempt to the last attempt.  The first fuzzing string has returned as a duplicate from the first import statement of “style.css” as well as multiple “t” characters as well as an apostrophe at the end of ‘startup’ followed by a semicolon (not syntactically correct). The second fuzzing string has returned three import statements which are also not syntactically correct.  The third fuzzing string has also returned three import statements.  

**Roles and Responsibilities**
Who did what so far: 

**John**
New Completions:  Risk Assessment test cases and vulnerabilities, documentation, and implementation
Upcoming Task:  Implementing an anime database that we can use to utilize our "matching" algorithm 

**Kevin**
New Completions:  Fuzz Testing test cases and vulnerabilities, documentation, and implementation
Upcoming Task:  Developing an algorithm to match objects from John's database

**Calvan**
New Completions:  README.md documentation and assignment implementation/description and documentation
Upcoming Task:  Documentation and utilization of the wiki page as well as more README.md documentation

**Ryota**
New Completions:  Mockup drawings, developmental process, documentation, and project management
Upcoming Task:  Developing the front-end design of this matching algorithm 

**(04/18/2021 - current) UPDATE**

**John**
Final implementations:  Release on the Risk Assessment report and snyk vulnerabilities.  Preventative measures and proposals

**Kevin**
Final implementations:  Matching Algorithm implementation, possible frontend and backend revisions (for UX/UI purposes), developer notes

**Calvan**
Final implementations:  README.md documentation, feedback, frontend and backend revisions

**Ryota**
Final implementations:  Project management, UX/UI implementation, feedback, and final assessment 

Final developer notes:

Brief closing thoughts on the outcome of your program including:

Challenges:  The Risk Assessment tests were somewhat challenging simply because of how most of the testing purposes was run in Linux OS.  Almost all of the tools required in fuzz testing required Linux OS.  This created a problem because my computer did not like Linux OS.  It took many hours upon hours to understand what was going wrong.  Eventually, we have solved the problem.
Surprises

Achievements:  
Increased functionality of the project in a variety of different ways.  These ways include security vulnerability and implementation, UI/UX purposes (increasing attractiveness of the functions within the project), and many front-end designs that cater towards anime-lovers.

Project Release 1.0