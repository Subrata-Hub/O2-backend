// import { NextRequest, NextResponse } from 'next/server'
// import { getPayload } from 'payload'
// import config from '../../../../payload.config'

// export async function POST(req: NextRequest) {
//   try {
//     const payload = await getPayload({ config })
//     const { amount } = await req.json()

//     // Generate unique 12-digit code (numbers + alphabet)
//     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let code = ''
//     for (let i = 0; i < 12; i++) {
//       code += chars.charAt(Math.floor(Math.random() * chars.length))
//     }

//     // Save to MongoDB
//     const giftCard = await payload.create({
//       collection: 'gift-cards',
//       data: {
//         code,
//         amount: amount || 0,
//         balance: amount || 0,
//         isActive: true,
//       },
//     })

//     return NextResponse.json({ success: true, code: giftCard.code })
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed' }, { status: 500 })
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { CollectionSlug } from "payload";

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const body = await request.json();
    const { amount } = body;

    const code = Math.random().toString(36).substring(2, 10).toUpperCase();

    const giftCard = await payload.create({
      collection: "giftCards" as CollectionSlug, // ✅ use correct slug
      data: {
        code,
        balance: amount || 0, // store requested amount in balance
        isActive: true,
      },
    });

    return NextResponse.json({ success: true, data: giftCard });
  } catch (error) {
    console.error("Error generating gift card:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate gift card" },
      { status: 500 }
    );
  }
}
