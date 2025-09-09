// 'use client'
// import React from 'react'

// const OrderView = ({ doc }) => {
//   const handlePrint = () => {
//     window.print()
//   }

//   if (!doc) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
//         <h1 style={{ margin: 0, color: '#333' }}>Order #{doc.orderNumber || 'N/A'}</h1>
//         <button 
//           onClick={handlePrint}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#007cba',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           🖨️ Print Order
//         </button>
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
//         <div>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Customer Details</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p><strong>{doc.customerName || 'N/A'}</strong></p>
//             <p>{doc.customerEmail || 'N/A'}</p>
//           </div>
//         </div>

//         <div>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Order Info</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p><strong>Status:</strong> <span style={{ 
//               padding: '4px 8px', 
//               borderRadius: '12px', 
//               backgroundColor: doc.status === 'delivered' ? '#d4edda' : doc.status === 'pending' ? '#fff3cd' : '#d1ecf1',
//               color: doc.status === 'delivered' ? '#155724' : doc.status === 'pending' ? '#856404' : '#0c5460'
//             }}>{doc.status || 'pending'}</span></p>
//             <p><strong>Date:</strong> {doc.createdAt ? new Date(doc.createdAt).toLocaleDateString() : 'N/A'}</p>
//             <p><strong>Payment:</strong> {doc.paymentMethod || 'N/A'}</p>
//           </div>
//         </div>
//       </div>

//       {doc.shippingAddress && (
//         <div style={{ marginBottom: '30px' }}>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Shipping Address</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p><strong>{doc.shippingAddress.firstName} {doc.shippingAddress.lastName}</strong></p>
//             <p>{doc.shippingAddress.address}</p>
//             {doc.shippingAddress.apartment && <p>{doc.shippingAddress.apartment}</p>}
//             <p>{doc.shippingAddress.city}, {doc.shippingAddress.state} {doc.shippingAddress.pincode}</p>
//             <p>📞 {doc.shippingAddress.phone}</p>
//           </div>
//         </div>
//       )}

//       {doc.items && doc.items.length > 0 && (
//         <div style={{ marginBottom: '30px' }}>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Order Items</h3>
//           {doc.items.map((item, index) => (
//             <div key={index} style={{ 
//               backgroundColor: '#f9f9f9', 
//               padding: '15px', 
//               borderRadius: '6px', 
//               marginBottom: '10px',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center'
//             }}>
//               <div>
//                 <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Product ID: {item.product}</p>
//                 <p style={{ margin: 0, color: '#666' }}>Quantity: {item.quantity}</p>
//               </div>
//               <div style={{ textAlign: 'right' }}>
//                 <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>₹{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div style={{ 
//         backgroundColor: '#007cba', 
//         color: 'white', 
//         padding: '20px', 
//         borderRadius: '6px',
//         textAlign: 'center'
//       }}>
//         <h2 style={{ margin: 0 }}>Total Amount: ₹{doc.totalAmount || 0}</h2>
//       </div>

//       {doc.notes && (
//         <div style={{ marginTop: '30px' }}>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Notes</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p>{doc.notes}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default OrderView


// 'use client'
// import React from 'react'
// // import { Order } from 'payload/generated-types' // 1. Import the Order type
// import type { Order } from '../payload-types'
 

// 2. Define an interface for your component's props
// interface OrderViewProps {
//   doc: Order;
// }

// // 3. Apply the props interface to your component
// const OrderView: React.FC<OrderViewProps> = ({ doc }) => {
//   const handlePrint = () => {
//     window.print()
//   }

//   if (!doc) {
//     return <div>Loading...</div>
//   }

//   // ... the rest of your component's JSX remains the same
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
//         <h1 style={{ margin: 0, color: '#333' }}>Order #{doc.orderNumber || 'N/A'}</h1>
//         <button 
//           onClick={handlePrint}
//           style={{
//             padding: '10px 20px',
//             backgroundColor: '#007cba',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           🖨️ Print Order
//         </button>
//       </div>

//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
//         <div>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Customer Details</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p><strong>{doc.customerName || 'N/A'}</strong></p>
//             <p>{doc.customerEmail || 'N/A'}</p>
//           </div>
//         </div>

//         <div>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Order Info</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p><strong>Status:</strong> <span style={{ 
//               padding: '4px 8px', 
//               borderRadius: '12px', 
//               backgroundColor: doc.status === 'delivered' ? '#d4edda' : doc.status === 'pending' ? '#fff3cd' : '#d1ecf1',
//               color: doc.status === 'delivered' ? '#155724' : doc.status === 'pending' ? '#856404' : '#0c5460'
//             }}>{doc.status || 'pending'}</span></p>
//             <p><strong>Date:</strong> {doc.createdAt ? new Date(doc.createdAt).toLocaleDateString() : 'N/A'}</p>
//             <p><strong>Payment:</strong> {doc.paymentMethod || 'N/A'}</p>
//           </div>
//         </div>
//       </div>

