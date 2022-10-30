import React, { useEffect, useRef, useState } from "react";
// const LinearProgress = React.lazy(() => import("@material-ui/core/LinearProgress"));

// import MenuIcon from "../../assets/images/icon/Orion-Full-Color.svg";

export default function LinearBuffer() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => { });
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const [checked, setChecked] = useState(true);

  return (
    <div className="orion-loading">
      <div>
        <div
          className="orion-loading__icon"
          // style={{ backgroundImage: `url(${MenuIcon})` }}
        >
          {/* <img src={MenuIcon} width="10vw" height="auto" alt="logo" /> */}
        </div>
        <React.Suspense fallback={'Please Wait...'}>
          {/* <LinearProgress
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
          /> */}
          {/* <LinearProgress /> */}\
          <svg className="animate-bounce w-6 h-6 ..."></svg>
        </React.Suspense>
      </div>
    </div>
  );
}
