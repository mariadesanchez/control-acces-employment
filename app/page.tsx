"use client";
import React, { useState } from "react";
import CameraCapture from "../components/CameraCapture";

export default function Page() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [cloudUrl, setCloudUrl] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const onPhotoTaken = (file: File, dataUrl: string) => {
    setPhotoFile(file);
    setPhotoPreview(dataUrl);
    setCloudUrl(null);
    setSaved(false);
  };

  const uploadToCloudinary = async (): Promise<string> => {
    if (!photoFile) throw new Error("No hay foto para subir");
    const fd = new FormData();
    fd.append("file", photoFile);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err?.error || "Error subiendo imagen");
    }
    const json = await res.json();
    return json.url as string;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setSaved(false);
    try {
      const url = await uploadToCloudinary();
      setCloudUrl(url);

      const res = await fetch("/api/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido, url_foto: url }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j?.error || "Error guardando en supabase");

      setSaved(true);
    } catch (err: any) {
      alert("Error: " + (err.message || err));
    } finally {
      setUploading(false);
    }
  };

  return (
    <main style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      <h1>Registrar Foto</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <div>
          <label>Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Apellido</label>
          <input value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>

        <div>
          <label>Camara</label>
          <CameraCapture onPhotoTaken={onPhotoTaken} />
        </div>

        {photoPreview && (
          <div>
            <p>Previsualización:</p>
            <img src={photoPreview} alt="preview" style={{ width: "100%", borderRadius: 8 }} />
          </div>
        )}

        {cloudUrl && (
          <div>
            <strong>Guardado en Cloudinary:</strong>
            <div>
              <a href={cloudUrl} target="_blank" rel="noreferrer">{cloudUrl}</a>
            </div>
          </div>
        )}

        <div>
          <button type="submit" disabled={uploading}>{uploading ? "Guardando..." : "Enviar y Guardar"}</button>
        </div>

        {saved && (
          <div style={{ padding: 10, background: "#e6ffe6", borderRadius: 6 }}>
            ✅ Guardado Exitoso!
            {cloudUrl && (
              <div>
                URL: <a href={cloudUrl} target="_blank" rel="noreferrer">{cloudUrl}</a>
              </div>
            )}
          </div>
        )}
      </form>
    </main>
  );
}
