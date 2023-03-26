import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}
  
  const teste = req.query

  console.log(teste)
	const books = await prisma.book.findMany({
    orderBy: [
      {
        created_at: 'desc'
      }
    ]
  });

	return res.status(200).json({ books })
}

