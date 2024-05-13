import { HttpException, HttpStatus } from '@nestjs/common';

export class ExternalServerException extends HttpException {
  constructor(message = 'External service error') {
    super(message, HttpStatus.SERVICE_UNAVAILABLE);
  }
}
