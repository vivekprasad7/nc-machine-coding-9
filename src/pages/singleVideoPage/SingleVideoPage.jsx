import React, { useEffect, useState } from 'react'
import "./SingleVideoPage.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { RightSidebar } from '../../components/right-sidebar/RightSidebar'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../contexts/AppContext'

import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { isVideoInWatchLater } from '../../utils/isVideoInWatchLater'
import { PlaylistModal } from './PlaylistModal'
import { NewPlaylistModal } from '../../components/new-playlist-modal/NewPlaylistModal'

export const SingleVideoPage = () => {
    const {videosData, state, dispatch} = useAppContext();
    const {videoID} = useParams();

    const [singleVideo, setSingleVideo] = useState({});
    const [ showPlaylistModal, setShowPlaylistModal] = useState(false);
    const [showNotesModal, setShowNotesModal] = useState(false)

    useEffect(()=> {
        setSingleVideo(videosData?.find((video) => +video?._id === +videoID))
 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[videoID, videosData])

    
  return (
    <>
    <div className='single-video-page'>
      
    <Sidebar/>
    <div className='single-video-section'>
    {showPlaylistModal && (<NewPlaylistModal video={singleVideo} showPlaylistModal={showPlaylistModal} setShowPlaylistModal={setShowPlaylistModal} />)}
        <div className='single-video'>
              <iframe
        src={singleVideo?.src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
            {/* <img src={singleVideo?.thumbnail} alt={singleVideo?.title}/> */}
            <p>{singleVideo?.title}</p>
            <div className='single-video-icons'>
                <div onClick={() => setShowPlaylistModal(!showPlaylistModal)}>
                    <PlaylistAddIcon/>
                </div>

                <div>
                    <PlaylistRemoveIcon/>
                </div>

                {
                    isVideoInWatchLater(state?.watchLater, singleVideo._id) ?   <div onClick={() => dispatch({type:"WATCH_LATER", payload: singleVideo})} >
                    <WatchLaterIcon/> 
                </div> :   <div onClick={() => dispatch({type:"WATCH_LATER", payload: singleVideo})} >
                    <WatchLaterOutlinedIcon/> 
                </div>
                }
            


            </div>
        </div>

        }
    </div>

    <RightSidebar/>
    

</div>

{/* <NewPlaylistModal props={singleVideo}/> */}
{/* { singleVideo && <PlaylistModal video={singleVideo} />} */}

</>
  )
}
