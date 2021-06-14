import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

const VideoItem = ({ video }:any) => {
    const { selectedVideo } = useActions();

    const calcTime = (date:any) => {
        let time = new Date(date);
        let timeS = time.toLocaleDateString("en-US");
        return timeS;
    };


    return (
        <Link to={`/${video.id.videoId}`} className="video-item" onClick={() => selectedVideo(video)}>
            <img alt={video.snippet.title} className="video-item__image" src={video.snippet.thumbnails.medium.url} />
            <div className="video-item__content">
                <div className="video-item__content__title">
                    {video.snippet.title}
                </div>
                <div className="video-item__content__channel">
                    {video.snippet.channelTitle}
                </div>
                <div className="video-item__content__stats">
                    {calcTime(video.snippet.publishedAt)}
                </div>
            </div>
        </Link>
    );
};

export default VideoItem;