//       {doc.shippingAddress && (
//         <div style={{ marginBottom: '30px' }}>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Shipping Address</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p><strong>{doc.shippingAddress.firstName} {doc.shippingAddress.lastName}</strong></p>
//             <p>{doc.shippingAddress.address}</p>
//             {doc.shippingAddress.apartment && <p>{doc.shippingAddress.apartment}</p>}
//             <p>{doc.shippingAddress.city}, {doc.shippingAddress.state} {doc.shippingAddress.pincode}</p>
//             <p>📞 {doc.shippingAddress.phone}</p>
//           </div>
//         </div>
//       )}

//       {doc.items && doc.items.length > 0 && (
//         <div style={{ marginBottom: '30px' }}>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Order Items</h3>
//           {doc.items.map((item, index) => (
//             <div key={index} style={{ 
//               backgroundColor: '#f9f9f9', 
//               padding: '15px', 
//               borderRadius: '6px', 
//               marginBottom: '10px',
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center'
//             }}>
//               <div>
//                 <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Product ID: {typeof item.product === 'object' && item.product !== null ? item.product.id : item.product}</p>
//                 <p style={{ margin: 0, color: '#666' }}>Quantity: {item.quantity}</p>
//               </div>
//               <div style={{ textAlign: 'right' }}>
//                 <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>₹{item.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div style={{ 
//         backgroundColor: '#007cba', 
//         color: 'white', 
//         padding: '20px', 
//         borderRadius: '6px',
//         textAlign: 'center'
//       }}>
//         <h2 style={{ margin: 0 }}>Total Amount: ₹{doc.totalAmount || 0}</h2>
//       </div>

//       {doc.notes && (
//         <div style={{ marginTop: '30px' }}>
//           <h3 style={{ color: '#666', marginBottom: '10px' }}>Notes</h3>
//           <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
//             <p>{doc.notes}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default OrderView


'use client'
import React from 'react'

interface OrderItem {
  id: string
  name: string
  image?: string
  price: number
  quantity: number
  variant?: string
}

interface ShippingAddress {
  firstName: string
  lastName: string
  address: string
  apartment?: string
  city: string
  state: string
  zipCode: string
  phone: string
}

interface Payment {
  method?: string
  status?: 'pending' | 'completed' | 'failed'
}

interface Order {
  orderNumber: string
  customerEmail: string
  status: string
  createdAt?: string
  paymentMethod?: string
  shippingAddress: ShippingAddress
  items: OrderItem[]
  total: number
  notes?: string
  payment?: Payment
}

const OrderView: React.FC<{ doc: Order }> = ({ doc }) => {
  const handlePrint = () => {
    window.print()
  }

  if (!doc) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0, color: '#333' }}>Order #{doc.orderNumber || 'N/A'}</h1>
        <button 
          onClick={handlePrint}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007cba',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          🖨️ Print Order
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
        <div>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Customer Details</h3>
          <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
            <p>
              <strong>
                {doc.shippingAddress?.firstName} {doc.shippingAddress?.lastName}
              </strong>
            </p>
            <p>{doc.customerEmail || 'N/A'}</p>
          </div>
        </div>

        <div>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Order Info</h3>
          <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
            <p>
              <strong>Status:</strong>{' '}
              <span
                style={{
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backgroundColor:
                    doc.status === 'delivered'
                      ? '#d4edda'
                      : doc.status === 'pending'
                      ? '#fff3cd'
                      : '#d1ecf1',
                  color:
                    doc.status === 'delivered'
                      ? '#155724'
                      : doc.status === 'pending'
                      ? '#856404'
                      : '#0c5460',
                }}
              >
                {doc.status || 'pending'}
              </span>
            </p>
            <p>
              <strong>Date:</strong>{' '}
              {doc.createdAt ? new Date(doc.createdAt).toLocaleDateString() : 'N/A'}
            </p>
            <p>
              <strong>Payment:</strong> {doc.paymentMethod || doc.payment?.method || 'N/A'}
            </p>
          </div>
        </div>
      </div>

      {doc.shippingAddress && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Shipping Address</h3>
          <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
            <p>
              <strong>
                {doc.shippingAddress.firstName} {doc.shippingAddress.lastName}
              </strong>
            </p>
            <p>{doc.shippingAddress.address}</p>
            {doc.shippingAddress.apartment && <p>{doc.shippingAddress.apartment}</p>}
            <p>
              {doc.shippingAddress.city}, {doc.shippingAddress.state}{' '}
              {doc.shippingAddress.zipCode}
            </p>
            <p>📞 {doc.shippingAddress.phone}</p>
          </div>
        </div>
      )}

      {doc.items && doc.items.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Order Items</h3>
          {doc.items.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f9f9f9',
                padding: '15px',
                borderRadius: '6px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>
                  {item.name} {item.variant && `(${item.variant})`}
                </p>
                <p style={{ margin: 0, color: '#666' }}>Quantity: {item.quantity}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          backgroundColor: '#007cba',
          color: 'white',
          padding: '20px',
          borderRadius: '6px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>Total Amount: ₹{doc.total || 0}</h2>
      </div>

      {doc.notes && (
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Notes</h3>
          <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '6px' }}>
            <p>{doc.notes}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderView
