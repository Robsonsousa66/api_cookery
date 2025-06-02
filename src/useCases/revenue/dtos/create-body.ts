import { ApiProperty } from "@nestjs/swagger"

export default class CreateBody {
  @ApiProperty({
    type: 'string',
    description: 'Nome da Receita'
  })
  name: string

  @ApiProperty({
    type: 'string',
    description: 'Modo de Preparo ou recomendação'
  })
  description: string
}