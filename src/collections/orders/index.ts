import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'customerEmail', 'status', 'total', 'createdAt'],
    group: 'E-commerce',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'orderNumber',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique order number (e.g., ORD-2024-001)',
      },
    },
    {
      name: 'userId',
      type: 'text',
      required: true,
      admin: {
        description: 'User ID from frontend',
      },
    },
    {
      name: 'customerEmail',
      type: 'email',
      required: true,
      admin: {
        description: 'Customer email address',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Processing', value: 'processing' },
        { label: 'Shipped', value: 'shipped' },
        { label: 'In Transit', value: 'in_transit' },
        { label: 'Out for Delivery', value: 'out_for_delivery' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Returned', value: 'returned' },
        { label: 'Refunded', value: 'refunded' },
      ],
      admin: {
        description: 'Current order status',
      },
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      admin: {
        description: 'Order items',
      },
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
          admin: {
            description: 'Product ID',
          },
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: {
            description: 'Product name',
          },
        },
        {
          name: 'image',
          type: 'text',
          admin: {
            description: 'Product image URL',
          },
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          min: 0,
          admin: {
            description: 'Unit price',
          },
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          min: 1,
          admin: {
            description: 'Quantity ordered',
          },
        },
        {
          name: 'variant',
          type: 'text',
          admin: {
            description: 'Product variant (flavor, size, etc.)',
          },
        },
      ],
    },
    {
      name: 'subtotal',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Subtotal amount',
      },
    },
    {
      name: 'total',
      type: 'number',
      required: true,
      min: 0,
      admin: {
        description: 'Total order amount',
      },
    },
    {
      name: 'shippingCost',
      type: 'number',
      min: 0,
      admin: {
        description: 'Shipping cost',
      },
    },
    {
      name: 'deliveryMethod',
      type: 'select',
      required: true,
      defaultValue: 'standard',
      options: [
        { label: 'Standard Delivery', value: 'standard' },
        { label: 'Express Delivery', value: 'express' },
        { label: 'Overnight Delivery', value: 'overnight' },
      ],
    },
    {
      name: 'paymentMethod',
      type: 'select',
      required: true,
      options: [
        { label: 'Card', value: 'CARD' },
        { label: 'UPI', value: 'UPI' },
        { label: 'Cash on Delivery', value: 'COD' },
      ],
    },
    {
      name: 'shippingAddress',
      type: 'group',
      required: true,
      admin: {
        description: 'Shipping address information',
      },
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          type: 'textarea',
          required: true,
        },
        {
          name: 'apartment',
          type: 'text',
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          required: true,
        },
        {
          name: 'zipCode',
          type: 'text',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Order notes or special instructions',
      },
    },
    {
  name: 'payment',
  type: 'group',
  fields: [
    { name: 'method', type: 'text' }, // card, upi, cod
    { name: 'status', type: 'select', options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Completed', value: 'completed' },
        { label: 'Failed', value: 'failed' },
    ]},
  ],
},
{
  name: 'delivery',
  type: 'group',
  fields: [
    { name: 'estimatedDelivery', type: 'date' },
    { name: 'actualDelivery', type: 'date' },
    { name: 'carrier', type: 'text' },
    { name: 'trackingNumber', type: 'text' },
  ],
},

{
  name: 'timeline',
  type: 'array',
  fields: [
    { name: 'status', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'text' },
    { name: 'timestamp', type: 'date' },
    { name: 'completed', type: 'checkbox' },
  ],
}
],
}