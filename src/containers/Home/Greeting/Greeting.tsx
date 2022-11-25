import React, { useState } from 'react'

import * as Styled from './Greeting.styles'

export interface GreetingProps {
  t: (key: string, options?: object) => string
}

const CIRCLES_NUMBER = 8

const getGreetingText = (): string => {
  const hours = parseInt(
    new Date()
      .toLocaleTimeString('pt-BR', { hourCycle: 'h23' })
      .substring(0, 2),
    10,
  )

  if (hours >= 5 && hours < 12) return 'greeting.morning'
  if (hours >= 12 && hours < 18) return 'greeting.afternoon'
  if (hours >= 18 || hours < 5) return 'greeting.night'

  return 'greeting.fallback'
}

export const Greeting: React.FC<GreetingProps> = ({ t }) => {
  const [photoLoaded, setPhotoLoaded] = useState<boolean>(false)

  return (
    <Styled.Section>
      <Styled.BackgroundImage
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="/images/background.jpg"
        alt="background"
      />

      <Styled.Container>
        <Styled.Greeting>
          <Styled.Title>
            <Styled.TitleText>{t(getGreetingText())}</Styled.TitleText>
            <Styled.TitleText>{t('greeting.name')}</Styled.TitleText>
          </Styled.Title>

          <Styled.Intro>
            {t('greeting.grammaticalClass')}
            <Styled.IntroHighlight>{t('greeting.work')}</Styled.IntroHighlight>
          </Styled.Intro>
        </Styled.Greeting>

        <Styled.ProfileImage>
          <Styled.ImageContainer>
            <Styled.Image
              height={400}
              width={400}
              src="/images/profile.jpg"
              alt="Rodrigo Nunes"
              onLoad={() => {
                setTimeout(() => setPhotoLoaded(true), 2000)
              }}
            />
            <Styled.Circles photoLoaded={photoLoaded}>
              {Array(CIRCLES_NUMBER)
                .fill(null)
                .map((_, i) => (
                  <Styled.Circle key={`circle-${i}`} />
                ))}
            </Styled.Circles>
          </Styled.ImageContainer>
        </Styled.ProfileImage>
      </Styled.Container>
    </Styled.Section>
  )
}
