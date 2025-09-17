
// "use client";
// import React, { useState, useRef } from "react";
// import CameraCapture from "../components/CameraCapture";

// export default function Page() {
//   const [nombreCompleto, setNombreCompleto] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const [cloudUrl, setCloudUrl] = useState<string | null>(null);
//   const [saved, setSaved] = useState(false);

//   const captureRef = useRef<() => Promise<File | null>>(async () => null);

//   const handleSave = async () => {
//     if (!nombreCompleto.trim()) {
//       alert("Por favor, complete el nombre y apellido antes de continuar.");
//       return;
//     }

//     setUploading(true);
//     setSaved(false);

//     try {
//       const file = await captureRef.current();
//       if (!file) throw new Error("No se pudo capturar la foto");

//       // Subir a Cloudinary
//       const fd = new FormData();
//       fd.append("file", file);
//       const res = await fetch("/api/upload", { method: "POST", body: fd });
//       if (!res.ok) throw new Error("Error subiendo a Cloudinary");
//       const { url } = await res.json();
//       setCloudUrl(url);

//       // Guardar en Supabase
//       const resp = await fetch("/api/save", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ nombre_completo: nombreCompleto, url_foto: url }),
//       });
//       const j = await resp.json();
//       if (!resp.ok) throw new Error(j?.error || "Error guardando en Supabase");

//       setSaved(true);
//     } catch (err: any) {
//       alert("Error: " + (err.message || err));
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <main
//   style={{
//     maxWidth: "480px",
//     margin: "0 auto",
//     padding: "16px",
//     textAlign: "center",
//     backgroundColor: "#f4f4f4", // <- fondo gris claro
//   }}
// >
//       {/* Logo centrado */}
//       <img
//         src="/Logo.jpeg"
//         alt="Logo"
//         style={{
//           width: "200px", // tamaño más grande
//           margin: "0 auto 20px auto",
//           display: "block",
        
//         }}
//       />

//       {/* Input centrado */}
//       <div style={{ marginBottom: "16px" }}>
//         {/* <label
//           style={{
//             display: "block",
//             fontWeight: "bold",
//             marginBottom: "8px",
//           }}
//         >
//           Nombre y Apellido
//         </label> */}
//         <input
//           type="text"
//           placeholder="Ej: Juan Pérez"
//           value={nombreCompleto}
//           onChange={(e) => setNombreCompleto(e.target.value)}
//           required
//           style={{
//             width: "50%",
//             padding: "10px",
//             fontSize: "16px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             textAlign: "center", // ✅ centrado horizontalmente
//           }}
//         />
//       </div>

//       {/* Cámara */}
//       <CameraCapture captureRef={captureRef} />

//       {/* Botón capturar */}
//       <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
//         <button
//           type="button"
//           disabled={uploading}
//           onClick={handleSave}
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: "50%",
//             backgroundColor: "#4CAF50",
//             border: "none",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         >
//           {uploading ? (
//             <div
//               style={{
//                 border: "3px solid #fff",
//                 borderTop: "3px solid transparent",
//                 borderRadius: "50%",
//                 width: 24,
//                 height: 24,
//                 animation: "spin 1s linear infinite",
//               }}
//             />
//           ) : null}
//         </button>
//       </div>

//       {/* Mensaje de éxito */}
//       {saved && (
//         <div
//           style={{
//             padding: 10,
//             background: "#e6ffe6",
//             borderRadius: 6,
//             marginTop: 15,
//           }}
//         >
//           ✅ Guardado Exitoso!
//           {/* {cloudUrl && (
//             <div>
//               URL:{" "}
//               <a href={cloudUrl} target="_blank" rel="noreferrer">
//                 {cloudUrl}
//               </a>
//             </div>
//           )} */}
//         </div>
//       )}

//       <style>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </main>
//   );
// }

"use client";
import React, { useState, useRef } from "react";
import CameraCapture from "../components/CameraCapture";

export default function Page() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [uploading, setUploading] = useState(false);
  const [cloudUrl, setCloudUrl] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const captureRef = useRef<() => Promise<File | null>>(async () => null);

  const handleSave = async () => {
    if (!nombreCompleto.trim()) {
      alert("Por favor, complete el nombre y apellido antes de continuar.");
      return;
    }

    setUploading(true);
    setSaved(false);

    try {
      const file = await captureRef.current();
      if (!file) throw new Error("No se pudo capturar la foto");

      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Error subiendo a Cloudinary");
      const { url } = await res.json();
      setCloudUrl(url);

      const resp = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre_completo: nombreCompleto, url_foto: url }),
      });
      const j = await resp.json();
      if (!resp.ok) throw new Error(j?.error || "Error guardando en Supabase");

      setSaved(true);
    } catch (err: any) {
      alert("Error: " + (err.message || err));
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="page-container">
      {/* Logo responsivo */}
      <img src="/Logo.jpeg" alt="Logo" className="logo" />

      {/* Input centrado */}
      <div className="input-box">
        <input
          type="text"
          placeholder="Ej: Juan Pérez"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
          className="input"
        />
      </div>

      {/* Cámara */}
      <CameraCapture captureRef={captureRef} />

      {/* Botón capturar */}
      <div className="button-box">
        <button
          type="button"
          disabled={uploading}
          onClick={handleSave}
          className="circle-btn"
        >
          {uploading ? <div className="spinner" /> : null}
        </button>
      </div>

      {/* Mensaje de éxito */}
      {saved && <div className="success">✅ Guardado Exitoso!</div>}

      <style>{`
        .page-container {
          max-width: 480px;
          margin: 0 auto;
          padding: 16px;
          text-align: center;
          background-color: #f0f0f0;
          border-radius: 12px;
        }

        .logo {
          width: 70%;
          max-width: 220px;
          margin: 0 auto 10px auto;
          display: block;
        }

        .input-box {
          margin-bottom: 12px;
        }

        .input {
          width: 70%;
          max-width: 220px;
          padding: 8px;
          font-size: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          text-align: center;
        }

        .button-box {
          display: flex;
          justify-content: center;
          margin-top: 15px;
        }

        .circle-btn {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: #4CAF50;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .spinner {
          border: 3px solid #fff;
          border-top: 3px solid transparent;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        .success {
          padding: 10px;
          background: #e6ffe6;
          border-radius: 6px;
          margin-top: 12px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* ✅ Media queries para pantallas pequeñas */
        @media (max-width: 360px) {
          .logo {
            width: 85%;
            max-width: 180px;
          }

          .input {
            width: 85%;
            max-width: 180px;
            font-size: 14px;
            padding: 6px;
          }

          .circle-btn {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </main>
  );
}
