import React from 'react';
import { Button } from '../Button';
import * as SC from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { useTheme } from 'styled-components';

interface Props {
  callback: () => Promise<void>;
  title: string;
  message: string;
  removeModal: () => void;
}

export const Warning = ({ callback, message, title, removeModal }: Props) => {
  const theme = useTheme();
  const handleCallback = async () => {
    await callback();
    removeModal();
  };
  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.IconWrapper>
          <SC.IconContainer>
            <AiOutlineClose size={40} color={theme.colors.warningBackground} />
          </SC.IconContainer>
        </SC.IconWrapper>
        <SC.TextContainer>
          <SC.Title>{title}</SC.Title>
          <SC.Message>{message}</SC.Message>
          <SC.ButtonsContainer>
            <Button
              text="Deletar"
              scaleAnimation={false}
              callback={handleCallback}
            />
            <Button
              text="Cancelar"
              scaleAnimation={false}
              callback={removeModal}
            />
          </SC.ButtonsContainer>
        </SC.TextContainer>
      </SC.Container>
    </SC.Wrapper>
  );
};
