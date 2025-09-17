

// import { NextResponse } from "next/server";
// import cloudinary from "../../../lib/cloudinary";

// export const runtime = "nodejs"; // 🔹 importante para Buffer y upload_stream

// export const POST = async (req: Request) => {
//   try {
//     const form = await req.formData();
//     const file = form.get("file") as unknown as File | null;

//     if (!file) {
//       return NextResponse.json({ error: "No file" }, { status: 400 });
//     }

//     const arrayBuffer = await file.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     const upload = () =>
//       new Promise<any>((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { folder: "next_front_photos", resource_type: "image" },
//           (error: any, result: any) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         stream.end(buffer);
//       });

//     const result = await upload();

//     return NextResponse.json({ url: result.secure_url, public_id: result.public_id }, { status: 200 });
//   } catch (err: any) {
//     console.error("Upload error:", err);
//     return NextResponse.json({ error: err.message || err }, { status: 500 });
//   }
// };

import { NextResponse } from "next/server";
import cloudinary from "../../../lib/cloudinary";

export const runtime = "nodejs"; // Necesario en Vercel (NO usar Edge)

export const POST = async (req: Request) => {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    // Convertimos File → Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Subida a Cloudinary
    const upload = () =>
      new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "next_front_photos", // opcional, organiza en carpeta
            resource_type: "image",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

    const result = await upload();

    return NextResponse.json(
      { url: result.secure_url, public_id: result.public_id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { error: err.message || "Upload failed" },
      { status: 500 }
    );
  }
};
