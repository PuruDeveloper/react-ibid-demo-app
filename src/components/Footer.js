import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer" >
            <div className="footer__top" >
            <div className="footer__top__column__1" >
                <img src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2019/10/logo-ibid-automotive.png" alt="ibid logo" />
            <p>contact@example.com</p>
            <p>+1-541-754-3010</p>
            <div className="footer__social__media" >
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-instagram"></i>
            </div>
            </div>
            <div className="footer__top__column__2" >
                <p className="footer__heading" >Useful Lnks</p>
            <div className="footer__useful__links" >
                <i class="fas fa-caret-right"></i>
                <p>Mobile Phone</p>
            </div>
            <div className="footer__useful__links" >
                <i class="fas fa-caret-right"></i>
                <p>Laptop</p>
            </div>
            <div className="footer__useful__links" >
                <i class="fas fa-caret-right"></i>
                <p>Headphones</p>
            </div>
            </div>
            <div className="footer__top__column__3" >
                <p className="footer__heading" >Our Policy</p>
            <div className="footer__useful__links" >
                <i class="fas fa-caret-right"></i>
                <p>Homepage</p>
            </div>
            <div className="footer__useful__links" >
                <i class="fas fa-caret-right"></i>
                <p>Blog</p>
            </div>
            <div className="footer__useful__links" >
                <i class="fas fa-caret-right"></i>
                <p>Services</p>
            </div>
            </div>
            <div className="footer__top__column_4" >
                <p className="footer__heading" >Subscribe to our news letter</p>
            <div className="footer__top__input" >
                <input placeholder="Enter your email" type="text" />
            <button className="footer__submit__button" >Submit</button>
            </div>
            </div>
            
        </div>
        <div className="footer__bottom" >
            <p>Copyright &copy;
        <script>document.write(new Date().getFullYear());</script>, Purushottam Mishra
        </p>
        </div>
        </div>
    )
}

export default Footer
