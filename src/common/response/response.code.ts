import { ResponseStatus } from './response.status';

export class ResponseCode {
  static readonly STATUS_1000_SUCCESS = new ResponseStatus(
    1000,
    'Success',
    'Success',
  );
  static readonly STATUS_9000_BAD_REQUEST = new ResponseStatus(
    9000,
    'Bad Request',
    'Try again later!',
  );
  static readonly STATUS_9002_SYSTEM_ERROR = new ResponseStatus(
    9001,
    'System Error',
    'Try again later!',
  );
  static readonly STATUS_9003_UNSUPPORTED_PARAMS_TYPE = (
    type: string,
    value: string,
  ) =>
    new ResponseStatus(
      9003,
      `Unsupported type for ${type}`,
      `The  '${value}' Not Allowed.`,
    );

  static readonly STATUS_9004_UNAUTHORIZED = new ResponseStatus(
    9004,
    'Unauthorized',
    'Token unauthorized.',
  );
  static readonly STATUS_9005_PERMISSION_DENIED = new ResponseStatus(
    9005,
    'Permission Denied',
    'No Permission to call this action.',
  );
  static readonly STATUS_1011_NOT_FOUND = new ResponseStatus(
    9006,
    'Not Found',
    'Not Found',
  );
}
