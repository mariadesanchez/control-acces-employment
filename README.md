# Next Photo App (Cloudinary + Supabase)

Proyecto Next.js (App Router, TypeScript) que:
- toma foto con la cámara frontal,
- sube la imagen a Cloudinary,
- recibe la URL y la muestra,
- guarda nombre, apellido, url_foto y fecha_hora_ingreso en Supabase.

Pasos rápidos:
1. Copiar `.env.example` a `.env.local` y completar variables.
2. `npm install`
3. `npm run dev`
4. Abrir `http://localhost:3000`

Tabla SQL (ejecutar en Supabase SQL editor):

```sql
create extension if not exists "uuid-ossp";

create table public.fotos_usuarios (
  id uuid default uuid_generate_v4() primary key,
  nombre text not null,
  apellido text not null,
  url_foto text not null,
  fecha_hora_ingreso timestamptz not null default now()
);
```
