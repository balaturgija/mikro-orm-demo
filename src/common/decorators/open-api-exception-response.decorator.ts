import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiResponseOptions } from '@nestjs/swagger';

import { CommonFilterResponse } from '../types/common-filter.response';
import { CommonFilterValidationResponse } from '../types/common-filter-validation-response';

type SwaggerExceptionResponse = (
  oprions?: ApiResponseOptions,
) => MethodDecorator & ClassDecorator;

export function OpenApiExceptionsReponse(
  ...decorators: SwaggerExceptionResponse[]
) {
  return applyDecorators(
    // handle thrown exceptions
    ...decorators.map((decorator: SwaggerExceptionResponse) =>
      decorator({ type: CommonFilterResponse }),
    ),
    // handle validation exceptions
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Validation error',
      type: CommonFilterValidationResponse,
    }),
  );
}
