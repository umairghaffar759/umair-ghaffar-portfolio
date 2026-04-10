import { useEffect, useState } from "react";
import "./styles/Loading.css"; 
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [isLoaded, setIsLoaded] = useState(false);

  // Jab 100% ho jaye to thora sa mazeed delay taake model textures ready ho saken
  if (percent >= 100 && !isLoaded) {
    setTimeout(() => {
      setIsLoaded(true);
    }, 400); 
  }

  useEffect(() => {
    if (isLoaded) {
      import("./utils/initialFX").then((module) => {
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX(); 
          }
          setIsLoading(false); 
        }, 500);
      });
    }
  }, [isLoaded, setIsLoading]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(10px)",
        color: "#00FFA3",
        padding: "10px 20px",
        borderRadius: "8px",
        fontFamily: "monospace",
        fontSize: "14px",
        letterSpacing: "1px",
        pointerEvents: "none", 
        boxShadow: "0 4px 15px rgba(0,255,163,0.2)",
        transition: "opacity 0.3s ease-out",
      }}
    >
      {/* Agar 100 ho jaye to 'System Ready' likha ayega */}
      {percent >= 100 ? "System Ready" : `Loading Assets... ${percent}%`}
    </div>
  );
};

export default Loading;

// YAHAN SUPER SONIC SPEED LAGAYI HAI (95% JUMP MAGIC)
export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  // Browser freeze hone se pehle 95% tak rocket ki tarah bhagay ga!
  let interval = setInterval(() => {
    if (percent < 95) {
      // Har dafa 10-25% ka chakka marega!
      let rand = Math.floor(Math.random() * 15) + 10; 
      percent = percent + rand;
      
      // FIX: 95 par aakar break lag jayegi aur model ka wait karega
      if (percent >= 95) {
        percent = 95;
        clearInterval(interval);
      }
      setLoading(percent);
    } else {
      clearInterval(interval);
    }
  }, 10); // 10 milliseconds (Maximum Fast)

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      // Jab model background mein finally ready ho jayega, direct 100% hit karega
      interval = setInterval(() => {
        if (percent < 100) {
          percent += 1;
          setLoading(percent);
        } else {
          resolve(100);
          clearInterval(interval);
        }
      }, 10); // 95 se 100 tak quick tick karega real feel ke liye
    });
  }
  return { loaded, percent, clear };
};