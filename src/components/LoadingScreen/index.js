import React from "react";
import "./styles.scss";
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { Stack } from "@mui/material";

const LoadingScreen = () => {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    // console.log(ref.current.style.transform);
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });
  return (
    <Stack
      sx={{ height: "100%" }}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div className="container">
        <div className="cube" ref={ref}>
          <div className="side front" />
          <div className="side left" />
          <div className="side right" />
          <div className="side top" />
          <div className="side bottom" />
          <div className="side back" />
        </div>
      </div>
    </Stack>
  );
};

export default LoadingScreen;
