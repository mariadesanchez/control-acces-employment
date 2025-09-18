
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

//       const fd = new FormData();
//       fd.append("file", file);
//       const res = await fetch("/api/upload", { method: "POST", body: fd });
//       if (!res.ok) throw new Error("Error subiendo a Cloudinary");
//       const { url } = await res.json();
//       setCloudUrl(url);

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
//     <main className="page-container">
//       {/* Logo responsivo */}
//       <img src="/Logo.jpeg" alt="Logo" className="logo" />

//       {/* Input centrado */}
//       <div className="input-box">
//         <input
//           type="text"
//           placeholder="Ej: Juan Pérez"
//           value={nombreCompleto}
//           onChange={(e) => setNombreCompleto(e.target.value)}
//           required
//           className="input"
//         />
//       </div>

//       {/* Cámara */}
//       <CameraCapture captureRef={captureRef} />

//       {/* Botón capturar */}
//       <div className="button-box">
//         <button
//           type="button"
//           disabled={uploading}
//           onClick={handleSave}
//           className="circle-btn"
//         >
//           {uploading ? <div className="spinner" /> : null}
//         </button>
//       </div>

//       {/* Mensaje de éxito */}
//       {saved && <div className="success">✅ Guardado Exitoso!</div>}

//       <style>{`
//         .page-container {
//           max-width: 480px;
//           margin: 0 auto;
//           padding: 16px;
//           text-align: center;
//           background-color: #f0f0f0;
//           border-radius: 12px;
//         }

//         .logo {
//           width: 70%;
//           max-width: 220px;
//           margin: 0 auto 10px auto;
//           display: block;
//         }

//         .input-box {
//           margin-bottom: 12px;
//         }

//         .input {
//           width: 70%;
//           max-width: 220px;
//           padding: 8px;
//           font-size: 15px;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//           text-align: center;
//         }

//         .button-box {
//           display: flex;
//           justify-content: center;
//           margin-top: 15px;
//         }

//         .circle-btn {
//           width: 55px;
//           height: 55px;
//           border-radius: 50%;
//           background-color: #4CAF50;
//           border: none;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//         }

//         .spinner {
//           border: 3px solid #fff;
//           border-top: 3px solid transparent;
//           border-radius: 50%;
//           width: 20px;
//           height: 20px;
//           animation: spin 1s linear infinite;
//         }

//         .success {
//           padding: 10px;
//           background: #e6ffe6;
//           border-radius: 6px;
//           margin-top: 12px;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         /* ✅ Media queries para pantallas pequeñas */
//         @media (max-width: 360px) {
//           .logo {
//             width: 85%;
//             max-width: 180px;
//           }

//           .input {
//             width: 85%;
//             max-width: 180px;
//             font-size: 14px;
//             padding: 6px;
//           }

//           .circle-btn {
//             width: 50px;
//             height: 50px;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

"use client";
import React, { useRef, useState } from "react";
import CameraCapture from "../components/CameraCapture";
import { createClient } from "@supabase/supabase-js";

// Inicializamos Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Page() {
  const captureRef = useRef<() => Promise<File | null>>(null);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async () => {
    if (!nombreCompleto.trim()) {
      alert("Completa tu Nombre y Apellido");
      return;
    }

    setUploading(true);
    try {
      // 1. Capturamos foto
      const file = await captureRef.current?.();
      if (!file) {
        alert("No se pudo capturar la foto");
        return;
      }

      // 2. Subimos a nuestra API
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al subir imagen");

      // 3. Guardamos en Supabase
      const { error } = await supabase.from("accesos").insert([
        {
          nombre: nombreCompleto,
          foto_url: data.url,
          fecha_ingreso: new Date().toISOString(),
        },
      ]);
      if (error) throw error;

      setSaved(true);
    } catch (err: any) {
      console.error(err);
      alert("❌ Error: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src="/Logo.jpeg"
          alt="Logo"
          style={{ width: "80%", margin: "0 auto 10px" }}
        />

        {/* Nombre y Apellido */}
        <input
          type="text"
          placeholder="Nombre y Apellido"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          style={{
            width: "80%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center",
            marginBottom: "12px",
          }}
        />

        {/* Cámara */}
        <CameraCapture captureRef={captureRef} />

        <button
          onClick={handleSubmit}
          disabled={uploading}
          style={{
            marginTop: "16px",
            width: "80%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            background: uploading ? "#aaa" : "#0070f3",
            color: "#fff",
            cursor: uploading ? "not-allowed" : "pointer",
          }}
        >
          {uploading ? "Guardando..." : "Guardar"}
        </button>

        {saved && <p style={{ color: "green", marginTop: "10px" }}>✅ Guardado Exitoso</p>}
      </div>
    </div>
  );
}


