import { ApiProperty } from "@nestjs/swagger"

export default class ListResponseDTO {
  @ApiProperty({
    type: 'string',
    description: 'ID',
    example: 'esseId-123-eAssim'
  })
  id: string

  @ApiProperty({
    type: 'string',
    description: 'Nome do Material',
    example: 'Farinha'
  })
  name: string
}