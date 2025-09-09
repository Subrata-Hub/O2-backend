// import { CollectionConfig } from "payload";

// export const GiftCards: CollectionConfig = {
//   slug: "giftCards",
//   fields: [
//     {
//       name: "code",
//       type: "text",
//       required: true,
//       unique: true,
//     },
//     {
//       name: "balance",
//       type: "number",
//       required: true,
//       defaultValue: 0,
//     },
//     {
//       name: "isActive",
//       type: "checkbox",
//       defaultValue: true,
//     },
//   ],
// };

// import { CollectionConfig } from "payload";

// export const GiftCards: CollectionConfig = {
//   slug: "giftCards",
//   fields: [
//     {
//       name: "code",
//       type: "text",
//       required: true,
//       unique: true,
//     },
//     {
//       name: "balance",
//       type: "number",
//       required: true,
//       defaultValue: 0,
//     },
//     {
//       name: "isActive",
//       type: "checkbox",
//       defaultValue: true,
//     },
//     {
//       name: "expiresAt",
//       type: "date",         // ✅ add this
//       required: false,      // optional
//     },
//   ],
// };


import { CollectionConfig } from "payload";

export const GiftCards: CollectionConfig = {
  slug: "giftCards",
  fields: [
    {
      name: "code",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "balance",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "expiresAt",
      type: "date",
      required: false,
    },
    {
      name: "transactions",   // ✅ add this
      type: "array",
      fields: [
        {
          name: "amount",
          type: "number",
          required: true,
        },
        {
          name: "type", // debit or credit
          type: "select",
          options: [
            { label: "Credit", value: "credit" },
            { label: "Debit", value: "debit" },
          ],
          required: true,
        },
        {
          name: "date",
          type: "date",
          required: true,
          defaultValue: () => new Date(),
        },
      ],
    },
  ],
};

