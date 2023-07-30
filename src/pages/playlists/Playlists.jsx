import React, { useState } from 'react'
import "./Playlists.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { RightSidebar } from '../../components/right-sidebar/RightSidebar'
import { useAppContext } from '../../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import { NewPlaylistModal } from '../../components/new-playlist-modal/NewPlaylistModal'

export const Playlists = () => {
    const {state, dispatch} = useAppContext();
    const navigate = useNavigate()
    const [ showPlaylistModal, setShowPlaylistModal] = useState(false);

  return (
    <div className='playlists-page'>
          {showPlaylistModal && (<NewPlaylistModal  showPlaylistModal={showPlaylistModal} setShowPlaylistModal={setShowPlaylistModal} />)}

        <Sidebar/>
        <div className='playlists-section' >
            {
                state?.playlistData?.map((item) => {
                    return(
                        <div onClick={() => navigate(`/playlist/${item?.playlistID}`)} className='playlist-card'>
                            <img src="https://picsum.photos/200/300" alt={item.playlistName} />
                            <h4> Name: {item?.playlistName}</h4>
                            <p>Desc: {item?.playlistDesc}</p>
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
              cursor:"pointer"
            }}
            onClick={() => setShowPlaylistModal(!showPlaylistModal)}
          >
            +
          </span>

        </div>
        {/* <RightSidebar/> */}


    </div>
  )
}
