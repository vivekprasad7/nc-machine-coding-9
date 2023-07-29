import React from 'react'
import "./Explore.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { useAppContext } from '../../contexts/AppContext'

export const Explore = () => {
    const {state, videosData} = useAppContext();

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
                        <div className="pc-edit-icon">
            <i class="fa-solid fa-ellipsis icon-circle"></i>
            <ul className='pc-dropdown'>
              <li  className='side-nav'>Edit</li>
              <li className='side-nav'> Delete</li>
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
