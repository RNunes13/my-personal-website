import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import { Footer, Header } from 'components'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <main>
      <Header
        sidebarIsOpen={false}
        handleSidebar={(v: boolean) => console.log(v)}
      />
      {Array(30)
        .fill(null)
        .map(() => (
          <>
            <p>Lorem ipsum...</p>
            <br />
          </>
        ))}
      <Footer t={t} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
})
