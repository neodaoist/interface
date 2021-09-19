import type { NextApiRequest, NextApiResponse } from "next"
import { CreateProduct, UpdateProduct } from "@lib/handlers/prisma"
import prisma from "@lib/db"
import corsMiddleware from "@utils/corsMiddleware"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await corsMiddleware(req, res)
  const { id, productId, name, pending } = req.query
  let data: any

  try {
    if (req.method === "GET") {
      if (pending == "true") {
        data = await prisma.product.findMany({
          where: {
            AND: [
              {
                slicerId: { equals: Number(id) },
              },
              {
                productId: { equals: null },
              },
              {
                createdAt: {
                  lte: new Date(Date.now() - 1000 * 60 * 60),
                },
              },
            ],
          },
        })
      }
      // else {
      //   data = await prisma.product.count({
      //     where: {
      //       AND: [
      //         {
      //           slicerId: { equals: Number(id) },
      //         },
      //         {
      //           name: { equals: String(name) },
      //         },
      //       ],
      //     },
      //   })
      // }
    }

    if (req.method === "POST") {
      const { name, description, image, creator, uid, hash, tempProductHash } =
        JSON.parse(req.body)
      data = await CreateProduct(
        Number(id),
        name,
        description,
        creator,
        uid,
        hash,
        tempProductHash,
        image
      )
    }

    if (req.method === "PUT") {
      const { id, tempProductHash, productId } = JSON.parse(req.body)
      data = await UpdateProduct(Number(id), tempProductHash, Number(productId))
    }

    if (req.method === "DELETE") {
      data = await prisma.product.delete({
        where: { id: Number(productId) },
      })
    }

    res.status(200).json({ data })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export default handler
