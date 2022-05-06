/**
 * The basic api response schema
 */
export interface ResponseSchema<T> {
  created: string | null;
  error: any | null;
  payload: T;
  success: boolean;
}
