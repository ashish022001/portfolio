import ServiseImage from './images/Servicedeveloper.png';
const Services = () =>
    {
        return(
            <>
            <div className=" bg-info-subtle text-dark justify-content-between d-flex flex-wrap" id="home" >
                <div className=" justify-content-center align-content-center mt-5 ms-5 me-3">
                <h4>What I am good at</h4>
                <h1 class="first-para" style={{fontWeight:"bold"}}>
                 My Services
                </h1>
                
            <div className="d-flex flex-wrap justify-content-between" >
                <div className="card m-2 bg-info" style={{width:"280px"}}>
                    <div className="card-header" >
                        <h2>Fast coding </h2>
                    </div>
                    <div className="card-body bg-info-subtle over">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias perferendis ducimus fugiat amet eum odio expedita nisi laboriosam magnam. Quis dolorum quibusdam cupiditate! Optio commodi quidem quod pariatur ut eaque sint quam nesciunt reiciendis. Nesciunt, vitae perferendis quia veritatis quam, fugiat, laboriosam dolores incidunt ad velit rem quas optio!</p>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning"></span>
                    </div>
                    <div className="card-footer">
                        
                        <button className="btn btn-warning w-100">View Detailes</button>
                    </div>
                </div>
                <div className="card bg-info m-2" style={{width:"280px"}}>
                <div className="card-header">
                        <h2>Documentations</h2>
                    </div>
                    <div className="card-body bg-info-subtle">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias perferendis ducimus fugiat amet eum odio expedita nisi laboriosam magnam. Quis dolorum quibusdam cupiditate! Optio commodi quidem quod pariatur ut eaque sint quam nesciunt reiciendis. Nesciunt, vitae perferendis quia veritatis quam, fugiat, laboriosam dolores incidunt ad velit rem quas optio!</p>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning me-1"></span>
                        <span className="bi bi-star-fill text-warning"></span>
                    </div>
                    <div className="card-footer">
                        
                        <button className="btn btn-warning w-100">View Detailes</button>
                    </div>
                </div>
                            </div>
            </div>
        <div className="justify-content-center align-content-center m-5 " >
        <img src={ServiseImage} id="image" width={"100%"}  alt="" className="mt-5" />
        </div>
      </div>
            </>
        )
    }
export default Services