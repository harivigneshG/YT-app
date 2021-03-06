import React from 'react';

const VideoDetails=({video})=>{
    if(!video){
        return <div>loading</div>;
    }
    const Src=`https://youtube.com/embed/${video.id.videoId}`;
    return(
      <div>
          <div className="ui embed">
              <iframe src={Src} />
          </div>
          <div className="ui segment">
              <h4 className="ui header">{video.snippet.title}</h4>
              <p>{video.snippet.description}</p>
          </div>
      </div>
     );
};





export default VideoDetails;