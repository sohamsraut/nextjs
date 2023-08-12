import LargeDeviceView from "@/largeDeviceView";
import { useState, useEffect } from "react";
import LoaderComponent from "@/components/loader";

// #1b1b1b and #ffb400
export default function home() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined
    });

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }

      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Don't forget to remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  console.log(windowSize); // < 768 => display change
  // if (windowSize.width === undefined || !loaded) {
  //   setTimeout(() => {setLoaded(true)}, 2000);
  //   return (<LoaderComponent />);
  // } else if (windowSize.width > 750) {
      return (<LargeDeviceView />)
  // } else {
  //   return <LoaderComponent />;
  // }
}