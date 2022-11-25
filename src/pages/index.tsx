import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { HomeGreeting } from 'containers'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { t } = useTranslation('home')

  return (
    <>
      <HomeGreeting t={t} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'home'])),
  },
})
