import React from 'react'
import Img1 from '../images/img-01.jpg';
import Img2 from '../images/img-02.jpg';
import Img3 from '../images/img-03.jpg';
import Img4 from '../images/img-04.jpg';
function Programm() {
  return (
    <section className="programm-section">
    <div className="conteiner">
        <div className="title">
            <h2>Yoga feature program</h2>
            <h3>Our class</h3>
        </div>
        <ul className="item-post">
            <li>
                <div className="post">
                    <div className="post-img" style={{backgroundImage: `url(${Img1})`}}></div>
                    <div className="post-title">
                        <h4><a href="#">YOGA FOR HEALTH</a></h4>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="#" className="post-name">Ashtanga - Hatha</a>
                    </div>
                </div>
            </li>

            <li>
                <div className="post">
                    <div className="post-img" style={{backgroundImage: `url(${Img2})`}}></div>
                    <div className="post-title">
                        <h4><a href="#">YOGA FOR HEALTH</a></h4>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="#" className="post-name">Ashtanga - Hatha</a>
                    </div>
                </div>
            </li>

            <li>
                <div className="post">
                    <div className="post-img" style={{backgroundImage: `url(${Img3})`}}></div>
                    <div className="post-title">
                        <h4><a href="#">YOGA FOR HEALTH</a></h4>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="#" className="post-name">Ashtanga - Hatha</a>
                    </div>
                </div>
            </li>

            <li>
                <div className="post">
                    <div className="post-img" style={{backgroundImage: `url(${Img4})`}}></div>
                    <div className="post-title">
                        <h4><a href="#">YOGA FOR HEALTH</a></h4>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <a href="#" className="post-name">Ashtanga - Hatha</a>
                    </div>
                </div>
            </li>


        </ul>
    </div>
</section>
  )
}

export default Programm