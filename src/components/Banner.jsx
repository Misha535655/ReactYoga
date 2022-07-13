import React from 'react'

function Banner() {
  return (
    <div className='banner'>
            <div className="conteiner">
                <div className="block">
                    <div className="form-block">
                        <form action="" className="form">
                            <h2>Trial class</h2>
                            <input type="text" placeholder="Enter your name"/>
                            <input type="tel" placeholder="Enter your phone"/>
                            <select name="" id="">
                                <option value="1">Choose Your class</option>
                                <option value="2">Choose Your class</option>
                                <option value="3">Choose Your class</option>
                            </select>
                            <input className="btn" type="submit" value="Try it"/>
                        </form>
                    </div>
                    <div className="text-block">
                        <h1>Just Balance <br/> Your Mind $ Body</h1>
                        <p>Create the healthy living for yourself</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner