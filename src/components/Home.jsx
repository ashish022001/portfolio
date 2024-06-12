
import image from "./images/developer.png";

const Home = () => {
  return (
    <>
      <div className=" bg-info-subtle text-dark d-flex flex-wrap" id="home" style={{height:"100vh"}}>
       <div className=" justify-content-center align-content-center mt-5 ms-5 me-3">
       <h4>Hi, I'm <span style={{color:"red",fontWeight:"bold"}}>ASHISH</span> </h4>
        <h1 class="first-para">
          WEB <span class="first-para1">DESIGNER</span>
        </h1>
        <h4 >
          Web Development and Java Full Stack Developer <br /> from Maharashtra.{" "}
          <br /> I create Portpolio to do better Online
        </h4>
       </div>
        <div className="justify-content-center align-content-center m-5  ">
        <img src={image} id="image" width={"100%"}  alt="" className="mt-5" />
        </div>
      </div>
    </>
  );
};
export default Home;
