import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [twitter, setTwitter] = useState(0);
  const [youtube, setYoutube] = useState(0);

  useEffect(() => {
    const updateCounter = () => {
      const followArr = [12000, 3000];

      const incrementT = followArr[0] / 1000;

      if (twitter < followArr[0]) {
        let valueT = Math.ceil(twitter + incrementT);
        setTwitter(valueT);
      } else {
        setTwitter(followArr[0]);
      }

      const incrementY = followArr[1] / 1000;

      if (youtube < followArr[1]) {
        let valueY = Math.ceil(youtube + incrementY);
        setYoutube(valueY);
      } else {
        setYoutube(followArr[1]);
      }

      if (twitter === followArr[0] && youtube === followArr[1]) {
        clearInterval(intervalHandler);
      }
    };
    const intervalHandler = setInterval(updateCounter, 0.1);
    return () => clearInterval(intervalHandler);
  });

  return (
    <div className="container">
      <div className="counter">{twitter}</div>
      <span>Twitter Followers</span>
      <div className="counter">{youtube}</div>
      <span>Youtube Subscribers</span>
    </div>
  );
}
