
export class Item {
  name: string;
  ingredients: Ingredient[];
  murloc?: string;
  color?: string;
  amount?: number;
}

export class Ingredient {
  name: string;
  amount: number;
  color?: string;
  murloc?: string;
}
