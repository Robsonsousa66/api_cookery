export default interface IIngredient {
  list: {
    material: {
      name: string;
      id: string;
    };
    description: string | null;
    quantity: number;
    id: string;
  }
  findById: {
    material: {
      name: string;
      id: string;
    };
    description: string | null;
    quantity: number;
    id: string;
  }
}