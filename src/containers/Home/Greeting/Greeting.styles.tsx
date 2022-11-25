import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import NextImage from 'next/image'
import { Container as ContainerComp } from 'components'
import { large, isMobile, h0, h1, h2, xSmall, h3 } from 'styles/mixins'

const ripple = keyframes`
  0% { transform: scale(0.1); transform: scale(0.1); opacity:1; }
  50% { transform: scale(.5); transform: scale(.5); opacity:0.5; }
  100% { transform: scale(1); transform: scale(1); opacity:0; }
`

export const Section = styled.section`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.colors.base_0};
  height: 100vh;
  min-height: 600px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => `${theme.colors.primary}d9`};
    z-index: 1;
  }
`

export const BackgroundImage = styled(NextImage)`
  z-index: 0;
`

export const Container = styled(ContainerComp)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: ${({ theme }) => theme.spaces.space3};
  padding-bottom: ${({ theme }) => theme.spaces.space3};

  ${large()} {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

export const Greeting = styled.div`
  flex-basis: 50%;
  z-index: 1;

  ${large()} {
    text-align: center;
    flex-basis: auto;
  }
`

export const Title = styled.h1`
  ${h0()}
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spaces.space1};
  font-weight: 700;
  transition-property: font-size;
  transition-duration: 200ms;
  transition-timing-function: ${({ theme }) => theme.transitions.standard};

  ${isMobile()} {
    ${h1()}
    font-weight: 700;
  }

  ${xSmall()} {
    ${h2()}
    font-weight: 700;
  }
`

export const TitleText = styled.span``

export const Intro = styled.p`
  ${h2()}
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 8px;

  ${xSmall()} {
    ${h3()}
  }
`

export const IntroHighlight = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  text-align: center;
  z-index: 1;

  ${large()} {
    margin-bottom: ${({ theme }) => theme.spaces.space3};
    flex-basis: auto;
  }

  ${isMobile()} {
    ${h1()}
  }
`

export const ImageContainer = styled.figure`
  width: 400px;
  height: 400px;
  position: relative;

  ${large()} {
    width: 300px;
    height: 300px;
    margin-top: ${({ theme }) => theme.spaces.space4};
    margin-bottom: ${({ theme }) => theme.spaces.space3};
  }

  ${isMobile()} {
    width: 200px;
    height: 200px;
  }
`

export const Image = styled(NextImage)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition-property: max-width;
  transition-duration: 200ms;
  transition-timing-function: ${({ theme }) => theme.transitions.standard};
`

export const Circles = styled.div<{ photoLoaded: boolean }>`
  width: 550px;
  height: 550px;
  border-radius: 100%;
  position: absolute;
  left: 50%;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  z-index: -1;

  ${({ photoLoaded }) =>
    photoLoaded &&
    `
    visibility: visible;
  `}

  ${large()} {
    width: 450px;
    height: 450px;
  }

  ${isMobile()} {
    width: 300px;
    height: 300px;
  }
`

export const Circle = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  transform: scale(0);
  animation-name: ${ripple};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${({ theme }) => theme.colors.base_0};

  &:nth-child(1) {
    animation-delay: 3.5s;
  }
  &:nth-child(2) {
    animation-delay: 3s;
  }
  &:nth-child(3) {
    animation-delay: 2.5s;
  }
  &:nth-child(4) {
    animation-delay: 2s;
  }
  &:nth-child(5) {
    animation-delay: 1.5s;
  }
  &:nth-child(6) {
    animation-delay: 1s;
  }
  &:nth-child(7) {
    animation-delay: 0.5s;
  }
`
