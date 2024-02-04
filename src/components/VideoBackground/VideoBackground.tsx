// VideoBackground.tsx
import React, { useRef, useEffect } from "react";
import "./VideoBackground.css";

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("ended", () => {
        video.play();
      });

      video.play();
    }
  }, []);

  return (
    <div className="video-background">
      <video ref={videoRef} className="video" loop muted>
        <source src="../../../public/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
