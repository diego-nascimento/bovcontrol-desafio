import React from 'react';
import * as SC from './style';

interface Props {
  label: string;
  info: string;
}

export const Information = ({ info, label }: Props) => {
  return (
    <SC.Wrapper>
      <SC.Label>{label}: </SC.Label>
      <SC.Value>{info}</SC.Value>
    </SC.Wrapper>
  );
};
