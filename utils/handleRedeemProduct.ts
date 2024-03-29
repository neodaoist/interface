import WalletConnect from "@walletconnect/client"
import { Dispatch, SetStateAction } from "react"
import { View } from "@lib/content/modals"

const handleRedeemProduct = async (
  connector: WalletConnect,
  slicerId: number,
  productId: number,
  name: string,
  image: string,
  uid: string,
  creator: string,
  texts: {
    thanks?: string
    instructions?: string
  },
  setLoading: Dispatch<SetStateAction<boolean>>,
  setModalView: Dispatch<SetStateAction<View>>
) => {
  const { CID } = await import("multiformats/cid")
  const { base16 } = await import("multiformats/bases/base16")
  const redeemProduct = (await import("@lib/handlers/chain/redeemProduct"))
    .default
  const handleDecryptData = (await import("@lib/handleDecryptData")).default

  let decryptedFiles: File[] = []
  let decryptedTexts: {} = {}

  setLoading(true)

  const redeemed = await redeemProduct(connector, slicerId, productId)

  if (redeemed[1] != "0x") {
    const purchaseHash = CID.parse(
      "f" + redeemed[1].substring(2),
      base16.decoder
    )
      .toV1()
      .toString()
    const decrypted = await handleDecryptData(
      slicerId,
      name,
      creator,
      uid,
      purchaseHash
    )
    decryptedFiles = decrypted.decryptedFiles
    decryptedTexts = decrypted.decryptedTexts
  }
  setModalView({
    name: "REDEEM_PRODUCT_VIEW",
    cross: true,
    params: {
      slicerId,
      productId,
      name,
      image,
      purchasedQuantity: Number(redeemed[0]),
      texts,
      decryptedFiles,
      decryptedTexts
    }
  })
  setLoading(false)
}

export default handleRedeemProduct
