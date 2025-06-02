import { Injectable } from '@nestjs/common';
import { Material, Prisma } from 'generated/prisma';
import IMaterial from 'src/model/IMaterial';
import { PrismaService } from 'src/prisma/prisma.service';
import MaterialRepository from '../material-repository';

@Injectable()
export default class MaterialRepositoryPrisma implements MaterialRepository {
  private table: Prisma.MaterialDelegate;

  constructor(private prismaService: PrismaService) {
    this.table = this.prismaService.material;
  }

  async list(): Promise<IMaterial['list'][]> {
    const material = await this.table.findMany();

    return material;
  }

  async findById(id: string): Promise<IMaterial['findById'] | null> {
    const material = await this.table.findFirst({
      select: {
        id: true,
        name: true,
        ingredients: {
          select: {
            id: true,
            description: true,
            revenue: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        }
      },
      where: {
        id
      }
    });

    return material;
  }

  async create(data: Prisma.MaterialUncheckedCreateInput): Promise<Material> {
    const material = await this.table.create({ data })

    return material
  }

  async update(id: string, data: Prisma.MaterialUncheckedUpdateInput): Promise<Material> {
    const material = await this.table.update({
      data, where: {
        id
      }
    })

    return material
  }

  async delete(id: string): Promise<boolean> {
    const material = await this.table.delete({
      where: {
        id
      }
    })

    return true
  }
}
