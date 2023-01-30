
import { checkListTypes } from "@/types/checklist";
import { getCheckList } from "../http";


export const getChecklistService = async (id: string):Promise<checkListTypes[]> => {
  const result = await getCheckList(id)
  return result.body
}