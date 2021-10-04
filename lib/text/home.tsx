import { DoubleText } from "@components/ui"

export const section1 = (
  <>
    <h1 className="!mb-2">
      Meet the <DoubleText inactive logoText="Slicer" size="text-normal" />
    </h1>
    <p>
      A smart contract designed to <b>distribute any ETH it receives</b> to its
      owners, proportionally to their owned{" "}
      <DoubleText logoText="slices 🍰" size="text-normal" inactive />
    </p>
    <p>
      The cool thing about slicers is they can be used to represent any entity,
      project or digital asset. They generate revenue and split it among all
      their owners.
    </p>
  </>
)

export const section2 = (
  <>
    <h1 className="!mb-2">
      Hold 🍰, <DoubleText inactive logoText="Earn Ξ" size="text-normal" />
    </h1>
    <p>
      {" "}
      Slices are{" "}
      <DoubleText
        inactive
        logoText="Semi-Fungible Tokens"
        size="text-normal"
      />{" "}
      (fractional NFTs) that represent ownership of a slicer.
    </p>
    <p>
      They&apos;re ERC1155 tokens so you&apos;re free to transfer or sell your
      slices however you prefer (even on{" "}
      <a href="https://opensea.io" target="_blank" rel="noreferrer">
        Opensea
      </a>
      ), and the slicer will always give you any ETH you earned.
    </p>
  </>
)

export const section3 = (
  <>
    <h1 className="!mb-2">
      <DoubleText inactive logoText="Decentralized" size="text-normal" /> stores
    </h1>
    <p>
      In addition to all its features, slicers can have their own{" "}
      <DoubleText inactive logoText="products" size="text-normal" /> and sell
      them from their main page. Think of it like a{" "}
      <b>decentralized online store that can sell anything</b>.
    </p>
    <p>
      The best part is that this is all decentralized, and product data are
      encrypted in such a way that only those who buy them can see their
      content.
    </p>
  </>
)

export const section4 = (
  <>
    <h1 className="!mb-2">
      NFTs with <DoubleText inactive logoText="real value" size="text-normal" />
    </h1>
    <p>
      The ETH income generated by slicers is publicly available, which make
      slices <b>the first tradable NFTs with an objective value</b>.
    </p>
    <p>
      This also opens up to many exciting use cases, with slicers acting as an{" "}
      <b>independent, decentralized payments infrastructure</b> and counterpart
      to many real-world applications.
    </p>
    {/* <p>
      However there is no right way or limit to how slicers can be used, so feel
      free to experiment with them.
    </p> */}
  </>
)
