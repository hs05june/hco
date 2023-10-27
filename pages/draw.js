import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const Draw = () => {
  const canvasRef = useRef();
  const ctx = useRef();
  const btnRef = useRef();
  const socket = io("http://localhost:8080", {
    withCredentials: true,
  });

  useEffect(() => {
    ctx.current = canvasRef.current.getContext("2d");

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function handleMouseDown(event) {
      isDrawing = true;
      [lastX, lastY] = [
        event.clientX - event.target.offsetLeft,
        event.clientY - event.target.offsetTop,
      ];
      socket.emit("draw", { type: "start", x: lastX, y: lastY });
    }

    function handleMouseMove(event) {
      if (!isDrawing) return;
      const x = event.clientX - event.target.offsetLeft;
      const y = event.clientY - event.target.offsetTop;
      ctx.current.beginPath();
      ctx.current.moveTo(lastX, lastY);
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
      [lastX, lastY] = [x, y];
      socket.emit("draw", { type: "draw", x: lastX, y: lastY });
    }

    function handleMouseUp() {
      isDrawing = false;
    }

    function handleMouseLeave() {
      isDrawing = false;
    }

    canvasRef.current.addEventListener("mousedown", handleMouseDown);

    canvasRef.current.addEventListener("mousemove", handleMouseMove);

    canvasRef.current.addEventListener("mouseup", handleMouseUp);

    canvasRef.current.addEventListener("mouseleave", handleMouseLeave);

    btnRef.current.addEventListener("click", () => {
      clearCanvas();
      socket.emit("erase");
    });

    socket.on("draw", (data) => {
      if (data.type === "start") {
        ctx.current.beginPath();
        ctx.current.moveTo(data.x, data.y);
      } else if (data.type === "draw") {
        ctx.current.lineTo(data.x, data.y);
        ctx.current.stroke();
      }
    });

    socket.on("erase", () => {
      clearCanvas();
    });

    return () => {
      canvasRef.current.removeEventListener("mousedown", handleMouseDown);
      canvasRef.current.removeEventListener("mousemove", handleMouseMove);
      canvasRef.current.removeEventListener("mouseup", handleMouseUp);
      canvasRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
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
        <p className="textColor-white mb-6 text-[3vw]">
          Share the url above to connect with different people and draw!
        </p>
        <canvas
          width={500}
          height={500}
          ref={canvasRef}
          className="background-white m-auto textColor-black"
        />

        <button ref={btnRef} className=" p-2 mt-4 mx-auto">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Draw;
