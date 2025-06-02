export default interface IRevenue {
  findById: {
    name: string;
    id: string;
    description: string;
    createdAt: Date;
    ingredients: {
      id: string;
      description: string | null;
      quantity: number
      material: {
        name: string;
        id: string;
      };
    }[];
  }
  list: {
    name: string;
    id: string;
    description: string;
    createdAt: Date;
    ingredients: {
      id: string;
      description: string | null;
      quantity: number
      material: {
        name: string;
        id: string;
      };
    }[];
  }
}