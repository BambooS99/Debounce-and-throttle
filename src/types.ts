export type TCategory = 'fruit' | 'vegetable';

export type TProduce = {
  id: string;
  name: string;
  category: TCategory;
  pricePerLb: number;
  stockLbs: number;
  organic: boolean;
  seasons: string[];
};

export type TStore = {
  id: string;
  name: string;
  distance: number; // miles
  inventory: TProduce[];
};
