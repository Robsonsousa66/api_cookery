import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import MaterialRepository from 'src/repository/material-repository';
import { z } from 'zod';
import RevenueRepository from 'src/repository/revenue-repository';
import { RevenuePresenter } from './revenue.presenter';
import IngredientRepository from 'src/repository/ingredient-repository';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import ListResponse from './dtos/list-response';
import ICreate from 'src/model/dtos/ICreate';
import CreateBody from './dtos/create-body';
import UpdateBody from './dtos/update-body';
import IUpdate from 'src/model/dtos/IUpdate';
import IDelete from 'src/model/dtos/IDelete';
import CreateIngredientBody from './dtos/createIngredient-body';
import UpdateIngredientBody from './dtos/updateIngredient-body';

@Controller('revenue')
export class RevenueController {
  constructor(private materialRepository: MaterialRepository,
    private revenueRepository: RevenueRepository,
    private ingredientRepository: IngredientRepository) { }

  
  @ApiOperation({
    summary: 'Listas de Receitas',
    description: 'Lista de Receitas criadas!',
  })
  @ApiResponse({
    type: ListResponse
  })
  @Get('/')
  async list() {
    const allMaterial = await this.revenueRepository.list()

    const response = RevenuePresenter.list(allMaterial)

    return {
      data: response
    };
  }

  @ApiOperation({
    summary: 'Criar Receita',
    description: 'Criar Receitas',
  })
  @ApiBody({
    type: CreateBody
  })
  @ApiResponse({
    type: ICreate
  })
  @Post('/')
  async create(@Req() req) {
    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
    })

    const body = bodySchema.parse(req.body)

    await this.revenueRepository.create({
      name: body.name,
      description: body.description,
    })

    return RevenuePresenter.created()
  }

  @ApiOperation({
    summary: 'Editar Receitas',
    description: 'Editar receita',
  })
  @ApiBody({
    type: UpdateBody
  })
  @ApiResponse({
    type: IUpdate
  })
  @Put('/:id')
  async update(@Req() req, @Param('id') id: string) {
    const revenue = await this.revenueRepository.findById(id)

    if (!revenue) {
      return RevenuePresenter.notFound()
    }

    const bodySchema = z.object({
      name: z.string(),
      description: z.string()
    })

    const body = bodySchema.parse(req.body)

    await this.revenueRepository.update(revenue.id, {
      name: body.name,
      description: body.description,
    })

    return RevenuePresenter.updated()
  }

  @ApiOperation({
    summary: 'Deletar Receitas',
    description: 'Deletar Receita!',
  })
  @ApiResponse({
    type: IDelete
  })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const revenue = await this.revenueRepository.findById(id)

    if (!revenue) {
      return RevenuePresenter.notFound()
    }

    await this.revenueRepository.delete(revenue.id)

    return RevenuePresenter.deleted()
  }

  @ApiOperation({
    summary: 'Criar Ingrediente',
    description: 'Criar Ingrediente!',
  })
  @ApiBody({
    type: CreateIngredientBody
  })
  @ApiResponse({
    type: ICreate
  })
  @Post('/:id/ingredient')
  async createIngredient(@Req() req, @Param('id') id: string) {
    const revenue = await this.revenueRepository.findById(id)

    if (!revenue) {
      return RevenuePresenter.notFound()
    }

    const bodySchema = z.object({
      description: z.string(),
      quantity: z.number(),
      materialId: z.string()
    })

    const body = bodySchema.parse(req.body)

    const material = await this.materialRepository.findById(body.materialId)

    if(!material){
      return RevenuePresenter.materialNotFound()
    }

    await this.ingredientRepository.create({
      id_revenue: revenue.id,
      description: body.description,
      quantity: body.quantity,
      id_material: material.id
    })

    return RevenuePresenter.createdIngredient()
  }

  @ApiOperation({
    summary: 'Editar Ingrediente',
    description: 'Editar ingrediente!',
  })
  @ApiBody({
    type: UpdateIngredientBody
  })
  @ApiResponse({
    type: IUpdate
  })
  @Put('/:id/ingredient/:ingredientId')
  async updateIngredient(@Req() req, @Param('id') id: string,@Param('ingredientId') ingredientId: string) {
    const revenue = await this.revenueRepository.findById(id)

    if (!revenue) {
      return RevenuePresenter.notFound()
    }

    const ingredient = await this.ingredientRepository.findById(ingredientId)

    if (!ingredient) {
      return RevenuePresenter.ingredientNotFound()
    }

    const bodySchema = z.object({
      description: z.string(),
      quantity: z.number(),
      materialId: z.string()
    })

    const body = bodySchema.parse(req.body)

    const material = await this.materialRepository.findById(body.materialId)

    if(!material){
      return RevenuePresenter.materialNotFound()
    }

    await this.ingredientRepository.update(ingredient.id, {
      description: body.description,
      quantity: body.quantity,
      id_material: material.id
    })

    return RevenuePresenter.updatedIngredient()
  }

  @ApiOperation({
    summary: 'Deletar Ingrediente',
    description: 'Deletar Ingrediente!',
  })
  @ApiResponse({
    type: ListResponse
  })
  @Delete('/:id/ingredient/:ingredientId')
  async deleteIngredient(@Param('id') id: string, @Param('ingredientId') ingredientId: string) {
    const revenue = await this.revenueRepository.findById(id)

    if (!revenue) {
      return RevenuePresenter.notFound()
    }

    const ingredient = await this.ingredientRepository.findById(ingredientId)

    if (!ingredient) {
      return RevenuePresenter.ingredientNotFound()
    }

    await this.ingredientRepository.delete(ingredient.id)

    return RevenuePresenter.deletedIngredient()
  }
}
