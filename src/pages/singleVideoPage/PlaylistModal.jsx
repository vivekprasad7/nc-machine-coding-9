import React from 'react'
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

    const [newPlaylistInput, setNewPlaylistInput] = useState(playlistInitialData)

    const closeHandler = () => dispatch({type:"CLOSE_PLAYLIST_MODAL"})


  return (
    <div className='playlist-modal'>
        <Modal
        open={state?.openPlaylistModal}
        onClose={closeHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h2>Add to Playlist</h2>
                <p>Create New Playlist</p>
                <TextField
                id="outlined-basic"
                onChange={
                    (e) => setNewPlaylistInput({
                        ...newPlaylistInput, playlistName: e.target.value
                    })
                }
                variant="outlined"
                sx={{width:"100%", margin:"12px 0"}}
                />
                    <button
                    onClick={() => {
                        dispatch({
                            type:"ADD_NEW_PLAYLIST",
                            playlistName: newPlaylistInput?.playlistName,
                        });
                        setNewPlaylistInput(playlistInitialData)
                    }}
                    >
                        Create New Playlist
                    </button>
                    {
                        !show && (
                            <>
                            <p>Add to Existing Playlist</p>
                            <ol>
                                {
                                    state?.playlistData?.map((item) => {

                                        return(
                                            <>
                                            <li><p>{item?.playlistName}</p></li>
                                             <button
                                            onClick={() => dispatch({
                                                type:"ADD_TO_PLAYLIST",
                                                playlistVideos: {...video},
                                                pID:item?.playlistID,
                                            })}
                                            >
                                                Add
                                           </button>
                                           </>
                                        )
                                    })
                                }
                            </ol>
                            </>
                        )
                    }

                </TextField>

            </Box>
        </Modal>


    </div>
  )
}
