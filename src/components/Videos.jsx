import React from "react";

const Videos = () => {
  return (
    <div className="videos">
      <div className="header">
        <h1>Watch now</h1>
      </div>
      <div className="video">
        <div className="video-item">
          <div className="img">
            <img src="https://picsum.photos/id/327/400/200" alt="img" />
          </div>
          <div className="headline">
            <p> tech | 7days ago</p>
            <span></span>
            <h1>The Rise of Gourmet Street Food: Trends and Top Picks</h1>
          </div>
        </div>
        <div className="video-item">
          <div  className="img">
            <img src="https://picsum.photos/id/271/400/200" alt="img" />
          </div>

          <div className="headline">
            <p> tech | 7days ago</p>
            <span></span>
            <h1>The Rise of Gourmet Street Food: Trends and Top Picks</h1>
          </div>
        </div>
        <div className="video-item">
          <div  className="img">
            <img src="https://picsum.photos/id/12/400/200" alt="img" />
          </div>

          <div className="headline">
            <p> tech | 7days ago</p>
            <span></span>
            <h1>The Rise of Gourmet Street Food: Trends and Top Picks</h1>
          </div>
        </div>
      </div>

      <div className="arrows"></div>
    </div>
  );
};

export default Videos;
