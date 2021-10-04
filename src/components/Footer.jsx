import React from 'react'
import logo from '../img/logo.png'
import instagram from '../img/Circled_Instagram.png'
import linkedin from '../img/Circled_Linkedin.png'
import twitter from '../img/Circled_Twitter.png'
import youtube from '../img/Circled_Youtube.png'

const Footer = () => {
    return (
        <footer>
            <div className="page-wrapper">
              <div className="footer-row">
                  <div className="footer-col">
                    <img src={logo} alt="logo" className="footer-logo" />
                  </div>
                
                <div className="footer-col">
                   <p>Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.                </p> 
                </div>

                <div className="footer-col">
                    <p>Better Call Saul, a prequel series featuring Odenkirk, Banks, and Esposito reprising their Breaking Bad roles, debuted on AMC on February 8, 2015, and has been renewed for a final sixth season. </p>
                </div>

                <div className="footer-col">
                    <h3>First episode date:</h3> 
                    <p>January 20, 2008</p>

                    <h3>Created by:</h3> 
                    <p>Vince Gilligan</p>  
                </div>
              </div>

                <div className="social">
                    <img src={instagram} alt="logo" width="50"/>             
                    <img src={linkedin} alt="logo" width="50"/>             
                    <img src={twitter} alt="logo" width="50"/>             
                    <img src={youtube} alt="logo" width="50"/>             
                </div>

                <div className="footer-links">
                    <a href="#!">Legal</a>
                    <a href="#!">Privacy Center</a>
                    <a href="#!">Privacy Policy</a>
                    <a href="#!">Cookies</a>
                    <a href="#!">About Ads</a> 
                    <a className="right" href="#!">© 2021 Milad Gharibi</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
