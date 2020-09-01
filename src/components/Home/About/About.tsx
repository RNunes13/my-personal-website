/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import { Container, Button, Social } from '../../index';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import './About.scss';

// Icons
import { ReactComponent as AwsIcon } from '../../../assets/icons/aws.svg';
import { ReactComponent as CssIcon } from '../../../assets/icons/css3.svg';
import { ReactComponent as HtmlIcon } from '../../../assets/icons/html.svg';
import { ReactComponent as RubyIcon } from '../../../assets/icons/ruby.svg';
import { ReactComponent as ReactIcon } from '../../../assets/icons/react.svg';
import { ReactComponent as NodeIcon } from '../../../assets/icons/nodejs.svg';
import { ReactComponent as JsIcon } from '../../../assets/icons/javascript.svg';
import { ReactComponent as TsIcon } from '../../../assets/icons/typescript.svg';
import { ReactComponent as DiagramIcon } from '../../../assets/icons/diagram.svg';
import { ReactComponent as WebpackIcon } from '../../../assets/icons/webpack.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/icons/download.svg';
import { ReactComponent as PostgreIcon } from '../../../assets/icons/postgresql.svg';
import { ReactComponent as AdaptationIcon } from '../../../assets/icons/adaptation.svg';
import { ReactComponent as MeditationIcon } from '../../../assets/icons/meditation.svg';
import { ReactComponent as ResponsabilityIcon } from '../../../assets/icons/responsibility.svg';

interface AboutProps extends WithNamespaces {
  elementRef: React.RefObject<HTMLDivElement>;
  t?: any;
}

function About({ elementRef, t }: AboutProps) {
  const age = (new Date()).getFullYear() - 1998;

  const devSkills: { label: string, icon: React.FunctionComponent }[] = [
    { label: 'HTML/PUGjs', icon: HtmlIcon },
    { label: 'CSS/SASS', icon: CssIcon },
    { label: 'JavaScript', icon: JsIcon },
    { label: 'TypeScript', icon: TsIcon },
    { label: 'React JS', icon: ReactIcon },
    { label: 'Node JS', icon: NodeIcon },
    { label: 'Webpack', icon: WebpackIcon },
    { label: 'AWS', icon: AwsIcon },
    { label: 'Ruby on Rails', icon: RubyIcon },
    { label: 'PostgreSQL', icon: PostgreIcon },
  ];

  const personalSkills: { label: string, icon: React.FunctionComponent }[] = [
    { label: 'about.skills_personal.organization', icon: DiagramIcon },
    { label: 'about.skills_personal.responsibility', icon: ResponsabilityIcon },
    { label: 'about.skills_personal.openMindedness', icon: MeditationIcon },
    { label: 'about.skills_personal.adaptability', icon: AdaptationIcon },
  ];

  return (
    <section className="rn-home__about" ref={ elementRef }>
      <Container className="rn-home__about--container">
        <div className="about-wrap">
          <div className="infos">
            <h1 className="title rn-title">{ t('about.title') }</h1>
            <p>{ t('about.paragraphs.one') }</p>
            <p>{ t('about.paragraphs.two') }</p>
          </div>
          <Button ariaLabel="Download" type="button">
            <DownloadIcon aria-hidden="true" />
            { t('about.download') }
          </Button>
        </div>
        <div className="info-wrap">
          <div className="basic-info">
            <h2 className="rn-title">{ t('about.info_title') }</h2>
            <p>
              <strong>{ t('about.age') }: </strong> { age }
            </p>
            <p>
              <strong>Email: </strong> <a href="mailto:nunesrodrigo13@outlook.com">nunesrodrigo13@outlook.com</a>
            </p>
            <p>
              <strong>{ t('about.location') }: </strong> São Paulo, SP, Brazil
            </p>
            <Social />
          </div>
          <div className="skills">
            <h2 className="rn-title">{ t('about.skills_title') }</h2>
            <div className="skills-wrap">
              <div className="skills-development">
                <p>{ t('about.skills_dev') }</p>
                <ul className="skill-items">
                  {
                    devSkills.map(skill =>
                      <li key={ skill.label } className="skill-item">
                        <skill.icon />
                        <span>{ skill.label }</span>
                      </li>  
                    )
                  }
                </ul>
              </div>
              <div className="skills-personal">
                <p>{ t('about.skills_personal.title') }</p>
                <ul className="skill-items">
                  {
                    personalSkills.map(skill =>
                      <li key={ skill.label } className="skill-item">
                        <skill.icon />
                        <span>{ t(skill.label) }</span>
                      </li>  
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default withNamespaces()(About);
