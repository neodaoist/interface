import prisma from "@lib/db"

const CreateProduct = async (
  productId: number,
  slicerId: number,
  name: string,
  description: string,
  hash: string,
  image?: string
) => {
  const query = await prisma.product.create({
    data: { productId, slicerId, name, description, image, hash },
  })

  return query
}

export default CreateProduct
