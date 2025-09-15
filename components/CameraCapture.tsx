"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  onPhotoTaken: (file: File, dataUrl: string) => void;
};

export default function CameraCapture({ onPhotoTaken }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  useEffect(() => {
    const start = async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: facingMode },
          audio: false,
        });
        setStream(s);
        if (videoRef.current) videoRef.current.srcObject = s;
      } catch (e) {
        console.error("No se pudo acceder a la camara", e);
      }
    };
    start();
    return () => {
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, [facingMode]);

  const capture = () => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
    const blob = dataURItoBlob(dataUrl);
    const file = new File([blob], `photo_${Date.now()}.jpg`, { type: "image/jpeg" });
    onPhotoTaken(file, dataUrl);
  };

  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxHeight: 480, borderRadius: 8, background: "#000" }} />
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => setFacingMode((m) => (m === "user" ? "environment" : "user"))}>
          Cambiar camara
        </button>
        <button type="button" onClick={capture}>
          Tomar foto
        </button>
      </div>
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
