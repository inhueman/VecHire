import React from 'react';
import { Card, CardImg,CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderVehicleItem({vehicle, onClick}){
    return(
         <Card>
            <Link to={`/hire/${vehicle.id}`} >
            <CardImg top width="100%" src="http://www.bestscooty.in/wp-content/uploads/2016/11/Honda-Activa.jpg" />
            <CardBody>
                <CardTitle>{vehicle.vehiclename}</CardTitle>
                <CardSubtitle>{vehicle.location}</CardSubtitle>
              </CardBody>
            </Link>
         </Card>

    );
}
const Hire = (props) => {
    const menu = props.vehicles.vehicles.map((vehicle) => {
        return (
          <div key={vehicle.id} className="col-12 col-md-5 m-1">
             <RenderVehicleItem vehicle={vehicle} />
          </div>
        );
    });
    if(props.vehicles.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <h3>Loading...</h3>
                </div>
            </div>
        );
    }
    else if (props.vehicles.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.vehicles.errMess}</h4>
                </div>
            </div>
        );

    }
    else
        return (
            <div className="container">
                {/* <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb> 
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div> */}
                <div className="row">
                    {menu}
                </div>
            </div>
        );

}
    
       


export default Hire;