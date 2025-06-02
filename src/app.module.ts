import { Module } from '@nestjs/common';
import { MaterialController } from './useCases/material/material.controller';
import { PrismaModule } from './prisma/prisma.module';
import MaterialRepository from './repository/material-repository';
import MaterialRepositoryPrisma from './repository/prisma/material-repository-prisma';
import { RevenueController } from './useCases/revenue/revenue.controller';
import IngredientRepository from './repository/ingredient-repository';
import IngredientRepositoryPrisma from './repository/prisma/ingredient-repository-prisma';
import RevenueRepositoryPrisma from './repository/prisma/revenue-repository-prisma';
import RevenueRepository from './repository/revenue-repository';

@Module({
  imports: [PrismaModule],
  controllers: [MaterialController, RevenueController],
  providers: [
    {
      provide: MaterialRepository,
      useClass: MaterialRepositoryPrisma,
    },
    {
      provide: IngredientRepository,
      useClass: IngredientRepositoryPrisma,
    },
    {
      provide: RevenueRepository,
      useClass: RevenueRepositoryPrisma,
    }

  ],
})
export class AppModule { }
