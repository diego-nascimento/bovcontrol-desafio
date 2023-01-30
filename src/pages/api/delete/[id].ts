import { deleteCheckList } from '@/shared/http'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler (
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  const {query: {id}, method} = Request
  if(method !== 'DELETE') return Response.status(404).json({message: 'Not found'})
  if(!id)return Response.status(400).json({message: 'bad request'})
  const result = await deleteCheckList(parseInt(id.toString()))
  return Response.status(result.statusCode).json({})
}