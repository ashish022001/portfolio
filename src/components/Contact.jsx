const Contact = () =>
    {
        return(
            <>
            <div className="bg-info text-dark justify-content-around d-flex flex-wrap " >
                <div className=" justify-content-center align-content-center ms-5 me-3">
            <h4 style={{color:"gray"}}>ABOUT</h4>
             <h1 class="first-para">
             We Are Expert In Web
             </h1>
             <h4 >
             Looking for an opportunity in field of  Web development <br /> SQL development || Training on Java full stack  developer <br /> course Through  Naresh i technologies, Hyderabad.
             </h4>
            </div>
            <div className=" justify-content-center align-content-center m-5"></div>
                <div className="card m-5 " style={{width:"350px"}}>
                    <div className="card-header">
                        <h2>Contact me!</h2>
                    </div>
                    <div className="card-body bg-info">
                        <dl>
                            <dt>Name</dt>
                            <dd><input type="text" placeholder="Enter Your full Name..." className=" form-control" name="" id="" /></dd>
                            <dt>Email</dt>
                            <dd><input type="email" name="" placeholder="Enter valid email..." className=" form-control" id="" /></dd>
                            <dt>Which are you?</dt>
                            <dd>
                                <select className="form-select">
                                    <option selected disabled>Select</option>
                                    <option>Student</option>
                                    <option>Recruiter</option>
                                    <option>Company</option>
                                    <option>Other</option>
                                </select>
                            </dd>
                            <dt>Message</dt>
                            <dd>
                                <textarea name="" id="" placeholder="Enter your question..." className="form-control"></textarea>
                            </dd>
                            <dt>Gender</dt>
                            <dd>
                                <input type="radio" className="form-check-input" name="gender" id="gender" /> Male &nbsp;
                                <input type="radio" className="form-check-input" name="gender" id="gender" /> Female &nbsp;
                                <input type="radio" className="form-check-input" name="gender" id="gender" /> Other
                            </dd>
                        </dl>
                    </div>
                    <div className="card-footer">
                        <button className="bg-info btn ">Send</button>
                    </div>
                </div>
            </div>

            </>
        )
    }
export default Contact