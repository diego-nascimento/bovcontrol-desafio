import { updateChecklist } from '@/shared/http'
import { NextApiRequest, NextApiResponse } from 'next'


export default async function handler (
  Request: NextApiRequest,
  Response: NextApiResponse
) {
  const {body: data, method, query: {id}} = Request
  if(method !== 'PUT') return Response.status(404).json({message: 'Not found'})
  
  if(!id)return Response.status(400).json({message: 'bad request'})
  if(!data)return Response.status(400).json({message: 'bad request'})
  const result = await updateChecklist(data, parseInt(id.toString()))
  return Response.status(result.statusCode).json({})
}