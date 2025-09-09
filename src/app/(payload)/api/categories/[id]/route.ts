// import { NextRequest, NextResponse } from 'next/server'
// import { getPayload } from 'payload'
// import config from '@/payload.config'
// import { CollectionSlug } from 'payload'

// // GET /api/categories/[id] - Get category by ID
// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   try {
//     const { id } = params
//     const payload = await getPayload({ config })
    
//     const category = await payload.findByID({
//       collection: 'categories' as CollectionSlug,
//       id,
//       depth: 1,
//     })

//     const plainCategory = {
//       id: category.id,
//       name: (category as any).name,
//       slug: (category as any).slug,
//       subcategories: (category as any).subcategories || [],
//       createdAt: category.createdAt,
//       updatedAt: category.updatedAt,
//     }

//     return NextResponse.json({
//       success: true,
//       data: plainCategory,
//     })
//   } catch (error) {
//     console.error('Error fetching category:', error)
//     return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 })
//   }
// }


import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { CollectionSlug } from 'payload'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } // 👈 fix here
) {
  try {
    const { id } = await params  // 👈 await because Next.js gives it as a Promise
    const payload = await getPayload({ config })
    
    const category = await payload.findByID({
      collection: 'categories' as CollectionSlug,
      id,
      depth: 1,
    })

    const plainCategory = {
      id: category.id,
      name: (category as any).name,
      slug: (category as any).slug,
      subcategories: (category as any).subcategories || [],
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    }

    return NextResponse.json({
      success: true,
      data: plainCategory,
    })
  } catch (error) {
    console.error('Error fetching category:', error)
    return NextResponse.json(
      { success: false, error: 'Category not found' },
      { status: 404 }
    )
  }
}
