import { ApiProperty } from '@nestjs/swagger';

export interface CommonExceptionResponse {
  statusCode: number;
  message: string;
}

export class CommonExceptionResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  statusCode: number;
}
