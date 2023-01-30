import { Edit } from '@/modules';
import { getChecklistService } from '@/shared/services/getChecklistService';
import { checkListTypes } from '@/types/checklist';

import { GetServerSideProps } from 'next';
import React from 'react';

interface Props {
  checklist: checkListTypes;
}

export const EditChecklist = ({ checklist }: Props) => {
  return <Edit checklist={checklist} />;
};

export default EditChecklist;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;

  if (!id && typeof id !== 'string')
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };

  const checklist = await getChecklistService(id.toString());
  return {
    props: {
      checklist,
    },
  };
};
