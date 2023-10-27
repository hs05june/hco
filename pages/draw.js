import React, { useEffect, useRef } from "react";

const Draw = () => {
  const canvasRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvasRef.current.addEventListener("mousedown", (event) => {
      isDrawing = true;
      [lastX, lastY] = [
        event.clientX - event.target.offsetLeft,
        event.clientY - event.target.offsetTop,
      ];
    });

    canvasRef.current.addEventListener("mousemove", (event) => {
      if (!isDrawing) return;
      const x = event.clientX - event.target.offsetLeft;
      const y = event.clientY - event.target.offsetTop;
      ctx.current.beginPath();
      ctx.current.moveTo(lastX, lastY);
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
      [lastX, lastY] = [x, y];
    });

    canvasRef.current.addEventListener("mouseup", () => {
      isDrawing = false;
    });

    canvasRef.current.addEventListener("mouseleave", () => {
      isDrawing = false;
    });
  }, []);

  const clearCanvas = () => {
    ctx.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  return (
    <div className="w-screen h-screen items-center flex flex-col">
      <div className="navbtns h-auto my-auto items-center flex flex-col">
        <canvas
          width={500}
          height={500}
          ref={canvasRef}
          className="background-white m-auto textColor-black"
        />

        <button onClick={clearCanvas} className=" p-2 mt-4 mx-auto">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Draw;
