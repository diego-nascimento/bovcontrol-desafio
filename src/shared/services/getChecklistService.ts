
import { checkListTypes } from "@/types/checklist";
import { getCheckList } from "../http";


export const getChecklistService = async (id: string):Promise<checkListTypes | null> => {
  const result = await getCheckList(id)
  if(result.statusCode !== 200) return null
  return result.body
}