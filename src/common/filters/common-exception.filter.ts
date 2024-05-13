import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RequestBodyException } from '../exceptions/request-body.exception';
import { RequestQueryException } from '../exceptions/request-query.exception';
import { CommonFilterResponse } from '../types/common-filter.response';
import { isResponseObject } from '../types/common-response-message.type.guard';
import { CommonFilterValidationResponse } from '../types/common-filter-validation-response';
import { ExternalServerException } from '../exceptions/external-service.exception';

@Catch(RequestBodyException, RequestQueryException, ExternalServerException)
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    if (Array.isArray(exceptionResponse)) {
      const filterResponse = new CommonFilterValidationResponse(
        status,
        request.url,
        exception.name,
        exceptionResponse,
      );
      return response.status(status).json(filterResponse);
    }

    const filterResponse = new CommonFilterResponse(
      status,
      request.url,
      exception.name,
      exceptionResponse,
    );

    if (isResponseObject(exceptionResponse)) {
      filterResponse.message = exceptionResponse.message;
    }

    response.status(status).send(filterResponse);
  }
}
