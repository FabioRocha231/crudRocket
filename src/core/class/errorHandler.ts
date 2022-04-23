import { IErrorHandler } from "../interface/errorHandler";

export class ErrorHandler implements IErrorHandler  {
  errorHandler = (promise: Promise<unknown>) =>
  promise.then((result) => [null, result]).catch((error) => [error]);
}