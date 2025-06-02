import { ApiProperty } from "@nestjs/swagger"

class Material {
  @ApiProperty({
    type: 'string',
    description: 'Id'
  })
  id: string

  @ApiProperty({
    type: 'string',
    description: 'Nome do Ingrediente'
  })
  name: string
}

class Ingredient {
  @ApiProperty({
    type: 'string',
    description: 'Id'
  })
  id: string

  @ApiProperty({
    type: 'string',
    description: 'Quantidade usada'
  })
  quantity: number

  @ApiProperty({
    type: Material,
    description: 'Material Utilizado'
  })
  material: Material

  @ApiProperty({
    type: 'string',
    nullable: true,
    description: 'Modo de preparo ou recomendação'
  })
  description: string | null
}

export default class ListResponse {

  @ApiProperty({
    type: 'string',
    description: 'Id'
  })
  id: string

  @ApiProperty({
    type: 'string',
    description: 'Nome da Receita'
  })
  name: string

  @ApiProperty({
    type: 'string',
    description: 'Modo de preparo ou recomendação'
  })
  description: string

  @ApiProperty({
    type: [Ingredient],
    description: 'Ingredientes'
  })
  ingredients: Ingredient[]
}