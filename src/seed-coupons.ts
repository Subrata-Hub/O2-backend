

// import { getPayload } from 'payload'
// import config from './payload.config'
// import { Product } from './payload-types'

// // Utility to generate slugs
// const generateSlug = (name: string): string =>
//   name
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)+/g, '')

// // Define strict category type
// type ProductCategory =
//   | 'SPORTS NUTRITION'
//   | 'VITAMINS & SUPPLEMENTS'
//   | 'AYURVEDA & HERBS'
//   | 'HEALTH FOOD & DRINKS'
//   | 'FITNESS'
//   | 'WELLNESS'
//   | 'other'

// const seedCoupons = async () => {
//   const payload = await getPayload({ config })

//   try {
//     // Example product seeds (adjust with real data)
//     const products: Array<
//       Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'sizes'>
//     > = [
//       {
//         name: 'Whey Protein',
//         slug: generateSlug('Whey Protein'),
//         description: 'High quality whey protein for muscle growth.',
//         price: 1999,
//         stock: 100,
//        brand: 'ON (OPTIMUM NUTRITION)',
//         category: 'SPORTS NUTRITION' as ProductCategory,
//         variants: [
//           {
//            weight: '1kg',
//            price: 1999,
//           },
//         ],
//         subscriptionOptions: {
//           available: true,
//           discounts: {
//             monthly: 5,
//             quarterly: 10,
//             biannual: 15,
//           },
//         },
//         bundledOffers: [],
//         isActive: true,
//       },
//       {
//         name: 'Multivitamin Pack',
//         slug: generateSlug('Multivitamin Pack'),
//         description: 'Essential vitamins for daily health.',
//         price: 499,
//         stock: 200,
//         brand: 'GNC',
//         category: 'VITAMINS & SUPPLEMENTS' as ProductCategory,
//         variants: [
//           {
//             size: '60 tablets',
//             price: 499,
//             stock: 100,
//           },
//         ],
//         subscriptionOptions: {
//           available: false,
//           discounts: {},
//         },
//         bundledOffers: [],
//         isActive: true,
//       },
//     ]

//     // Insert products
//     for (const product of products) {
//       await payload.create({
//         collection: 'products',
//         data: {
//           ...product,
//           slug: generateSlug(product.name), // ✅ ensure slug
//           category: product.category as ProductCategory, // ✅ cast category
//           subscriptionOptions: product.subscriptionOptions || {
//             available: false,
//             discounts: {},
//           },
//           bundledOffers: product.bundledOffers || [],
//         },
//       })
//       console.log(`✅ Created product: ${product.name}`)
//     }

//     console.log('🎉 Products seeded successfully!')
//   } catch (_error) {
//     console.error('❌ Error seeding products')
//   }
// }

// export default seedCoupons


// import { getPayload } from 'payload'
// import config from './payload.config'
// import { Product } from './payload-types'

// // Utility to generate slugs
// const generateSlug = (name: string): string =>
//   name
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, '-')
//     .replace(/(^-|-$)+/g, '')

// // Define strict category type
// type ProductCategory =
//   | 'SPORTS NUTRITION'
//   | 'VITAMINS & SUPPLEMENTS'
//   | 'AYURVEDA & HERBS'
//   | 'HEALTH FOOD & DRINKS'
//   | 'FITNESS'
//   | 'WELLNESS'
//   | 'other'

// const seedCoupons = async () => {
//   const payload = await getPayload({ config })

//   try {
//     // Example product seeds (adjust with real data)
//     const products: Array<
//       Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'sizes'>
//     > = [
//       {
//         name: 'Whey Protein',
//         slug: generateSlug('Whey Protein'),
//         description: 'High quality whey protein for muscle growth.',
//         price: 1999,
//         stock: 100,
//         brand: 'ON (OPTIMUM NUTRITION)',
//         category: 'SPORTS NUTRITION' as ProductCategory,
//         image: 'https://example.com/images/whey-protein.jpg', // ✅ required
//         variants: [
//           {
//             weight: '1kg',
//             price: 1999,
//           },
//         ],
//         subscriptionOptions: {
//           available: true,
//           discounts: {
//             monthly: 5,
//             quarterly: 10,
//             biannual: 15,
//           },
//         },
//         bundledOffers: [],
//       },
//       {
//         name: 'Multivitamin Pack',
//         slug: generateSlug('Multivitamin Pack'),
//         description: 'Essential vitamins for daily health.',
//         price: 499,
//         stock: 200,
//         brand: 'GNC',
//         category: 'VITAMINS & SUPPLEMENTS' as ProductCategory,
//         image: 'https://example.com/images/multivitamin-pack.jpg', // ✅ required
//         variants: [
//           {
//             weight: '60 tablets', // use 'weight' instead of 'size'
//             price: 499,
//           },
//         ],
//         subscriptionOptions: {
//           available: false,
//           discounts: {},
//         },
//         bundledOffers: [],
//       },
//     ]

//     // Insert products
//     for (const product of products) {
//       await payload.create({
//         collection: 'products',
//         data: {
//           ...product,
//           slug: generateSlug(product.name), // ensure slug
//           category: product.category as ProductCategory,
//           subscriptionOptions: product.subscriptionOptions || {
//             available: false,
//             discounts: {},
//           },
//           bundledOffers: product.bundledOffers || [],
//         },
//       })
//       console.log(`✅ Created product: ${product.name}`)
//     }

//     console.log('🎉 Products seeded successfully!')
//   } catch (_error) {
//     console.error('❌ Error seeding products', _error)
//   }
// }

// export default seedCoupons

