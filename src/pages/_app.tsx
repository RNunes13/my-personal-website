import Head from 'next/head'
import {
  CacheProvider,
  EmotionCache,
  ThemeProvider,
  Global,
} from '@emotion/react'

import { Seo, Layout } from 'components'
import { appWithTranslation } from 'next-i18next'
import createEmotionCache from 'utils/createEmotionCache'

import { theme } from 'styles/theme/Theme'
import { GlobalStyles } from 'styles/global'

import type { AppProps } from 'next/app'

const clientSideEmotionCache = createEmotionCache()

export type MyAppProps = AppProps & { emotionCache: EmotionCache }

// eslint-disable-next-line no-console
console.log(`NODE_ENV`, process.env.NODE_ENV)

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Global styles={GlobalStyles} />
      <Seo />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)
