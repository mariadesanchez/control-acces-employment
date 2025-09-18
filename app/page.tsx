
// "use client";

// import React, { useRef, useState } from "react";
// import CameraCapture from "../components/CameraCapture";

// export default function Page() {
//   const captureRef = useRef<() => Promise<File | null>>(null);
//   const [nombreCompleto, setNombreCompleto] = useState("");
//   const [uploading, setUploading] = useState(false);
//   const [saved, setSaved] = useState(false);

//   const handleSubmit = async () => {
//     if (!nombreCompleto.trim()) {
//       alert("Completa tu Nombre y Apellido");
//       return;
//     }

//     setUploading(true);

//     try {
//       // 1️⃣ Capturar foto
//       const file = await captureRef.current?.();
//       if (!file) throw new Error("No se pudo capturar la foto");

//       // 2️⃣ Subir a Cloudinary (unsigned)
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

//       const cloudRes = await fetch(
//         `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
//         { method: "POST", body: formData }
//       );

//       const cloudData = await cloudRes.json();
//       if (!cloudRes.ok) throw new Error(cloudData.error?.message || "Error al subir a Cloudinary");

//       // 3️⃣ Guardar en Supabase
//       const saveRes = await fetch("/api/save", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ nombre: nombreCompleto, foto_url: cloudData.secure_url }),
//       });

//       const saveData = await saveRes.json();
//       if (!saveRes.ok) throw new Error(saveData.error || "Error al guardar en Supabase");

//       setSaved(true);
//     } catch (err: any) {
//       console.error(err);
//       alert("❌ Error: " + err.message);
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f2f2f2", padding: 16 }}>
//       <div style={{ background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 4px 8px rgba(0,0,0,0.1)", maxWidth: 400, width: "100%", textAlign: "center" }}>
//         <img src="/Logo.jpeg" alt="Logo" style={{ width: "80%", marginBottom: 10 }} />
//         <input
//           type="text"
//           placeholder="Nombre y Apellido"
//           value={nombreCompleto}
//           onChange={(e) => setNombreCompleto(e.target.value)}
//           style={{ width: "80%", padding: 10, fontSize: 16, borderRadius: 8, border: "1px solid #ccc", textAlign: "center", marginBottom: 12 }}
//         />
//         <CameraCapture captureRef={captureRef} />
//         <button
//           onClick={handleSubmit}
//           disabled={uploading}
//           style={{ marginTop: 16, width: "80%", padding: 10, fontSize: 16, borderRadius: 8, border: "none", background: uploading ? "#aaa" : "#0070f3", color: "#fff", cursor: uploading ? "not-allowed" : "pointer" }}
//         >
//           {uploading ? "Guardando..." : "Guardar"}
//         </button>
//         {saved && <p style={{ color: "green", marginTop: 10 }}>✅ Guardado Exitoso</p>}
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useRef, useState } from "react";
import CameraCapture from "../components/CameraCapture";

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
      // 1️⃣ Capturar foto
      const file = await captureRef.current?.();
      if (!file) throw new Error("No se pudo capturar la foto");

      // 2️⃣ Subir a Cloudinary (unsigned)
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

      const cloudRes = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        { method: "POST", body: formData }
      );

      const cloudData = await cloudRes.json();
      if (!cloudRes.ok) throw new Error(cloudData.error?.message || "Error al subir a Cloudinary");

      // 3️⃣ Guardar en Supabase
      const saveRes = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombreCompleto, foto_url: cloudData.secure_url }),
      });

      const saveData = await saveRes.json();
      if (!saveRes.ok) throw new Error(saveData.error || "Error al guardar en Supabase");

      setSaved(true);
    } catch (err: any) {
      console.error(err);
      alert("❌ Error: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f2f2f2", padding: 16 }}>
      <div style={{ background: "#fff", padding: 20, borderRadius: 12, boxShadow: "0 4px 8px rgba(0,0,0,0.1)", maxWidth: 400, width: "100%", textAlign: "center" }}>
        <img src="/Logo.jpeg" alt="Logo" style={{ width: "80%", marginBottom: 10 }} />
        <input
          type="text"
          placeholder="Nombre y Apellido"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          style={{ width: "80%", padding: 10, fontSize: 16, borderRadius: 8, border: "1px solid #ccc", textAlign: "center", marginBottom: 12 }}
        />
        <CameraCapture captureRef={captureRef} />
        <button
          onClick={handleSubmit}
          disabled={uploading}
          style={{ marginTop: 16, width: "80%", padding: 10, fontSize: 16, borderRadius: 8, border: "none", background: uploading ? "#aaa" : "#0070f3", color: "#fff", cursor: uploading ? "not-allowed" : "pointer" }}
        >
          {uploading ? "Guardando..." : "Guardar"}
        </button>
        {saved && <p style={{ color: "green", marginTop: 10 }}>✅ Guardado Exitoso</p>}
      </div>
    </div>
  );
}
