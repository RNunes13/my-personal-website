
import React from 'react';
import classnames from 'classnames';
import FormHelper from '../../../helpers/FormHelper';
import { FormGroup } from '../../index';
import { ErrorMessage, Field, FieldProps, FormikErrors, FormikTouched } from 'formik';
import './Input.scss';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  showLabel?: boolean;
  placeholder?: string;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
}

function Input({
  name,
  label,
  errors,
  touched,
  required,
  disabled,
  showLabel,
  placeholder,
  type = 'text',
}: InputProps) {
  return (
    <FormGroup>
      <label
        htmlFor={ name }
        className={classnames("rn-form__input--label", { required, 'hidden': !showLabel })}
      >
        { label }
      </label>
      <div className="rn-form__input--wrapper">
      {
        type === 'textarea' ?
        <Field name={ name } render={(props: FieldProps) =>
          <textarea
            rows={ 4 }
            id={ name }
            aria-label={ label }
            disabled={ disabled }
            className="rn-form__input rn-form__input--textarea"
            placeholder={ placeholder || !showLabel ? `${label}${required ? ' *' : ''}` : '' }
            data-error={ `${ FormHelper.checkErrors(errors, touched, name) }` }
            { ...props.field }
          />
        }/> :
        <Field
          id={ name }
          type={ type }
          name={ name }
          aria-label={ label }
          disabled={ disabled }
          className="rn-form__input"
          error={ `${ FormHelper.checkErrors(errors, touched, name) }` }
          placeholder={ placeholder || !showLabel ? `${label}${required ? ' *' : ''}` : '' }
        />
      }
      <div className="rn-form__input--underline" />
      </div>
      <ErrorMessage className="rn-form__input--error" name={ name } component="div" />
    </FormGroup>
  )
}

export default Input;
