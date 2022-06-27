import React from 'react';
import YouTubeVideo from './YouTubeVideo';

function YouTubeVideosList(props) {
    return ( 
        <>
            <ul>
                {
                    props.videos.map((v) => (
                        <li>
                            <YouTubeVideo videoTitle={v.videoTitle} videoSrc={v.videoSrc} videoWidth={v.videoWidth} videoHeight={v.videoHeight}></YouTubeVideo>
                        </li>
                    ))
                }
            </ul>
        </>
     );
}

export default YouTubeVideosList;