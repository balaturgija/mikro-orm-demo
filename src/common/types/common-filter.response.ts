import { ApiProperty } from '@nestjs/swagger';

export interface CommonFilterResponse {
  status: number;
  timestamp: number;
  path: string;
  name: string;
  message: string;
  expiredAt?: string;
}

export class CommonFilterResponse {
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
    message: string,
  ) {
    this.status = status;
    this.timestamp = Date.now();
    this.path = requestUrl;
    this.exceptionName = name;
    this.message = message;
  }
}
