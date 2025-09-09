import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '../../../payload.config'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    const payload = await getPayload({ config })

    if (userId) {
      const result = await payload.find({
        collection: 'orders',
        where: {
          userId: {
            equals: userId,
          },
        },
        sort: '-createdAt',
        limit: 100,
      })
      return NextResponse.json({ success: true, orders: result.docs })
    } else {
      const orders = await payload.find({
        collection: 'orders',
        sort: '-createdAt',
        limit: 100
      })
      return NextResponse.json(orders)
    }
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const payload = await getPayload({ config })

    console.log('Creating order with data:', data)
    console.log('Payment method received:', data.paymentMethod)
    console.log('Payment method type:', typeof data.paymentMethod)

    const orderData = {
      orderNumber: data.orderNumber || `ORD-${Date.now()}`,
      userId: data.userId || 'temp-user-id',
      customerEmail: data.customerEmail,
      status: 'pending' as const,
      items: data.items?.map((item: any) => ({
        id: String(item.product || item.id),
        name: String(item.name),
        image: item.image || '',
        price: Number(item.price),
        quantity: Number(item.quantity),
        variant: item.variant || '',
      })) || [],
      subtotal: Number(data.subtotal || data.totalAmount || data.total || 0),
      total: Number(data.totalAmount || data.total || 0),
      shippingCost: Number(data.shippingCost || 0),
      deliveryMethod: (data.deliveryMethod || 'standard') as 'standard' | 'express' | 'overnight',
      paymentMethod: String(data.paymentMethod || 'COD').toUpperCase() as 'CARD' | 'UPI' | 'COD',
      shippingAddress: {
        firstName: String(data.shippingAddress?.firstName || ''),
        lastName: String(data.shippingAddress?.lastName || ''),
        address: String(data.shippingAddress?.address || ''),
        apartment: data.shippingAddress?.apartment || '',
        city: String(data.shippingAddress?.city || ''),
        state: String(data.shippingAddress?.state || ''),
        zipCode: String(data.shippingAddress?.zipCode || ''),
        phone: String(data.shippingAddress?.phone || ''),
      },
      notes: data.notes || '',
    }

    const order = await payload.create({
      collection: 'orders',
      data: orderData,
    })

    console.log('Order created successfully:', order)
    return NextResponse.json({ success: true, doc: order, order })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}