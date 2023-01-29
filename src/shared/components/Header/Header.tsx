import React from 'react';
import { Button } from '../Button';
import * as SC from './style';
import { AiOutlineHome, AiOutlineForm } from 'react-icons/ai';
import { useRouter } from 'next/router';

export const Header = () => {
  const { push } = useRouter();

  const handleGoToNew = () => {
    push('/novo');
  };
  return (
    <SC.Header>
      <SC.Container>
        <Button
          text="Inicio"
          Icon={AiOutlineHome}
          callback={handleGoToNew}
          iconSize={25}
          scaleAnimation={false}
          asLink={true}
          url={'/'}
        />
        <Button
          text="Novo"
          Icon={AiOutlineForm}
          iconSize={25}
          scaleAnimation={false}
          asLink={true}
          url={'/novo'}
        />
      </SC.Container>
    </SC.Header>
  );
};
