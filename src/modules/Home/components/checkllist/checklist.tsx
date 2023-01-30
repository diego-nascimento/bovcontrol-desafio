import { Button, InfoContainer, Warning } from '@/shared/components';
import { Information } from '@/shared/components/Information/Information';
import { convertDate } from '@/shared/utils/convertDate';
import { checkListTypes } from '@/types/checklist';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi';

import React, { useState } from 'react';
import * as SC from './style';
import { useRouter } from 'next/router';
import { useChecklist } from '@/shared/context/ChecklistContext';

interface ChecklistProps {
  checklist: checkListTypes;
}

export const Checklist = ({ checklist }: ChecklistProps) => {
  const { push } = useRouter();
  const { deleteChecklistService } = useChecklist();
  const [deleting, setDeleting] = useState(false);

  const handleIsDeleting = () => {
    setDeleting(true);
  };

  const handleIsNotDeleting = () => {
    setDeleting(false);
  };

  const handleClickOnEditButton = () => {
    push(`/checklist/editar/${checklist._id}`);
  };

  const handleViewChecklist = () => {
    push(`/checklist/${checklist._id}`);
  };
  return (
    <>
      {deleting && (
        <Warning
          title="Deletando"
          message="Deseja realmente deletar esse registro?"
          callback={() => deleteChecklistService(checklist._id)}
          removeModal={handleIsNotDeleting}
        />
      )}
      <SC.Wrapper>
        <SC.Header>
          <SC.CreatedAt>
            <span>Cadastrado em: </span>
            {convertDate({ dateAsString: checklist.created_at })}
          </SC.CreatedAt>
          <SC.ButtonsContainer>
            <Button Icon={BiShow} callback={handleViewChecklist} />
            <Button Icon={AiOutlineEdit} callback={handleClickOnEditButton} />
            <Button Icon={AiOutlineDelete} callback={handleIsDeleting} />
          </SC.ButtonsContainer>
        </SC.Header>
        <SC.Main>
          <InfoContainer label="Fazendeiro">
            <Information label="Nome" info={checklist.from.name} />
          </InfoContainer>
          <InfoContainer label="Fazenda">
            <Information label="Nome" info={checklist.farmer.name} />
            <Information label="Cidade" info={checklist.farmer.city} />
          </InfoContainer>
        </SC.Main>
      </SC.Wrapper>
    </>
  );
};
