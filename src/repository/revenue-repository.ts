import { Prisma, Revenues } from "generated/prisma";
import IRevenue from "src/model/IRevenue";

export default abstract class RevenueRepository {
  abstract list(): Promise<IRevenue['list'][]>

  abstract findById(id: string): Promise<IRevenue['findById'] | null>

  abstract create(data: Prisma.RevenuesUncheckedCreateInput): Promise<Revenues>

  abstract update(id: string, data: Prisma.RevenuesUncheckedUpdateInput): Promise<Revenues>

  abstract delete(id: string): Promise<boolean>
}