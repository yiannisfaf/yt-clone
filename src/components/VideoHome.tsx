import React, { useEffect } from 'react';
import VideoItem from './VideoItem';
import { useActions } from '../hooks/useActions';

const VideoHome = ({ videos }:any) => {
    const { storeVideos } = useActions();

    useEffect(() => {
        storeVideos(videos);
    }, [videos]);

    const renderedList = videos.map((video:any) => {
        return <VideoItem key={video.id.videoId} video={video} />
    });


    return (
        <div className="video-home">
            {renderedList}
        </div>
    );
};

export default VideoHome;