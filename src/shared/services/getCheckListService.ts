
import { checkListTypes } from "@/types/checklist";
import { getChecklist } from "../http";


export const getChecklistService = async ():Promise<checkListTypes[]> => {
  const result = await getChecklist()
  return result.body
}