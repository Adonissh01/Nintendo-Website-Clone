import { useEffect, useState } from "react";

const ScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [screenHeight, setScreenHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateScreenSize);

      return () => {
        window.removeEventListener("resize", updateScreenSize);
      };
    }
  }, []);

  return { screenWidth, screenHeight };
};

export default ScreenSize;
