import { ApiProperty } from "@nestjs/swagger"
import { boolean } from "zod"

export default class IDelete {
  
  @ApiProperty({
    type: 'boolean',
    description: 'Validação se foi concluído!'
  })
  deleted: boolean

  @ApiProperty({
    type: 'string',
    description: 'Descrição da ação'
  })
  message: string
}