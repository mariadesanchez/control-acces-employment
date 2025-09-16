
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

      // Subir a Cloudinary
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Error subiendo a Cloudinary");
      const { url } = await res.json();
      setCloudUrl(url);

      // Guardar en Supabase
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
    <main
  style={{
    maxWidth: "480px",
    margin: "0 auto",
    padding: "16px",
    textAlign: "center",
    backgroundColor: "#f4f4f4", // <- fondo gris claro
  }}
>
      {/* Logo centrado */}
      <img
        src="/Logo.jpeg"
        alt="Logo"
        style={{
          width: "200px", // tamaño más grande
          margin: "0 auto 20px auto",
          display: "block",
        
        }}
      />

      {/* Input centrado */}
      <div style={{ marginBottom: "16px" }}>
        {/* <label
          style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Nombre y Apellido
        </label> */}
        <input
          type="text"
          placeholder="Ej: Juan Pérez"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
          style={{
            width: "50%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            textAlign: "center", // ✅ centrado horizontalmente
          }}
        />
      </div>

      {/* Cámara */}
      <CameraCapture captureRef={captureRef} />

      {/* Botón capturar */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <button
          type="button"
          disabled={uploading}
          onClick={handleSave}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            backgroundColor: "#4CAF50",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          {uploading ? (
            <div
              style={{
                border: "3px solid #fff",
                borderTop: "3px solid transparent",
                borderRadius: "50%",
                width: 24,
                height: 24,
                animation: "spin 1s linear infinite",
              }}
            />
          ) : null}
        </button>
      </div>

      {/* Mensaje de éxito */}
      {saved && (
        <div
          style={{
            padding: 10,
            background: "#e6ffe6",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          ✅ Guardado Exitoso!
          {/* {cloudUrl && (
            <div>
              URL:{" "}
              <a href={cloudUrl} target="_blank" rel="noreferrer">
                {cloudUrl}
              </a>
            </div>
          )} */}
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}

