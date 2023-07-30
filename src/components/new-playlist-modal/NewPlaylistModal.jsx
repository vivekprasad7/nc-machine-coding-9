import React, { useState } from 'react'
import "./NewPlaylistModal.css"
import { Modal } from '@mui/material'
import { useAppContext } from '../../contexts/AppContext'

export const NewPlaylistModal = ({video, showPlaylistModal, setShowPlaylistModal}) => {

    const {state, dispatch} = useAppContext();

    const initialNewPlaylistData ={
        playlistName:"",
        playlistDesc:"",
    }

    const [newPlaylistData, setNewPlaylistData] = useState(initialNewPlaylistData)

  return (
    
        <Modal open={showPlaylistModal} onClose={() => setShowPlaylistModal(false)}>
            <div className='new-playlist-modal' style={{display: showPlaylistModal ? "block" : "none"}}>

            <div className='ep-close-icon'>
          <i onClick={() => setShowPlaylistModal(!showPlaylistModal)} class="fa-solid fa-close icon-circle"></i>
      </div>

                <h3>Add New Playlist</h3>

                <div className='modal-input'>
                    <textarea
                    value={newPlaylistData?.playlistName}
                    onChange={(e) => setNewPlaylistData({...newPlaylistData, playlistName: e.target.value})}
                    className='ep-textarea'
                    placeholder='Playlist Name'
                    >
                    </textarea>

                </div>
                <div className='modal-input'>
                    <textarea
                    value={newPlaylistData?.playlistDesc}
                    onChange={(e) => setNewPlaylistData({...newPlaylistData, playlistDesc: e.target.value})}
                    className='ep-textarea'
                    placeholder='Playlist Description'
                    >
                    </textarea>

                </div>


                <button onClick={() => {
                    dispatch({type:"ADD_NEW_PLAYLIST", 
                    playlistName: newPlaylistData?.playlistName,
                    playlistDesc: newPlaylistData?.playlistDesc,
                });
                    setShowPlaylistModal(false)
                }}>Add New Playlist</button>

            </div>

        </Modal>
    
  )
}
