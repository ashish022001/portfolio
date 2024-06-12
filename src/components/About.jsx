import aboutImage from './images/about.webp'
const About = () =>
    {
        return(
            <div className=" bg-info text-dark d-flex flex-wrap" id="home" style={{height:"100vh"}}>
                <div className="justify-content-center align-content-center m-5  ">
             <img src={aboutImage} id="image" height={"300px"} width={"100%"} alt="" className="mt-5" />
             </div>
            <div className=" justify-content-center align-content-center ms-5 me-3">
            <h4 style={{color:"gray"}}>ABOUT</h4>
             <h1 class="first-para">
             We Are Expert In Web
             </h1>
             <h4 >
             Looking for an opportunity in field of  Web development <br /> SQL development || Training on Java full stack  developer <br /> course Through  Naresh i technologies, Hyderabad.
             </h4>
            </div>
             
           </div>
        )
    }
export default About