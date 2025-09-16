// import { NextResponse } from "next/server";
// import cloudinary from "@/lib/cloudinary";

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

//     return NextResponse.json(
//       { url: result.secure_url, public_id: result.public_id },
//       { status: 200 }
//     );
//   } catch (err: any) {
//     console.error("Upload error:", err);
//     return NextResponse.json({ error: err.message || err }, { status: 500 });
//   }
// };

import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export const runtime = "nodejs"; // 🔹 importante para Buffer y upload_stream

export const POST = async (req: Request) => {
  try {
    const form = await req.formData();
    const file = form.get("file") as unknown as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const upload = () =>
      new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "next_front_photos", resource_type: "image" },
          (error: any, result: any) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(buffer);
      });

    const result = await upload();

    return NextResponse.json({ url: result.secure_url, public_id: result.public_id }, { status: 200 });
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: err.message || err }, { status: 500 });
  }
};

