import { handleCleanup, reload } from "@lib/handleCreateProduct"
import useQuery from "@utils/subgraphQuery"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { ProductsGrid } from ".."
import Button from "../Button"

export type Product = {
  id: number
  productId: number
  name: string
  shortDescription: string
  description: string
  creator: string
  hash: string
  image: string
  uid: string
  purchaseInfo: {
    files: boolean
    instructions: boolean
    notes: boolean
  }
}

type Props = {
  account: string
  slicerId: string
  slicerAddress: string
  products: any
  editMode: boolean
}

const SlicerProducts = ({
  account,
  slicerId,
  slicerAddress,
  products,
  editMode,
}: Props) => {
  const [loading, setLoading] = useState(false)
  const [showProducts, setShowProducts] = useState<Product[]>([])
  const [pendingProducts, setPendingProducts] = useState<Product[]>([])
  const router = useRouter()

  const tokensQuery = /* GraphQL */ `
  products (where: {slicer: "${slicerId}"}) {
    id
    price
    isUSD
    isInfinite
    isMultiple
    availableUnits
    totalPurchases
    createdAtTimestamp
  }`
  const subgraphData = useQuery(tokensQuery)
  const blockchainProducts = subgraphData?.products

  const handleReload = async () => {
    try {
      if (pendingProducts?.length != 0) {
        await handleCleanup(Number(slicerId), setLoading)
      } else {
        await reload(Number(slicerId), setLoading)
      }
    } catch (err) {
      console.log(err)
    }
    router.reload()
  }

  useEffect(() => {
    setShowProducts(products?.data?.filter((p: Product) => p.productId != null))
    setPendingProducts(products?.data?.filter((p: Product) => !p.productId))
  }, [products])

  return (
    <>
      <ProductsGrid
        slicerId={Number(slicerId)}
        slicerAddress={slicerAddress}
        blockchainProducts={blockchainProducts}
        products={showProducts}
        editMode={editMode}
      />
      {editMode && (
        <div>
          <Button label="Add a new product" href={`${slicerId}/products/new`} />
          {(pendingProducts?.length != 0 ||
            blockchainProducts?.length > products?.data?.length) && (
            <div className="pt-12">
              <p className="pb-4">
                There are pending products for your slicer. <br />
                Click the button below to reload them.
              </p>
              <Button
                label="Reload products"
                type="button"
                loading={loading}
                onClick={async () => await handleReload()}
              />
            </div>
          )}
          <hr className="w-20 mx-auto mt-16 border-gray-300" />
        </div>
      )}
    </>
  )
}

export default SlicerProducts

// Todo?: Make pendingSlicer section appear only if 15 minutes have elapsed
