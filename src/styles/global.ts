import { css } from '@emotion/react'
import { theme } from './theme/Theme'

export const GlobalStyles = css`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    cursor: default;
    height: 100%;
    font-weight: 400;
    font-family: ${theme.fonts.baseFontFamily};
    word-break: break-word;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    max-height: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${theme.colors.base_20};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &.has--no-scroll {
      overflow: hidden;
    }
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    background-color: transparent;
  }

  p {
    margin: 0;
  }

  figure {
    margin: 0;
  }

  img {
    border-style: none;
    max-width: 100%;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
`
