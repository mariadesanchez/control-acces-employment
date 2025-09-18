
// import { NextResponse } from "next/server";
// import { supabaseServer } from "@/lib/supabaseServer";

// export const POST = async (req: Request) => {
//   try {
//     const body = await req.json();
//     const { nombre_completo, url_foto } = body;

//     if (!nombre_completo || !url_foto) {
//       return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
//     }

//     const fecha_hora_ingreso = new Date().toISOString();

//     const { data, error } = await supabaseServer
//       .from("acces_employment") // tabla actualizada
//       .insert([{ nombre_completo, url_foto, fecha_hora_ingreso }]);

//     if (error) {
//       console.error("Supabase insert error:", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ ok: true, record: data });
//   } catch (err: any) {
//     console.error(err);
//     return NextResponse.json({ error: err.message || err }, { status: 500 });
//   }
// };

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { nombre, foto_url } = await req.json();

    const { error } = await supabase.from("acces_employment").insert([
      {
        nombre_completo: nombre,
        url_foto: foto_url,
        fecha_hora_ingreso: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Save error:", err);
    return NextResponse.json(
      { error: err.message || "Error al guardar" },
      { status: 500 }
    );
  }
}
