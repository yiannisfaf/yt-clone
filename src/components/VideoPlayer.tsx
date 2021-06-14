import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

const VideoPlayer = () => {
    const { selectedVideo } = useActions();
    const { video, videos } = useTypedSelector((state) => state.videos);
    console.log(videos);

    if (!video) {
        return <div className="video-home">Loading...</div>;
    }

    const renderedList = videos.map((video:any) => {
        return (
            <Link to={`/${video.id.videoId}`} className="video-list__item" onClick={() => selectedVideo(video)}>
                <img alt={video.snippet.title} className="video-list__image" src={video.snippet.thumbnails.medium.url} />
                <div className="video-list__content">
                    <div className="video-list__content__title">
                        {video.snippet.title}
                    </div>
                    <div className="video-list__content__channel">
                        {video.snippet.channelTitle}
                    </div>
                </div>
            </Link>
        )
    });

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className="video-home">
            <div className="video-grid">
                <div className="video-player">
                    <div className="video-player__container">
                        <iframe className="video-player__player" title="video player" src={videoSrc} />
                    </div>
                    <div className="video-details">
                        <h4 className="video-details__title">
                            {video.snippet.title}
                        </h4>
                        <p className="video-details__description">
                            {video.snippet.description}
                        </p>
                    </div>
                </div>
                <div className="video-list">
                    {renderedList}
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;