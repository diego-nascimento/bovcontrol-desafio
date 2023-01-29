import { Layout } from '@/shared/components';
import { checkListTypes } from '@/types/checklist';
import React from 'react';
import { Checklist } from './components';
import * as SC from './styles';

interface HomeComponentProps {
  checklists: checkListTypes[];
}

export const Home = ({ checklists }: HomeComponentProps) => {
  return (
    <Layout>
      <SC.Wrapper>
        <SC.Container>
          {checklists.map((checklist) => {
            return <Checklist key={checklist._id} checklist={checklist} />;
          })}
        </SC.Container>
      </SC.Wrapper>
    </Layout>
  );
};
