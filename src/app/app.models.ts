
export class Item {
  name: string;
  ingredients: Ingredient[];
  color?: string;
  amount?: number;
}

export class Ingredient {
  name: string;
  amount: number;
  color?: string;
}
