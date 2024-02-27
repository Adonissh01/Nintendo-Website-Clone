// import React, { useState, useEffect } from "react";

// const Progress = ({ totalBars }) => {
//   const [currentBar, setCurrentBar] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBar((prevBar) => (prevBar + 1) % totalBars);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [totalBars]);

//   return (
//     <div className="flex gap-5">
//       {[...Array(totalBars)].map((_, index) => (
//         <ProgressBar key={index} isActive={index === currentBar} />
//       ))}
//     </div>
//   );
// };

// const ProgressBar = ({ isActive }) => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let interval;

//     if (isActive) {
//       interval = setInterval(() => {
//         setProgress((prevProgress) => {
//           // If progress reaches 100, reset it to 0
//           if (prevProgress === 100) return 0;
//           return prevProgress + 1;
//         });
//       }, 40); // Reduced interval duration for smoother animation
//     }

//     return () => clearInterval(interval);
//   }, [isActive]);

//   return (
//     <div className={`progress-bar ${isActive ? "active" : ""} flex flex-row`}>
//       <progress className="" value={progress} max="100" />
//     </div>
//   );
// };

// export default Progress;
