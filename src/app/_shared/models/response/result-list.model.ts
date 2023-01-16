export interface ResultListModel<T> {
  isSuccess: boolean;
  model: Array<T>;
  totalRecords: number;
  totalPages: number;
  message: string;
  httpError: string;
}
