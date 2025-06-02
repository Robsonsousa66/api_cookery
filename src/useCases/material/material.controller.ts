import { Controller, Delete, Get, NotFoundException, Param, Post, Put, Req } from '@nestjs/common';
import MaterialRepository from 'src/repository/material-repository';
import { MaterialPresenter } from './material.presenter';
import { z } from 'zod';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import ListResponseDTO from './dtos/list-response.dto';
import ICreate from 'src/model/dtos/ICreate';
import IDelete from 'src/model/dtos/IDelete';
import IUpdate from 'src/model/dtos/IUpdate';

@ApiTags('Material')
@Controller('material')
export class MaterialController {
  constructor(private materialRepository: MaterialRepository) { }

  @ApiOperation({
    description: 'Listar Materiais',
    summary: 'Listar Materiais Cadastrados'
  })
  @ApiResponse({
    type: ListResponseDTO
  })
  @Get('/')
  async list() {
    const allMaterial = await this.materialRepository.list()

    const response = MaterialPresenter.list(allMaterial)

    return {
      data: response
    };
  }

  @ApiOperation({
    description: 'Criar Material',
    summary: 'Cria material'
  })
  @ApiResponse({
    type: ICreate
  })
  @Post('/')
  async create(@Req() req) {
    const bodySchema = z.object({
      name: z.string()
    })

    const body = bodySchema.parse(req.body)

    await this.materialRepository.create({
      name: body.name
    })

    return MaterialPresenter.created()
  }

  @ApiOperation({
    description: 'Editar Material',
    summary: 'Edita material'
  })
  @ApiResponse({
    type: IUpdate
  })
  @Put('/:id')
  async update(@Req() req, @Param('id') id: string) {
    const material = await this.materialRepository.findById(id)

    if (!material) {
      return MaterialPresenter.notFound()
    }

    const bodySchema = z.object({
      name: z.string()
    })

    const body = bodySchema.parse(req.body)

    await this.materialRepository.update(material.id, {
      name: body.name
    })

    return MaterialPresenter.updated()
  }

  @ApiOperation({
    description: 'Deletar Material',
    summary: 'Deleta material'
  })
  @ApiResponse({
    type: IDelete
  })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const material = await this.materialRepository.findById(id)

    if (!material) {
      return MaterialPresenter.notFound()
    }

    if(material.ingredients.length > 0){
      return MaterialPresenter.notDeleteBoundIngredient()
    }

    await this.materialRepository.delete(material.id)

    return MaterialPresenter.deleted()
  }
}
