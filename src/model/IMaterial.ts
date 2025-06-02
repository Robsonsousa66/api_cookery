export default interface IMaterial {
  list: {
    name: string;
    id: string;
  }
  findById: {
    name: string;
    id: string;
    ingredients: {
      id: string;
      description: string | null;
      revenue: {
        name: string;
        id: string;
      };
    }[];
  }
}