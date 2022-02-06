import React from 'react';
import VideoItems from './VideoItems';


const VideoList=({videos,onVideoSelect})=>{
    const List=videos.map((video)=>{
        return <VideoItems key={video.snippet.title} onVideoSelect={onVideoSelect} video={video}/>

    });

    return <div className="ui relaxed divided list">{List}</div>;
};


export default VideoList;