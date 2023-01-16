export interface ResultModel<T> {
  isSuccess: boolean;
  model: T;
  message: string;
  httpError: string;
}
