import React from 'react'
import BgVideo from '../assets/film-effect-cut.mp4'
import { Link } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'

 
const Navbar = () => {

    useLayoutEffect(() => {
        var myText = new SplitType ('.my-text');
        gsap.to(myText.chars, {duration: 1, y: 0, stagger: 0.04, delay: .5,
            duration: .1, ease: 'power2.inOut'});
        }, [])

  return (
    <div className="navbar">
        <div className="wrapper">
            <Link to="/">
                <button > Home</button>
            </Link>
            <a className="text-decoration-none" href="/image/new"><button > Add Photos
            </button></a>
            
        </div>
        <div className="head-div h-screen">
		    <h1 className='head-name my-text font-["Elsie"]'>Grammer | Bhakta</h1>
	    </div>
	<video className="video-bg" src={BgVideo} autoPlay loop muted></video>
    </div>
  )
}

export default Navbar