import { ApiProperty } from "@nestjs/swagger"

export default class UpdateIngredientBody {
  @ApiProperty({
    type: 'string',
    description: 'Modo de Preparo ou recomendação'
  })
  description: string

  @ApiProperty({
    type: 'string',
    description: 'Quantidade usada'
  })
  quantity: number

  @ApiProperty({
    type: 'string',
    description: 'Material Selecionado'
  })
  materialId: string
}