/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import Container from '../../Container/Container';
import './About.scss';

// Icons
import { ReactComponent as AwsIcon } from '../../../assets/icons/aws.svg';
import { ReactComponent as CssIcon } from '../../../assets/icons/css3.svg';
import { ReactComponent as HtmlIcon } from '../../../assets/icons/html.svg';
import { ReactComponent as RubyIcon } from '../../../assets/icons/ruby.svg';
import { ReactComponent as SkypeIcon } from '../../../assets/icons/skype.svg';
import { ReactComponent as ReactIcon } from '../../../assets/icons/react.svg';
import { ReactComponent as NodeIcon } from '../../../assets/icons/nodejs.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/github.svg';
import { ReactComponent as JsIcon } from '../../../assets/icons/javascript.svg';
import { ReactComponent as TsIcon } from '../../../assets/icons/typescript.svg';
import { ReactComponent as DiagramIcon } from '../../../assets/icons/diagram.svg';
import { ReactComponent as WebpackIcon } from '../../../assets/icons/webpack.svg';
import { ReactComponent as AdaptationIcon } from '../../../assets/icons/adaptation.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as PostgreIcon } from '../../../assets/icons/postgresql.svg';
import { ReactComponent as MeditationIcon } from '../../../assets/icons/meditation.svg';
import { ReactComponent as ResponsabilityIcon } from '../../../assets/icons/responsibility.svg';

function About({ elementRef }: { elementRef: React.RefObject<HTMLDivElement> }) {
  const age = (new Date()).getFullYear() - 1998;

  const socials: { title: string, icon: React.FunctionComponent, link: string }[] = [
    { title: 'GitHub', icon: GithubIcon, link: 'https://github.com/RNunes13' },
    { title: 'LinkedIn', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/rodrigonunes13/' },
    { title: 'Start chat', icon: SkypeIcon, link: 'skype:live:nunesrodrigo13_1?chat' },
  ];

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
    { label: 'Organization', icon: DiagramIcon },
    { label: 'Responsibility', icon: ResponsabilityIcon },
    { label: 'Open-mindedness', icon: MeditationIcon },
    { label: 'Adaptability', icon: AdaptationIcon },
  ];

  return (
    <div className="rn-home__about" ref={ elementRef }>
      <Container className="rn-home__about--container">
        <div className="about-wrap">
          <div className="infos">
            <h1 className="title rn-title">About Me</h1>
            <p>
              I'm a website developer, who likes to work with creative and challenging projects that change people's lives, providing the best experiences. As a programmer I always try to work with the best practices for an optimized and functional code, I like to try new technologies and tools that can improve the development.
            </p>
            <p>
              In my free time I dedicate myself to reading, hobbies and research on emerging technologies, design strategies and concepts, and everything else that can be applied to web development
            </p>
          </div>
          <button className="rn-button rn-button__primary">Download CV</button>
        </div>
        <div className="info-wrap">
          <div className="basic-info">
            <h3 className="rn-title">Basic Info</h3>
            <p>
              <strong>Age: </strong> { age }
            </p>
            <p>
              <strong>Phone No: </strong> +55 11 98947-7783
            </p>
            <p>
              <strong>Email: </strong> <a href="mailto:nunesrodrigo13@outlook.com">nunesrodrigo13@outlook.com</a>
            </p>
            <p>
              <strong>Location: </strong> São Paulo, SP, Brazil
            </p>
            <ul className="social-items">
              {
                socials.map(social =>
                  <li key={ social.title } className="social-item">
                    <a className="social-link" href={ social.link } target="_blank" title={ social.title }>
                      <social.icon />
                    </a>
                  </li>
                )
              }
            </ul>
          </div>
          <div className="skills">
            <h3 className="rn-title">My Skills</h3>
            <div className="skills-wrap">
              <div className="skills-development">
                <p>Development</p>
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
                <p>Personal</p>
                <ul className="skill-items">
                  {
                    personalSkills.map(skill =>
                      <li key={ skill.label } className="skill-item">
                        <skill.icon />
                        <span>{ skill.label }</span>
                      </li>  
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About;
