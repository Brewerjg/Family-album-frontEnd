import React from 'react'
import BgVideo from '../assets/film-effect-cut.mp4'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
            <Link to="/">
                <button > Home</button>
            </Link>
            <Link to="/grammer">
                <button >Grammer</button>
            </Link>
            <Link to="/bhakta">
                <button >Bhakta</button>
            </Link>
            <Link to="/hooks">
                <button >Hooks</button>
            </Link>
            <a className="text-decoration-none" href="/image/new"><button > Add Photos
            </button></a>
        </div>
	<video className="video-bg" src={BgVideo} autoPlay loop muted></video>
    </div>
  )
}

export default Navbar2