import React from 'react'

function Footer() {
  return (
    <footer id="footer">
        <section className="footer">
            <div className="conteiner">
                <div className="info">
                    <div className="about">
                        <div className="text">
                            <h4>ABOUT</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad m inim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea commodo consequat. laboris nisi
                                ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="contacts">
                        <h4>CONTACT US</h4>
                        <ul className="contact-list">
                            <li>
                                <a href="#" className="adress">5419 Joseph Mountains Apt. 716</a>
                            </li>
                            <li><a href="mailto:joga.info@example.com" className="mail">joga.info@example.com</a></li>
                            <li>
                                <ul className="telephones">
                                    <li><a href="tel:+1 234 567 89" className="tel">+1 234 567 89</a></li>
                                    <li><a href="tel:+1 234 678 90" className="tel">+1 234 678 90</a></li>
                                </ul>


                            </li>
                            <li>
                                <a href="www.example.com" className="site">www.example.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="social-img">
                    <li>
                        <a href="" className="icon-pinterest"></a>
                    </li>
                    <li>
                        <a href="" className="icon-twitter"></a>
                    </li>
                    <li>
                        <a href="" className="icon-facebook"></a>
                    </li>
                    <li>
                        <a href="" className="icon-google-plus"></a>
                    </li>
                    <li>
                        <a href="" className="icon-instagram"></a>
                    </li>
                </ul>
            </div>
        </section>
        <div className="conteiner">
            <span className="yoga">Copyright © 2016-2017 Yoga classNamees</span>
        </div>
    </footer>
  )
}

export default Footer