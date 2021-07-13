import { ApiProperty } from '@nestjs/swagger';

export class TestDto {
  @ApiProperty({
    description:
      'The offset is the position in the dataset of a particular record.',
    required: false,
    nullable: true,
    format: 'integer',
  })
  offset?: number;

  @ApiProperty({
    description: 'This is the size of the results set you would like.',
    required: false,
    nullable: true,
    format: 'integer',
    example: 100,
  })
  limit?: number;
}
