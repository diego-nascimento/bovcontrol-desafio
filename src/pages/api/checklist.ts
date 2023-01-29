// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getChecklist } from '@/shared/http'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getChecklist()
  res.status(response.statusCode).json(response.body)
}
