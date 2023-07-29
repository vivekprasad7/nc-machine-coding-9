import React from 'react'
import "./Explore.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useAppContext } from '../../contexts/AppContext'
import { isVideoInWatchLater } from '../../utils/isVideoInWatchLater'
import { useNavigate } from 'react-router-dom'

export const Explore = () => {
    const {state, dispatch, videosData} = useAppContext();
    const navigate = useNavigate();

    const filterCategoryVideos = state.category === "All" ? videosData : videosData.filter((item) => item.category === state.category);

  return (
    <div className='explore-page'>
        <Sidebar/>

        <div className='videos-section'>
        <h3>{state?.category}</h3>
        <div className='videos-listing-section'>
        {
            filterCategoryVideos.map((video) => {

                return(
                    <div className='video-card' >
                        <img  onClick={ () => navigate(`/video/${video?._id}`)} src={video.thumbnail} alt={video.title}/>
                        <p>{video.title}</p>
                        <p>Creator: {video.creator}</p>
                        <p>Views: {video.views}</p>
                        <div className="pc-edit-icon">
            <i class="fa-solid fa-ellipsis icon-circle"></i>
            <ul className='pc-dropdown'>
              <li onClick={() => dispatch({type:"WATCH_LATER", payload: video})}  className='side-nav'>
                {isVideoInWatchLater(state?.watchLater, video._id) ? "Remove From Watch Later" : "Watch Later"}</li>
            </ul>
               
            </div>
                    </div>
                )
            })
        }

        </div>

            
        </div>
        

       
    </div>
  )
}
