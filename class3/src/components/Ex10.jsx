import React from "react"   

class Ex10 extends React.Component{
    // constructor(props){
    //     super(props);
    //     console.log(props)
    // }

    //Example-2
    
    static defaultProps = {
            img:"https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg",
           name:"Parent Card",
           lorem:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsum atque tempora officia amet iste qui accusamus libero nostrum excepturi maiores blanditiis adipisci voluptas, non distinctio pariatur totam dignissimos quaerat."
        }
    render(){
        const {img, name, lorem} = this.props;
        return(
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1 className='bg-warning text-white p-2 text-center'>React Class Component Destructuring Props</h1>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <div className="lead p-3 border">
               
                <p>{img}</p>
                <p>{name}</p>
                <p>{lorem}</p>

            </div>
            <div className="card">
                <img src={img} height="400px" alt="" />
                <div className="card-body">
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>{lorem}
                        
                    </p>
                    <button type='button' className='btn btn-outline-primary '>View More</button>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

// Example-1

// Ex10.defaultProps = {
//     img:"https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg",
//    name:"Parent Card",
//    lorem:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsum atque tempora officia amet iste qui accusamus libero nostrum excepturi maiores blanditiis adipisci voluptas, non distinctio pariatur totam dignissimos quaerat."
// }
export default Ex10;