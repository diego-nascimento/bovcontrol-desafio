import React from 'react';
import { GetServerSideProps } from 'next';
import { getChecklistService } from '@/shared/services/getCheckListService';
import { checkListTypes } from '@/types/checklist';
import { Home as HomeComponent } from '@/modules';
interface HomeProps {
  checklists: checkListTypes[];
}

const Home = ({ checklists }: HomeProps) => {
  return <HomeComponent checklists={checklists} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const checklists = await getChecklistService();
  return {
    props: {
      checklists,
    },
  };
};
