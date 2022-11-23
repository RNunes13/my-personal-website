import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'
import { Sidebar } from 'components'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main>
      <Sidebar t={t} isOpen={true}/>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
})
