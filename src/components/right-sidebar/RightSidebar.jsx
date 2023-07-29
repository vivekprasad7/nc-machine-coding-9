import React from 'react'
import "./RightSidebar.css"
import { useAppContext } from '../../contexts/AppContext'

export const RightSidebar = () => {
    const {videosData} = useAppContext();
  return (
    <div className='right-sidebar'>
        {

        videosData?.map((video) => {
            return(
                <div className='right-nav-video'>
                    <img src={video.thumbnail} alt={video.title}/>
                    <div className='vid-details'>
                        <p><b>{video.title}</b></p>
                        <p>{video.creator}</p>
                    </div>

                </div>
            )
        })
        }
    </div>
  )
}
