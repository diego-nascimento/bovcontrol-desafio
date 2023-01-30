import { checkListTypes } from "@/types/checklist"
import axios from "axios"

export interface Params {
    data?: any
    url?: string
    endPoint: string
    headers?: any
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE'
}

export interface Result {
    statusCode: number
    body: any
}

async function httpClient({
    data, 
    endPoint, 
    headers, 
    url = 'http://challenge-front-end.bovcontrol.com', 
    method = 'GET'
}:Params):Promise<Result>  {
    try {
        const response = await axios.request({
            baseURL: url,
            url: endPoint,
            data,
            headers,
            method
        })
        return {
            statusCode: response.status,
            body: response.data
        }
    } catch (error) {
        console.log({
            statusCode: 500,
        message: error instanceof Error ? error.message : 'Something went wrong'})
        return {
            statusCode: 500,
            body: 'Something went wrong'
        }
    }
   
}

export const getChecklists = async ():Promise<Result> => {
    const response = await httpClient({
        endPoint: '/v1/checkList',
        method: 'GET'
    })
    return response
}

export const getCheckList = async (id: string)=> {
    const response = await httpClient({
        endPoint: `/v1/checkList/${id}`,
        method: 'GET'
    })
    return response
}

interface  createCheckListInterface  extends  Omit<checkListTypes, '_id'> {
    id: string
}

export const createCheckList = async (data:createCheckListInterface) => {
    const response = await httpClient({
        endPoint: '/v1/checkList',
        method: 'POST',
        data
    })
    return response
}

export const deleteCheckList = async (id: number)=> {
    const response = await httpClient({
        endPoint: `/v1/checkList/${id}`,
        method: 'DELETE'
    })
    return response
}