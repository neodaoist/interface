import HomeCake from "@components/icons/HomeCake"
import Logo from "@components/icons/Logo"
import HomeEth from "@components/icons/HomeEth"
import { Banner, Container, HomeHero, HomeSection } from "@components/ui"
import { section1, section2, section3, section4 } from "@lib/text/home"
import HomeDecentralized from "@components/icons/HomeDecentralized"
import { NextSeo } from "next-seo"
import {
  defaultDescription,
  defaultTitle,
  longTitle,
  domain,
} from "@components/common/Head"

const Home = () => {
  return (
    <>
      <NextSeo
        title="The decentralized slicing platform"
        openGraph={{
          title: longTitle,
          description: defaultDescription,
          url: `https://${domain}`,
          images: [
            {
              url: `https://${domain}/og_image.jpg`,
              width: 1000,
              height: 1000,
              alt: `${defaultTitle} cover image`,
            },
          ],
        }}
      />
      <Container page={true}>
        <main className="max-w-screen-lg pb-20 mx-auto text-center">
          <HomeHero />
          <div className=" space-y-36">
            <HomeSection
              text={section1}
              image={<HomeCake className="w-32 sm:w-40" spin />}
            />
            <HomeSection
              text={section2}
              image={<Logo size="w-32 sm:w-36" margin="mt-4 ml-6" spin />}
              side="right"
            />
            <HomeSection
              text={section3}
              image={<HomeEth size="w-32 sm:w-36" spin />}
            />
            <HomeSection
              text={section4}
              image={<HomeDecentralized />}
              side="right"
            />
          </div>
        </main>
      </Container>
      <Banner />
    </>
  )
}

export default Home

/** TODO
 *
 * *Critical Priority*
 *    - add products to slicers -> demonstrate use case with digital collectibles
 *      - show products on slicer page
 *      - edit products
 *      - purchase products
 *      - redeem purchase
 *
 * *High Priority*
 *    - add wallet connect
 *    - FAQs page (see below)
 *    - Fix slicer smart contract receive/reject ERC721
 *
 * *Low Priority*
 *    - add slicer tags in metadata & slicer page
 *    - add products "explore" page
 *    - add detailed section in slicer page (stats & stuff for payees only)
 *    - transfer page (select box to choose slicer)
 *
 *
 *
 *
 *
 * FAQS
 * - How file encryption works
 *
 *
 *
 *
 *
 *
 *
 * USE CASES
 * - Use it as a slicer
 *      - IS NOT digital asset
 *      - Editable metadata
 *      - Can receive external NFTs
 * - Create a new single or fractional NFT
 *      - Slicer IS digital asset
 *      - non editable metadata
 *      - CANNOT receive external NFTs or slicers
 *
 * NFT PRODUCTS IDEAS
 * - special concert ticket
 * - appear as gold/silver/.. sponsor to the slicer
 * - something related to image copyright -> right to use image?
 * - PDF with the NFT behind the scenes
 * - Buy movie / music / game / game add-on
 *
 * FILE STORAGE
 * - https://web3.storage
 *
 * BEFORE FINAL DEPLOY
 * - Check if it's ok how metadata is handled for collectible slicers
 *
 * OTHER
 * - (LP) Set maximum batch values before deploying on mainnet (and removing not needed functions to set them)
 * - Handle ERC20
 * - DeGov logics
 */
