
import { checkListTypes } from "@/types/checklist";
import { getChecklists } from "../http";


export const getChecklistsService = async ():Promise<checkListTypes[]> => {
  const result = await getChecklists()
  
  return result.body ?? []
}