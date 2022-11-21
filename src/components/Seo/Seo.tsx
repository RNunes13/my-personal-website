import React from 'react'
import Head from 'next/head'

interface ISeo {
  title?: string
  description?: string
  image?: string
  composed?: boolean
}

const basePath = 'https://rodrigonunes.dev/'
const baseTitle = 'Rodrigo Nunes | Web Developer'
const defaultDescription =
  "I'm a web developer, who likes to work with creative and challenging projects that change people's lives, providing the best experiences."

export const Seo: React.FC<ISeo> = ({
  title,
  description,
  image,
  composed,
}) => {
  const pageTitle =
    composed && title ? `${baseTitle} | ${title}` : title ?? baseTitle

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="description"
        key="description"
        content={description ?? defaultDescription}
      />

      <meta name="theme-color" content="#181923" />
      <meta name="author" content="Rodrigo Nunes" />
      <meta name="copyright" content="RNunes" />
      <meta
        name="keywords"
        content="front-end, frontEnd, back-end, backEnd, full-stack, fullStack, developer, web designer, website, react, javascript, Rodrigo Nunes"
      />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" key="og:type" content="website" />
      <meta property="og:url" content={basePath} />
      <meta property="og:title" key="og:title" content={pageTitle} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image" content="https://rodrigonunes.dev/logo-b.png" />
      <meta
        property="og:site_name"
        key="og:site_name"
        content="Rodrigo Nunes | Web Developer"
      />
      <meta
        property="og:description"
        key="og:description"
        content={description ?? defaultDescription}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:url" content={basePath} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
