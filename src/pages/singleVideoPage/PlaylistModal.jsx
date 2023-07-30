import React, { useState } from 'react'
import { useAppContext } from '../../contexts/AppContext'
import { Box, Modal, TextField } from '@mui/material';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

export const PlaylistModal = ({video}) => {



    const { state, dispatch} = useAppContext();

    const playlistInitialData = {
        playlistName: "",
        playlistDesc:"",
    }

    const [newPlaylistData, setNewPlaylistData] = useState(playlistInitialData)

    const closeHandler = () => dispatch({type:"CLOSE_PLAYLIST_MODAL"})

    if (!video) {
        return null;
    } else
  return (
    <div className='playlist-modal'>
        <Modal
        open={state?.openPlaylistModal}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            

        </Modal>


    </div>
  )
}
