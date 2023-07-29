import React from 'react'
import "./Playlists.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { RightSidebar } from '../../components/right-sidebar/RightSidebar'
import { useAppContext } from '../../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export const Playlists = () => {
    const {state, dispatch} = useAppContext();
    const navigate = useNavigate()
  return (
    <div className='playlists-page'>
        <Sidebar/>
        <div className='playlists-section' >
            {
                state?.playlistData?.map((item) => {
                    return(
                        <div onClick={() => navigate(`/playlist/${item?.playlistID}`)} className='playlist-area'>
                            <img src="https://picsum.photos/200/300" alt={item.playlistName} />
                            <h4>{item?.playlistName}</h4>

                        </div>
                    )
                })
            }
              <span
            style={{
              border: "1px solid grey",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "50px",
              height: "50px",
            }}
            onClick={() => dispatch({ type: "OPEN_PLAYLIST_MODAL" })}
          >
            +
          </span>

        </div>
        <RightSidebar/>


    </div>
  )
}
