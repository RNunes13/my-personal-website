import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <div>
      {Array(80)
        .fill(null)
        .map((_, idx) => (
          <p key={idx}>Home view</p>
        ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
})
