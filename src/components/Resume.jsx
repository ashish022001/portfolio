const Resume = () =>
    {
        return(
            <div className=" bg-info  justify-content-center align-content-center">
                <div className="text-center m-5">
                <h2>Resume</h2>
            <div className=" accordion" id="resume">
                <div className=" accordion-item">
                    <div className=" accordion-header">
                        <button data-bs-target="#education" data-bs-toggle="collapse" className="btn btn-info-subtle w-100">Education</button>
                    </div>
                    <div className=" accordion-collapse collapse fade" id="education" data-bs-parent="#resume">
                        <hr />
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th>Year</th>
                                <th>Degree</th>
                                <th>University</th>
                                <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2023-2025</td>
                                    <td>MCA</td>
                                    <td>SRTMUN</td>
                                    <td>Parsing</td>
                                </tr>
                                <tr>
                                    <td>2022-2023</td>
                                    <td>Java Full Stack Course</td>
                                    <td>Naresh IT</td>
                                    <td>70 %</td>
                                </tr>
                                <tr>
                                    <td>2019-2022</td>
                                    <td>BCA</td>
                                    <td>SGBAU</td>
                                    <td>78.75 %</td>
                                </tr>
                                <tr>
                                    <td>2018-2019</td>
                                    <td>12th</td>
                                    <td>SGBAU</td>
                                    <td>51.57 %</td>
                                </tr>
                                <tr>
                                    <td>2016-2017</td>
                                    <td>10th</td>
                                    <td>SGBAU</td>
                                    <td>61.20 %</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className=" accordion">
                <div className=" accordion-item mt-2">
                    <div className=" accordion-header">
                        <button data-bs-target="#internships" data-bs-toggle="collapse" className="btn btn-info-subtle w-100">Certifications | Internships</button>
                    </div>
                    <div className=" accordion-collapse collapse fade" id="internships" data-bs-parent="#resume">
                        <div>
                            <hr />
                            <h5 className="text-start p-2">Naresh IT | Full Stack Web Development Bootcamp</h5>
                            <ol className="text-start">
                                <li>Solved 500+ DSA/Coding questions on Hackerrank and Leetcode.</li>
                                <li>Worked on various projects like Registration from , E-commerce</li>
                                <li>Technical Stack Learned : React, NodeJs, ExpressJS, MongoDB, Tailwind, Typescript, Docker</li>
                            </ol>
                            <hr />
                            <h5 className="text-start p-2">React Developer Intern at GlitchBuster Technologies Pune</h5>        
                            <p></p>
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className=" accordion ">
                        <div className=" accordion-item mt-2">
                            <div className=" accordion-header">
                                <button data-bs-target="#skill" data-bs-toggle="collapse" className="btn   w-100">Skill</button>
                            </div>
                            <div className=" accordion-collapse collapse" id="skill">
                                <hr />
                                <table className="table table-hover w-100">
                                    <thead>
                                        <tr>
                                            <th>Skill</th>
                                            <th>Duration</th>
                                            <th>Project</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>HTML/CSS</td>
                                            <td>2 Months</td>
                                            <td>Amazon Shopping Card Clone</td>
                                        </tr>
                                        <tr>
                                            <td>Bootstrap/JavaScript</td>
                                            <td>2 Months </td>
                                            <td>E-Commerce Website in JSON</td>
                                        </tr>
                                        <tr>
                                            <td>React</td>
                                            <td>3 Months</td>
                                            <td>E-Commerce And Video Saver Website</td>
                                        </tr>
                                        <tr>
                                            <td>Oracle</td>
                                            <td>2 Months</td>
                                            <td>Registration Form</td>
                                        </tr>
                                        <tr>
                                            <td>Java</td>
                                            <td>2 Months</td>
                                            <td>Bank Transaction Application</td>
                                        </tr>
                                        <tr>
                                            <td>GitHub</td>
                                            <td>1 Months</td>
                                            <td>Push Project On GitHub</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
export default Resume