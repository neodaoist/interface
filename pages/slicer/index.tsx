import { Container, DoubleText, SlicersGrid } from "@components/ui"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { NextSeo } from "next-seo"
import {
  defaultDescription,
  defaultTitle,
  longTitle,
  domain
} from "@components/common/Head"
import fetcher from "@utils/fetcher"
import mixpanel from 'mixpanel-browser'

export type SlicerReduced = {
  id: number
  name: string | null
  tags: string | null
  description: string | null
  image: string | null
  isImmutable: boolean | null
}

const SlicerGrid = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  mixpanel.init(process.env.MIXPANEL_DEV_ENV_TOKEN, {debug: true}); 
  mixpanel.track('View Explore Stores');

  return (
    <Container page={true}>
      <NextSeo
        title="Slicers"
        openGraph={{
          title: longTitle,
          description: defaultDescription,
          url: domain,
          images: [
            {
              url: `${domain}/og_image.jpg`,
              width: 1000,
              height: 1000,
              alt: `${defaultTitle} cover image`
            }
          ]
        }}
      />
      <main className="max-w-[420px] mx-auto sm:max-w-screen-lg">
        <DoubleText
          inactive
          logoText="Slicers"
          size="text-4xl sm:text-5xl"
          position="pb-12"
        />
        <SlicersGrid data={data} />
      </main>
    </Container>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  const data: SlicerReduced[] = await fetcher(`${baseUrl}/api/slicer`)
  // const data = [] //

  return {
    props: {
      data
    },
    revalidate: 10
  }
}

export default SlicerGrid
