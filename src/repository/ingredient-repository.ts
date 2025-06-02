import { Prisma, Ingredients } from "generated/prisma";
import IIngredient from "src/model/IIngredient";

export default abstract class IngredientRepository {
  abstract list(): Promise<IIngredient['list'][]>

  abstract findById(id: string): Promise<IIngredient['findById'] | null>

  abstract create(data: Prisma.IngredientsUncheckedCreateInput): Promise<Ingredients>

  abstract update(id: string, data: Prisma.IngredientsUncheckedUpdateInput): Promise<Ingredients>

  abstract delete(id: string): Promise<boolean>
}