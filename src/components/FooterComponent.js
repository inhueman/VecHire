import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer bg-secondary">
        <div className="container p-2" >
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Hire</Link></li>
                        <li><Link to="/vehicles">Add</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              University Institute of Engineering and Techbology<br />
		              Kurukshetra University<br />
		              Kurukshetra<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 12341-15678<br />
		              <i className="fa fa-fax fa-lg"></i>: +91 28765-14321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:">
                         vechire@gmail.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        {/* <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a> */}
                        <a className="btn btn-social-icon btn-facebook m-1" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin m-1" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter m-1" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google m-1" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon btn-gmail m-1" href="mailto:"><i className="fa fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            {/* <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div> */}
        </div>
    </div>
    );
}

export default Footer;