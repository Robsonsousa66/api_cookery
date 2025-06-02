import { Prisma, Material } from "generated/prisma";
import IMaterial from "src/model/IMaterial";

export default abstract class MaterialRepository {
  abstract list(): Promise<IMaterial['list'][]>

  abstract findById(id: string): Promise<IMaterial['findById'] | null>

  abstract create(data: Prisma.MaterialUncheckedCreateInput): Promise<Material>

  abstract update(id: string, data: Prisma.MaterialUncheckedUpdateInput): Promise<Material>

  abstract delete(id: string): Promise<boolean>
}