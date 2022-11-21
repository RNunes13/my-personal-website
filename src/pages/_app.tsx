import Head from 'next/head'
import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'

import { Seo } from 'components/Seo/Seo'
import { appWithTranslation } from 'next-i18next'
import createEmotionCache from 'utils/createEmotionCache'
import { theme } from 'styles/theme/Theme'

import type { AppProps } from 'next/app'

const clientSideEmotionCache = createEmotionCache()

export type MyAppProps = AppProps & { emotionCache: EmotionCache }

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Seo />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
