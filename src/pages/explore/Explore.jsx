import React from 'react'
import "./Explore.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useAppContext } from '../../contexts/AppContext'
import { isVideoInWatchLater } from '../../utils/isVideoInWatchLater'

export const Explore = () => {
    const {state, dispatch, videosData} = useAppContext();

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
                        <img src={video.thumbnail} alt={video.title}/>
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
