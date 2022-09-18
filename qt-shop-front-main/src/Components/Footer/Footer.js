

import classNames from "classnames/bind"
import styles from "./footer.module.scss"

const cx = classNames.bind(styles)
const Footer = () => {

    return (
        <div className={cx('container')}>
            <div className="container">
                <div className={cx('box')}>
                    <div className={cx('row')}> 
                        <h1>Quy-Thành</h1>
                        <p>Address: 60-49 Road 11378 New York</p>
                        <p>New York</p>
                        <p>Phone: +65 11.188.888</p>
                        <p>Email: hello@colorlib.com</p>
                    </div>
                    <div className={cx('footer__widget')}>
                        <h2>Useful Links</h2>
                        <table>
                            <tr>
                                <td>
                                    <ul>
                                        <li><a href="#"> About Us </a> </li>
                                        <li><a href="#"> About Our Shop </a> </li>
                                        <li><a href="#"> Secure Shopping </a> </li>
                                        <li><a href="#"> Delivery infomation </a> </li>
                                        <li><a href="#"> Privacy Policy </a> </li>
                                        <li><a href="#"> Our Sitemap</a> </li>
                                    </ul>
                                </td>
                                <td>
                                <ul>
                                    <li><a href="#"> Who We Are </a> </li>
                                    <li><a href="#"> Our Services </a> </li>
                                    <li><a href="#"> Projects </a> </li>
                                    <li><a href="#"> Contact </a> </li>
                                    <li><a href="#"> Innovation </a> </li>
                                    <li><a href="#"> Testimonials </a> </li>
                                </ul>
                            </td>
                            </tr>
                        </table>
                    </div>
                    <div className={cx('footer_right')}>
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <input type="text" placeholder="Enter your mail" /> 
                        <button><h2>SUBSCRIBE</h2></button>
                       <div className={cx('icon')}>
                                <i class="fa fa-facebook"> </i> 
                                <i class="fa fa-instagram"></i>
                                <i class="fa fa-twitter"></i>
                                <i class="fa fa-pinterest"></i>
                        
                       </div>

                    </div>
                </div>
                <hr />
                <div className={cx('bottom')}>
                    <div>
                    <p >Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
                    </div>
                    <div><img src='https://technext.github.io/ogani/img/payment-item.png' /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer