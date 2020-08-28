
import React from 'react';
import Form from './ContactForm';
import { Container } from '../../index';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import './Contact.scss';

interface ContactProps extends WithNamespaces {
  elementRef: React.RefObject<HTMLDivElement>;
  t?: any;
}

function Contact({ elementRef, t }: ContactProps) {
  return (
    <section className="rn-contact" ref={ elementRef }>
      <Container>
        <h2 className="rn-contact__title rn-title">{ t('contact.title') }</h2>
        <p className="rn-contact__subtitle">{ t('contact.subtitle') } {`\u{1F609}`}</p>
        <Form />
      </Container>
    </section>
  )
}

export default withNamespaces()(Contact);
