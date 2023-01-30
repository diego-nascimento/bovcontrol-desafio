import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import * as SC from './style';

export interface optionsProps {
  value: string;
  text: string;
}

interface Props {
  register: UseFormReturn['register'];
  field: string;
  options: optionsProps[];
}

export const SelectInput = ({ field, register, options }: Props) => {
  return (
    <SC.Select {...register(field)} defaultValue={options[0].value}>
      {options.map((option, index) => {
        return (
          <SC.Option value={option.value} key={index}>
            {option.text}
          </SC.Option>
        );
      })}
    </SC.Select>
  );
};
