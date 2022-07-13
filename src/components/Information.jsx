import React from 'react'
import Img1 from '../images/ico-01.png';
import Img2 from '../images/ico-02.png';
import Img3 from '../images/ico-03.png';
import Img4 from '../images/ico-04.png';
import Img5 from '../images/ico-05.png';
import Img6 from '../images/ico-06.png';
import Img7 from '../images/ico-07.png';
import Img8 from '../images/ico-08.png';


function Information() {
  return (
    <section className="informaton-section">
    <div className="conteiner ">
        <ul className="list-information">
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img1} alt="description"/></span>
                    <div className="information-title">
                        <h4>IMPROVED OVERALL<br/> HEALTH
                        </h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img2} alt="description"/></span>
                    <div className="information-title">
                        <h4>INCREASED<br/> CONCENTRATION
                        </h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img3} alt="description"/></span>
                    <div className="information-title">
                        <h4>BLANCE<br/> YOUR MIND</h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img4} alt="description"/></span>
                    <div className="information-title">
                        <h4>SLEEP<br/> BETTER
                        </h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img5} alt="description"/></span>
                    <div className="information-title">
                        <h4>WEIGHT LOSS</h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img6} alt="description"/></span>
                    <div className="information-title">
                        <h4>STRENGTHENS<br/> YOUR BONES</h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img7} alt="description"/></span>
                    <div className="information-title">
                        <h4>INCREASED<br/> FLEXIBILITY
                        </h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="item-information">
                    <span className="information-ico"><img src={Img8} alt="description"/></span>
                    <div className="information-title">
                        <h4>LOWER BLOOD <br/> PRESSURE
                        </h4>
                        <p>Enim ad minim veniam, quis nostrud exercitation toui ullamcomi laboris nisi ut aliquip ex ea com.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</section>
  )
}

export default Information