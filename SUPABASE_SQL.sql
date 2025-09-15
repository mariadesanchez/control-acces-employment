-- Supabase table for storing photos
create extension if not exists "uuid-ossp";

create table public.fotos_usuarios (
  id uuid default uuid_generate_v4() primary key,
  nombre text not null,
  apellido text not null,
  url_foto text not null,
  fecha_hora_ingreso timestamptz not null default now()
);
