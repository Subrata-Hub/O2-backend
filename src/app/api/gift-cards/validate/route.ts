// import { NextRequest, NextResponse } from 'next/server'
// import { getPayload } from 'payload'
// import config from '../../../../payload.config'
// import { GiftCards } from '@/collections/GiftCards'

// export async function POST(req: NextRequest) {
//   try {
//     const payload = await getPayload({ config })
//     const { code } = await req.json()

//     if (!code || code.length !== 12) {
//       return NextResponse.json({ error: 'Invalid code' }, { status: 400 })
//     }

//     const result = await payload.find({
//       collection: 'giftCards',
//       where: { code: { equals: code.toUpperCase() } },
//     })

//     if (result.docs.length === 0) {
//       return NextResponse.json({ error: 'Code not found' }, { status: 404 })
//     }

//     const giftCard = result.docs[0]

//     if (!giftCard.isActive) {
//       return NextResponse.json({ error: 'Code already used' }, { status: 400 })
//     }

//     // Mark as used (one-time use)
//     await payload.update({
//       collection: 'giftCards',
//       id: giftCard.id,
//       data: { isActive: false },
//     })

//     return NextResponse.json({ success: true, amount: giftCard.amount })
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed' }, { status: 500 })
//   }
// }


import { NextRequest, NextResponse } from "next/server"
import { getPayload } from "payload"
import config from "../../../../payload.config"

export async function POST(req: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const { code } = await req.json()

    if (!code) {
      return NextResponse.json({ error: "Gift card code is required" }, { status: 400 })
    }

    const result = await payload.find({
      collection: "giftCards",
      where: { code: { equals: code.toUpperCase() } },
    })

    if (result.docs.length === 0) {
      return NextResponse.json({ error: "Gift card not found" }, { status: 404 })
    }

    const giftCard = result.docs[0]

    if (!giftCard.isActive) {
      return NextResponse.json({ error: "Gift card is inactive" }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      balance: giftCard.balance, // ✅ fixed
      expiresAt: giftCard.expiresAt ?? null,
    })
  } catch (error) {
    console.error("Gift card validation error:", error)
    return NextResponse.json({ error: "Failed to validate gift card" }, { status: 500 })
  }
}
