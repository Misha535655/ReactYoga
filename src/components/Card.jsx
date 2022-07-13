import React from 'react'

function Card() {
  return (
    <section className="section-card">
    <div className="conteiner ">
        <div className="flex-cards">
            <div className="card">
                <div className="price-card">
                    <span className="valuta">$</span>
                    <span className="price">49</span>
                    <span className="mounth">/mounth</span>
                </div>
                <div className="card-desc">
                    <ul className="desc">
                        <li>ENTRY DATE: MON – FRI</li>
                        <li>ENTRY TIME: 8A.M – 8P.M</li>
                        <li>NUTRITION ADVICER: NO</li>
                    </ul>
                    <div className="btn">Buy now</div>
                </div>
            </div>


            <div className="card">
                <div className="price-card">
                    <span className="valuta">$</span>
                    <span className="price">69</span>
                    <span className="mounth">/mounth</span>
                </div>
                <div className="card-desc">
                    <ul className="desc">
                        <li>ENTRY DATE: MON – FRI</li>
                        <li>ENTRY TIME: 8A.M – 8P.M</li>
                        <li>NUTRITION ADVICER: NO</li>
                    </ul>
                    <div className="btn">Buy now</div>
                </div>
            </div>


            <div className="card">
                <div className="price-card">
                    <span className="valuta">$</span>
                    <span className="price">99</span>
                    <span className="mounth">/mounth</span>
                </div>
                <div className="card-desc">
                    <ul className="desc">
                        <li>ENTRY DATE: MON – SUN</li>
                        <li>ENTRY TIME: 8A.M – 8P.M</li>
                        <li>NUTRITION ADVICER: YES</li>
                    </ul>
                    <div className="btn">Buy now</div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Card