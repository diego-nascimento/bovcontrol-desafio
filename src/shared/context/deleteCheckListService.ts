
import { deleteCheckList, Result } from "../http";

export const deleteChecklistService = async (id: number):Promise<Result> => {
  return await deleteCheckList(id)
}