import React from 'react';
import { GetServerSideProps } from 'next';

import { checkListTypes } from '@/types/checklist';
import { Home as HomeComponent } from '@/modules';
import { getChecklistsService } from '@/shared/services/getCheckListsService';
interface HomeProps {
  checklists: checkListTypes[];
}

const Home = ({ checklists }: HomeProps) => {
  return <HomeComponent checklists={checklists} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const checklists = await getChecklistsService();
  return {
    props: {
      checklists: checklists.length ? checklists : [],
    },
  };
};
