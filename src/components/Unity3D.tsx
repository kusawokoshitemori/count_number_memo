import React, { useRef, useEffect } from "react";

const Unity3D: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <div>
      <h1>Unity3D Demo</h1>
      <video width="640" height="360" controls muted ref={videoRef}>
        {/* publicフォルダ内の動画ファイルを参照 */}
        <source src="/videos/Unity3D.mp4" type="video/mp4" />
        あなたのブラウザは動画タグをサポートしていません。
      </video>
    </div>
  );
};

export default Unity3D;
