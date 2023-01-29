import { checkListTypes } from "@/types/checklist";
import { createCheckList,  Result } from "../http";

export const createChecklistService = async (data:checkListTypes):Promise<Result> => {
  return await createCheckList({
    ...data,
    id: data._id.toString()
  })
}