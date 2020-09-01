/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import './Social.scss';

import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as SkypeIcon } from '../../assets/icons/skype.svg';

function Social() {
  const items: { title: string, icon: React.FunctionComponent, link: string }[] = [
    { title: 'GitHub', icon: GithubIcon, link: 'https://github.com/RNunes13' },
    { title: 'LinkedIn', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/rodrigonunes13/' },
    { title: 'Start chat', icon: SkypeIcon, link: 'skype:live:nunesrodrigo13_1?chat' },
  ];
  
  return (
    <ul className="rn-social__items">
      {
        items.map(social =>
          <li key={ social.title } className="rn-social__item">
            <a
              rel="noopener"
              target="_blank"
              href={ social.link }
              title={ social.title }
              className="rn-social__link"
            >
              <social.icon />
            </a>
          </li>
        )
      }
    </ul>
  );
}

export default Social;
