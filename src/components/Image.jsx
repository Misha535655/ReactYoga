import React from 'react'
import Img5 from '../images/img-05.jpg';
import Img6 from '../images/img-06.jpg';
import Img7 from '../images/img-07.jpg';
import Img8 from '../images/img-08.jpg';
import Img9 from '../images/img-09.jpg';
import Img10 from '../images/img-10.jpg';
import Img11 from '../images/img-11.jpg';
import Img12 from '../images/img-12.jpg';

function Image() {
  return (
    <section className="img-section">
            <ul className="list-image">
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img5})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img6})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img7})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img8})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img9})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img10})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img11})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="image" style={{backgroundImage: `url(${Img12})`}}>
                        <span className="icon-search"></span>
                    </a>
                </li>
            </ul>
        </section>
  )
}

export default Image