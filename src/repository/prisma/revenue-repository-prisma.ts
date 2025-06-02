import { Injectable } from "@nestjs/common";
import { Prisma, Revenues } from "generated/prisma";
import IRevenue from "src/model/IRevenue";
import { PrismaService } from "src/prisma/prisma.service";
import RevenueRepository from "../revenue-repository";

@Injectable()
export default class RevenueRepositoryPrisma implements RevenueRepository {
  private table: Prisma.RevenuesDelegate

  constructor(private prismaService: PrismaService) {
    this.table = this.prismaService.revenues
  }

  async list(): Promise<IRevenue['list'][]> {
    const revenue = await this.table.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        ingredients: {
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
          }
        },
        createdAt: true,
      },
    })

    return revenue
  }

  async findById(id: string): Promise<IRevenue['findById'] | null> {
    const revenue = await this.table.findFirst({
      select: {
        id: true,
        name: true,
        description: true,
        ingredients: {
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
          }
        },
        createdAt: true,
      },
      where: { id }
    })

    return revenue
  }

  async create(data: Prisma.RevenuesUncheckedCreateInput): Promise<Revenues> {
    const revenue = await this.table.create({
      data
    })

    return revenue
  }

  async update(id: string, data: Prisma.RevenuesUncheckedUpdateInput): Promise<Revenues> {
    const revenue = await this.table.update({
      data,
      where: {
        id
      }
    })

    return revenue
  }

  async delete(id: string): Promise<boolean> {
    const revenue = await this.table.delete({
      where: {
        id
      }
    })

    return true
  }
}