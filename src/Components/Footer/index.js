import React from 'react';
import { BackTop } from 'antd';

function Footer() {
    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    {/* <img src={image1} alt="logo" height="30px" width="30px" style={{ margin: "0 10px" }} /> */}
                    <a href="http://google.com">YFC Ethiopia</a>
                </div>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                </ul>
                <div className="copyright">Copyright &copy; 2021 YFC Ethiopia</div>
                <BackTop>
                    <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>
        </div>
    );
}

export default Footer;