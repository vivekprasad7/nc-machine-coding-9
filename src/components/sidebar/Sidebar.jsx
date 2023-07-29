import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../../contexts/AppContext'

export const Sidebar = () => {

    const {dispatch} = useAppContext();


    const navStyles = ({isActive}) => ({
        backgroundColor: isActive ? "rgb(255, 238, 219)" : "",
        borderRadius: isActive ? "30px" : "",
      })
    
  return (
    <div>
         <div className='site-title'>
            <h3>deadflix<span>.</span></h3>
        </div>

        <div className='sidebar-menu'>
        <NavLink
          className="side-nav"
          to="/"
        >
          <i className="fa-solid fa-home"></i>{" "}
          <span className="nav-title">Home</span>
        </NavLink>
        <NavLink
          style={navStyles}
          className="side-nav"
          onClick={() => dispatch({type:"FILTER_BY_CATEGORY" , payload: "All"})}
          to="/videos"
        >
          <i className="fa-regular fa-compass"></i>{" "}
          <span className="nav-title">Explore</span>
        </NavLink>
        <NavLink
          style={navStyles}
          className="side-nav"
          to="/bookmarks"
        >
          <i className="fa-regular fa-bookmark "></i>{" "}
          <span className="nav-title">
            Playlists{" "}
          </span>
        </NavLink>
        <NavLink
          style={navStyles}
          className="side-nav"
          to="/later"
        >
          <i className="fa-regular fa-user"></i>{" "}
          <span  className="nav-title">Watch Later</span>
        </NavLink>
        </div>

          {/* <div className='create-post-icon'>
          <i onClick={() => setDisplayProps(!displayProps)} class="fa-solid fa-bolt icon-circle"></i>
          </div> */}


    </div>
  )
}
