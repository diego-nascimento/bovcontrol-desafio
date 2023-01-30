import { createCheckList } from '@/shared/http'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler (
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  const {body: data, method} = Request
  if(method !== 'POST') return Response.status(404).json({message: 'Not found'})
  if(!data)return Response.status(400).json({message: 'bad request'})
  const result = await createCheckList(data)
  return Response.status(result.statusCode).json({})
}