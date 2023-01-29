import { checkListTypes } from '@/types/checklist';
import { useRouter } from 'next/router';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useLoading } from '../hooks/useLoading';
import { deleteCheckList } from '../http';

interface contextInterface {
  checklists: checkListTypes[];
  deleteChecklistService: (id: number) => Promise<void>;
}

const ChecklistContext = createContext({} as contextInterface);

interface ProviderInterface {
  checklistsFetched: checkListTypes[];
}

const ChecklistProvider = ({
  checklistsFetched,
  children,
}: PropsWithChildren<ProviderInterface>) => {
  const [checklists, setChecklists] =
    useState<checkListTypes[]>(checklistsFetched);
  const { reload } = useRouter();
  const { isLoading, setLoading } = useLoading();

  const deleteChecklistService = async (id: number): Promise<void> => {
    setLoading(true);
    const result = await deleteCheckList(id);
    if (result.statusCode === 200) {
      setChecklists(checklists.filter((checklist) => checklist._id !== id));
      reload();
    } else {
    }

    setLoading(false);
  };

  return (
    <ChecklistContext.Provider value={{ checklists, deleteChecklistService }}>
      {children}
    </ChecklistContext.Provider>
  );
};

const useChecklist = () => {
  return useContext(ChecklistContext);
};

export { useChecklist, ChecklistProvider };
