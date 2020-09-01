
import * as Yup from 'yup';
import React from 'react';
import axios from 'axios';
import { AppContext } from '../../../app/App';
import { withNamespaces } from 'react-i18next';
import { Form, Formik, FormikHelpers } from 'formik';
import { Button, FormInput, FormRow, FormGroup } from '../../index';

import { ReactComponent as SendIcon } from '../../../assets/icons/send.svg';
import { ReactComponent as SentEmailIcon } from '../../../assets/icons/email-sent.svg';
import { ReactComponent as MailErrorIcon } from '../../../assets/icons/mail-error.svg';

type FormType = {
  [key: string]: string;
  name: string;
  email: string;
  message: string;
}

function ContactForm({ t }: any) {
  const { handleNotifier } = React.useContext(AppContext);

  const initialValues: FormType = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required(t('contact.form.name.validation.required'))
      .min(3, t('contact.form.name.validation.length')),
    email: Yup.string()
      .trim()
      .required(t('contact.form.email.validation.required'))
      .email(t('contact.form.email.validation.email')),
    message: Yup.string()
      .trim()
      .required(t('contact.form.message.validation.required')),
  });

  async function onSubmit(values: FormType, actions: FormikHelpers<FormType>) {
    Object.keys(values).map(k => values[k] = values[k].trim() );

    try {
      await axios.post('https://us-central1-rodrigo-nunes.cloudfunctions.net/sendMail', {
        dest: 'nunesrodrigo13@outlook.com',
        ...values,
      });

      handleNotifier!({
        open: true,
        variant: 'success',
        customIcon: SentEmailIcon,
        message: t('contact.form.alerts.success'),
      });
    } catch (error) {
      console.error(error);

      handleNotifier!({
        open: true,
        variant: 'error',
        customIcon: MailErrorIcon,
        message: t('contact.form.alerts.error'),
      });
    } finally {
      actions.setSubmitting(false);
      actions.resetForm();
    }
  }

  return (
    <Formik
      onSubmit={ onSubmit }
      initialValues={ initialValues }
      validationSchema={ validationSchema }
    >
      {({ isSubmitting, errors, touched }) =>(
        <Form>
          <FormRow>
            <FormInput
              name="name"
              errors={ errors }
              touched={ touched }
              disabled={ isSubmitting }
              label={ t('contact.form.name.label') }
              required
            />
            <FormInput
              name="email"
              type="email"
              errors={ errors }
              touched={ touched }
              disabled={ isSubmitting }
              label={ t('contact.form.email.label') }
              required
            />
          </FormRow>
          <FormInput
            name="message"
            type="textarea"
            errors={ errors }
            touched={ touched }
            disabled={ isSubmitting }
            label={ t('contact.form.message.label') }
            required
          />
          <FormGroup className="button">
            <Button
              ariaLabel="Send"
              disabled={ isSubmitting }
            >
              <SendIcon aria-hidden="true" />
              {
                isSubmitting ?
                t('contact.form.submit.sending') :
                t('contact.form.submit.text')
              }
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}

export default withNamespaces()(ContactForm);
