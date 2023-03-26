import { prisma } from "@/services/database/prismadb"
import { NextApiRequest, NextApiResponse } from "next/types"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== 'GET') {
		return res.status(405).end()
	}
  
	const reviews = await prisma.rating.findMany({
    orderBy: [
      {
        created_at: 'desc'
      }
    ],
    include: {
      book: true, 
      user: true
    }
  });

	return res.status(200).json({ reviews })
}

