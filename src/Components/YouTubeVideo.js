import React from 'react';

function YouTubeVideo(props) {
    return ( 
        <>
            <h1>{props.videoTitle}</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <iframe width={props.videoWidth}
                    height={props.videoHeight}
                    src={props.videoSrc} 
                    title={props.videoTitle} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        </>
     );
}

export default YouTubeVideo;