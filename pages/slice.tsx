import Link from "next/link"
import { useState } from "react"
import {
  ActionScreen,
  ConnectBlock,
  Container,
  DoubleText,
  SliceForm
} from "@components/ui"
import { LogDescription } from "ethers/lib/utils"
import getLog from "@utils/getLog"
import { NextSeo } from "next-seo"
import {
  defaultDescription,
  defaultTitle,
  domain
} from "@components/common/Head"
import mixpanel from 'mixpanel-browser'

export default function Slice() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [logs, setLogs] = useState<LogDescription[]>()
  const eventLog = getLog(logs, "TokenSliced")

  mixpanel.init(process.env.MIXPANEL_DEV_ENV_TOKEN, {debug: true}); 
  mixpanel.track('View Create Store');

  return (
    <Container page={true}>
      <NextSeo
        title="Create a new slicer"
        openGraph={{
          title: `Create a new slicer | ${defaultTitle}`,
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

      <ConnectBlock>
        <main>
          {!success ? (
            !loading ? (
              <>
                <DoubleText
                  inactive
                  logoText={`Create a Slicer`}
                  size="text-4xl sm:text-5xl"
                  position="pb-4 sm:pb-6"
                />
                <div className="py-6 mx-auto space-y-4 sm:px-6 max-w-screen-xs">
                  <p>
                    When a slicer receives ETH, owners receive an amount
                    proportional to the held slices.
                  </p>
                  <p>
                    Slices are{" "}
                    <DoubleText
                      inactive
                      logoText="fractionalized NFTs"
                      size="text-normal"
                    />{" "}
                    (ERC1155 tokens) that represent ownership over a slicer.
                  </p>
                </div>
                <SliceForm
                  success={success}
                  setLoading={setLoading}
                  setSuccess={setSuccess}
                  setLogs={setLogs}
                />
              </>
            ) : (
              <ActionScreen
                text="Slicing in progress ..."
                helpText={
                  <div className="max-w-sm pb-6 mx-auto space-y-6">
                    <p>
                      Please wait while the blockchain does its thing, or find
                      the slicer later in your{" "}
                      <Link href="/profile">
                        <a className="font-black highlight">profile section</a>
                      </Link>{" "}
                    </p>

                    <p className="max-w-sm mx-auto">
                      To make the slicer immediately appear on the website{" "}
                      <b className="text-yellow-600">
                        don&apos;t leave this page until the process has
                        completed
                      </b>
                    </p>
                  </div>
                }
                loading
              />
            )
          ) : (
            <ActionScreen
              highlightTitle="Slicer created! 🍰"
              helpText={
                <div className="max-w-lg pb-6 mx-auto space-y-4">
                  <p>
                    Your slicer address is <b>{eventLog && eventLog[0]}</b>
                  </p>
                  <p>
                    If you are a superowner, you can now customize it by
                    clicking on the edit icon near the slicer name
                  </p>
                </div>
              }
              buttonLabel="Go to slicer"
              href={`/slicer/${Number(eventLog?.tokenId)}`}
              buttonLabelSecondary="Create a new Slicer"
              onClickSecondary={() => setSuccess(false)}
            />
          )}
        </main>
      </ConnectBlock>
    </Container>
  )
}
