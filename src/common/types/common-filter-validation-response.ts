import { ApiProperty } from '@nestjs/swagger';

export interface CommonFilterValidationResponse {
  status: number;
  timestamp: number;
  path: string;
  name: string;
  messages: string[];
  expiredAt?: string;
}

export class CommonFilterValidationResponse {
  @ApiProperty()
  status: number;

  @ApiProperty()
  requestUrl: string;

  @ApiProperty()
  exceptionName: string;

  @ApiProperty()
  message: string;

  constructor(
    status: number,
    requestUrl: string,
    name: string,
    messages: string[],
  ) {
    this.status = status;
    this.timestamp = Date.now();
    this.path = requestUrl;
    this.exceptionName = name;
    this.message = messages[0];
  }
}
