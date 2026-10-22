import type { TStore } from "../types";

export const STORES: TStore[] = [
  {
    id: 'store-001',
    name: 'Green Grocer',
    distance: 12,
    inventory: [
      { id: 'p-001', name: 'Apple', category: 'fruit', pricePerLb: 1.99, stockLbs: 120, organic: false, seasons: ['fall', 'winter'] },
      { id: 'p-002', name: 'Banana', category: 'fruit', pricePerLb: 0.59, stockLbs: 300, organic: false, seasons: ['all'] },
      { id: 'p-003', name: 'Carrot', category: 'vegetable', pricePerLb: 1.29, stockLbs: 80, organic: true, seasons: ['fall', 'spring'] },
      { id: 'p-004', name: 'Spinach', category: 'vegetable', pricePerLb: 3.49, stockLbs: 0, organic: true, seasons: ['spring', 'fall'] },
    ],
  },
  {
    id: 'store-002',
    name: 'Farm Stand 64',
    distance: 4,
    inventory: [
      { id: 'p-005', name: 'Apple', category: 'fruit', pricePerLb: 2.49, stockLbs: 60, organic: true, seasons: ['fall', 'winter'] },
      { id: 'p-006', name: 'Tomato', category: 'vegetable', pricePerLb: 2.99, stockLbs: 45, organic: true, seasons: ['summer'] },
      { id: 'p-007', name: 'Blueberry', category: 'fruit', pricePerLb: 6.99, stockLbs: 15, organic: true, seasons: ['summer'] },
      { id: 'p-008', name: 'Broccoli', category: 'vegetable', pricePerLb: 2.19, stockLbs: 70, organic: false, seasons: ['fall', 'winter'] },
      { id: 'p-009', name: 'Carrot', category: 'vegetable', pricePerLb: 1.09, stockLbs: 200, organic: false, seasons: ['fall', 'spring'] },
    ],
  },
  {
    id: 'store-003',
    name: 'Market Square',
    distance: 7,
    inventory: [
      { id: 'p-010', name: 'Mango', category: 'fruit', pricePerLb: 3.99, stockLbs: 25, organic: false, seasons: ['summer'] },
      { id: 'p-011', name: 'Kale', category: 'vegetable', pricePerLb: 2.79, stockLbs: 40, organic: true, seasons: ['fall', 'winter'] },
      { id: 'p-012', name: 'Banana', category: 'fruit', pricePerLb: 0.69, stockLbs: 150, organic: true, seasons: ['all'] },
    ],
  },
];
 