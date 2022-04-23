export interface IErrorHandler {
  errorHandler(promise: Promise<unknown>): Promise<unknown>;
}