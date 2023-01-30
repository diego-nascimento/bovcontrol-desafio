import { useRouter } from 'next/router';
import { createContext, PropsWithChildren, useContext } from 'react';
import { AlertComponent, Loader, notify } from '../components';
import { useLoading } from '../hooks/useLoading';
import {
  createCheckListInterface,
  httpClient,
  updateCheckListInterface,
} from '../http';
import { checklistContextConstants } from './Constants';

interface contextInterface {
  deleteChecklistService: (id: number) => Promise<void>;
  createChecklistService: (
    checklist: createCheckListInterface,
  ) => Promise<void>;
  updateChecklistService: (
    checklist: updateCheckListInterface,
    id: number,
  ) => Promise<void>;
}

const ChecklistContext = createContext({} as contextInterface);

interface ProviderInterface {}

const ChecklistProvider = ({
  children,
}: PropsWithChildren<ProviderInterface>) => {
  const { reload, push } = useRouter();
  const { isLoading, setLoading } = useLoading();

  const deleteChecklistService = async (id: number): Promise<void> => {
    setLoading(true);
    const result = await httpClient({
      endPoint: `${checklistContextConstants.deleteChecklistEndpoint}/${id}`,
      method: 'DELETE',
    });
    if (result.statusCode === 200) {
      notify('Checklist excluido com sucesso!!', 'success');
      reload();
    } else {
      notify('Algo deu errado, tente novamente!!!', 'error');
    }
    setLoading(false);
  };

  const createChecklistService = async (
    checklist: createCheckListInterface,
  ): Promise<void> => {
    setLoading(true);
    const result = await httpClient({
      endPoint: checklistContextConstants.createChecklistEndpoint,
      method: 'POST',
      data: checklist,
    });

    if (result.statusCode === 201) {
      notify('Checklist criado com sucesso!!', 'success');
      push('/');
    } else {
      notify('Algo deu errado, tente novamente!!!', 'error');
    }

    setLoading(false);
  };

  const updateChecklistService = async (
    checklist: updateCheckListInterface,
    id: number,
  ): Promise<void> => {
    setLoading(true);
    const result = await httpClient({
      endPoint: `${checklistContextConstants.updateChecklistEndpoint}/${id}`,
      method: 'PUT',
      data: checklist,
    });
    if (result.statusCode === 200) {
      notify('Checklist atualizado com sucesso!!', 'success');
      push('/');
    } else {
      notify('Algo deu errado, tente novamente!!!', 'error');
    }
    setLoading(false);
  };

  return (
    <ChecklistContext.Provider
      value={{
        deleteChecklistService,
        createChecklistService,
        updateChecklistService,
      }}
    >
      <>
        <AlertComponent />
        <Loader isLoading={isLoading} />
        {children}
      </>
    </ChecklistContext.Provider>
  );
};

const useChecklist = () => {
  return useContext(ChecklistContext);
};

export { useChecklist, ChecklistProvider };
