import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from 'utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

export type MyAppProps = AppProps & { emotionCache: EmotionCache }

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
