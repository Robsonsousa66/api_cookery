import { Injectable } from "@nestjs/common";
import { Ingredients, Prisma } from "generated/prisma";
import IIngredient from "src/model/IIngredient";
import { PrismaService } from "src/prisma/prisma.service";
import IngredientRepository from "../ingredient-repository";

@Injectable()
export default class IngredientRepositoryPrisma implements IngredientRepository {
  private table: Prisma.IngredientsDelegate

  constructor(private prismaService: PrismaService) {
    this.table = this.prismaService.ingredients
  }

  async list(): Promise<IIngredient['list'][]> {
    const ingredient = await this.table.findMany({
      select: {
        id: true,
        description: true,
        quantity: true,
        material: {
          select: {
            id: true,
            name: true,
          }
        }
      },
    })

    return ingredient
  }

  async findById(id: string): Promise<IIngredient['findById'] | null> {
    const ingredient = await this.table.findFirst({
      select: {
        id: true,
        description: true,
        quantity: true,
        material: {
          select: {
            id: true,
            name: true,
          }
        }
      },
      where: { id }
    })

    return ingredient
  }

  async create(data: Prisma.IngredientsUncheckedCreateInput): Promise<Ingredients> {
    const ingredient = await this.table.create({
      data
    })

    return ingredient
  }

  async update(id: string, data: Prisma.IngredientsUncheckedUpdateInput): Promise<Ingredients> {
    const ingredient = await this.table.update({
      data,
      where: {
        id
      }
    })

    return ingredient
  }

  async delete(id: string): Promise<boolean> {
    const ingredient = await this.table.delete({
      where: {
        id
      }
    })

    return true
  }
}