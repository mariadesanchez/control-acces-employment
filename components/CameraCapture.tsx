// "use client";
// import React, { useEffect, useRef, useImperativeHandle } from "react";

// type Props = {
//   captureRef: React.MutableRefObject<() => Promise<File | null>>;
// };

// export default function CameraCapture({ captureRef }: Props) {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const streamRef = useRef<MediaStream | null>(null);

//   useEffect(() => {
//     const start = async () => {
//       try {
//         const s = await navigator.mediaDevices.getUserMedia({
//           video: { facingMode: "user" },
//           audio: false,
//         });
//         streamRef.current = s;
//         if (videoRef.current) videoRef.current.srcObject = s;
//       } catch (e) {
//         console.error("No se pudo acceder a la cámara", e);
//       }
//     };
//     start();
//     return () => {
//       streamRef.current?.getTracks().forEach((t) => t.stop());
//     };
//   }, []);

//   // expone la función capture al padre
//   useImperativeHandle(captureRef, () => async () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;
//     if (!video || !canvas) return null;

//     canvas.width = video.videoWidth || 640;
//     canvas.height = video.videoHeight || 480;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return null;

//     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//     const dataUrl = canvas.toDataURL("image/jpeg", 0.9);

//     const blob = dataURItoBlob(dataUrl);
//     return new File([blob], `photo_${Date.now()}.jpg`, { type: "image/jpeg" });
//   });

//   const dataURItoBlob = (dataURI: string) => {
//     const byteString = atob(dataURI.split(",")[1]);
//     const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
//     const ab = new ArrayBuffer(byteString.length);
//     const ia = new Uint8Array(ab);
//     for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
//     return new Blob([ab], { type: mimeString });
//   };

//   return (
//     <div>
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         style={{
//           width: "100%",
//           maxHeight: 480,
//           borderRadius: 8,
//           background: "#000",
//         }}
//       />
//       <canvas ref={canvasRef} style={{ display: "none" }} />
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useImperativeHandle } from "react";

type Props = {
  captureRef: React.MutableRefObject<() => Promise<File | null>>;
};

export default function CameraCapture({ captureRef }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const start = async () => {
      try {
        const s = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        streamRef.current = s;
        if (videoRef.current) videoRef.current.srcObject = s;
      } catch (e) {
        console.error("No se pudo acceder a la cámara", e);
      }
    };
    start();
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  // expone la función capture al padre
  useImperativeHandle(captureRef, () => async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return null;

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);

    const blob = dataURItoBlob(dataUrl);
    return new File([blob], `photo_${Date.now()}.jpg`, { type: "image/jpeg" });
  });

  const dataURItoBlob = (dataURI: string) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
    return new Blob([ab], { type: mimeString });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: "85%",       // más chico en móviles
          maxWidth: "280px",  // nunca más grande que 280px
          aspectRatio: "3/4", // mantiene proporción tipo retrato
          borderRadius: 12,
          background: "#000",
          objectFit: "cover", // llena el cuadro sin deformarse
        }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

