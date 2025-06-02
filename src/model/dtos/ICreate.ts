import { ApiProperty } from "@nestjs/swagger"
import { boolean } from "zod"

export default class ICreate {
  
  @ApiProperty({
    type: 'boolean',
    description: 'Validação se foi concluído!'
  })
  created: boolean

  @ApiProperty({
    type: 'string',
    description: 'Descrição da ação'
  })
  message: string
}