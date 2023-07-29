import React from 'react'
import "./WatchLater.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useAppContext } from '../../contexts/AppContext'
import { isVideoInWatchLater } from '../../utils/isVideoInWatchLater'

export const WatchLater = () => {
    const {state, dispatch}  = useAppContext();
  return (
    <div className='watch-later-page'>
        <Sidebar/>
        <div className='watch-later'>

            <div className='videos-listing-section'>
                {
                    state?.watchLater?.map((video) => {
                        return(
                            <div className='video-card' >
                            <img src={video.thumbnail} alt={video.title}/>
                            <p>{video.title}</p>
                            <p> Creator: {video.creator}</p>
                            <p>Views: {video.views}</p>
                            <div className="pc-edit-icon">
                <i class="fa-solid fa-ellipsis icon-circle"></i>
                <ul className='pc-dropdown'>
                  <li onClick={() => dispatch({type:"WATCH_LATER", payload: video})}  className='side-nav'>  {isVideoInWatchLater(state?.watchLater, video._id) ? "Remove From Watch Later" : "Watch Later"}</li>
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
