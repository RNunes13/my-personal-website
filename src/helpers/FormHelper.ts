
import ObjectHelper from './ObjectHelper';
import { FormikErrors, FormikTouched } from 'formik';

export default class FormHelper {
  public static checkErrors<T = any>(errors: FormikErrors<T>, touched: FormikTouched<T>, field: keyof T): boolean {
    const errorsIsEmpty: boolean = ObjectHelper.isEmpty(errors);
    const value = errors[field] as string;

    let hasError: boolean = false;

    if (!errorsIsEmpty && value) hasError = touched[field]! && value.length > 0;

    return hasError;
  }
}
