import React from 'react';
import { FieldErrorsImpl, UseFormReturn } from 'react-hook-form';
import * as SC from './style';

interface Props {
  placeholder: string;
  register: UseFormReturn['register'];
  field: string;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

export const CheckboxInput = ({
  errors,
  field,
  placeholder,
  register,
}: Props) => {
  return (
    <SC.Wrapper>
      <SC.Label>{placeholder}</SC.Label>
      <SC.Input type={'checkbox'} {...register(field)} />
      {errors[field]?.message && (
        <SC.Error>{errors[field]?.message?.toString()}</SC.Error>
      )}
    </SC.Wrapper>
  );
};
