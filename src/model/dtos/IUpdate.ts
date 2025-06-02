import { ApiProperty } from "@nestjs/swagger"
import { boolean } from "zod"

export default class IUpdate {
  
  @ApiProperty({
    type: 'boolean',
    description: 'Validação se foi concluído!'
  })
  updated: boolean

  @ApiProperty({
    type: 'string',
    description: 'Descrição da ação'
  })
  message: string
}