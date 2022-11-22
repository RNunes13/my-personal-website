import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import { Footer } from 'components'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <main>
      <Footer t={t} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
})
