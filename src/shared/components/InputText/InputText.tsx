import React from 'react';
import { FieldErrorsImpl, UseFormReturn } from 'react-hook-form';
import * as SC from './style';

interface Props {
  type: 'text' | 'number';
  placeholder: string;
  register: UseFormReturn['register'];
  field: string;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

export const InputText = ({
  type,
  errors,
  field,
  placeholder,
  register,
}: Props) => {
  return (
    <SC.Wrapper>
      <SC.Label>{placeholder}</SC.Label>
      <SC.Input type={type} {...register(field)} />
      {errors[field]?.message && (
        <SC.Error>{errors[field]?.message?.toString()}</SC.Error>
      )}
    </SC.Wrapper>
  );
};
