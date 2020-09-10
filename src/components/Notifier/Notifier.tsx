
import * as React from 'react';
import classnames from 'classnames';
import Container from '../Container/Container';
import { AppContext } from '../../app/App';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import "./Notifier.scss"

// Icons
import { ReactComponent as SuccessIcon } from '../../assets/icons/ok.svg';
import { ReactComponent as ErrorIcon } from '../../assets/icons/error.svg';
import { ReactComponent as WarningIcon } from '../../assets/icons/warning.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';

export type OptionsType = {
  open: boolean;
  delay?: number;
  message?: string;
  actionText?: string;
  customTitle?: string;
  customIcon?: React.FunctionComponent;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
  onClose?(): void;
}

interface NotifierProps extends WithNamespaces {
  t?: any;
  open: boolean;
  delay?: number;
  message?: string;
  actionText?: string;
  customTitle?: string;
  customIcon?: React.FunctionComponent;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
  onClose?(): void;
}

function Notifier({
  t,
  open,
  actionText,
  customIcon,
  customTitle,
  message = '',
  variant = 'default',
  onClose,
}: NotifierProps) {
  const { handleNotifier } = React.useContext(AppContext);

  const variantIcon: { [s: string]: React.FunctionComponent } = {
    'info': InfoIcon,
    'error': ErrorIcon,
    'default': InfoIcon,
    'warning': WarningIcon,
    'success': SuccessIcon,
  };

  const variantTitle: { [s: string]: string } = {
    'info': customTitle || t('notifier.variant.info'),
    'error': customTitle || t('notifier.variant.error'),
    'default': customTitle || t('notifier.variant.info'),
    'warning': customTitle || t('notifier.variant.warning'),
    'success': customTitle || t('notifier.variant.success'),
  };

  const Icon = customIcon || variantIcon[variant];
  const title = variantTitle[variant];

  function close() {
    onClose && onClose();

    handleNotifier!({
      open: false,
    })
  }

  return (
    <div className={classnames('rn-notifier', { 'is--open': open })}>
      <Container className="rn-notifier__container">
        <div className={`rn-notifier__wrap ${variant}`}>
          <div className="content">
            <div className="icon">
              <Icon />
            </div>
            <div className="info">
              <p className="info-title">{ title }</p>
              <div className="info-message" dangerouslySetInnerHTML={{ __html: message }} />
            </div>
          </div>
          <div className="action">
            <button type="button" onClick={ close } aria-label="Close">
              { actionText || t('notifier.actionText') }
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default withNamespaces()(Notifier);
