import { FieldValues, useForm } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type onSubmitType = (data: FieldValues) => Promise<null>;

interface Props {
  yupSchema: AnyObjectSchema;
  onSubmit: onSubmitType;
  initialValues: any;
}

export const useFormInput = ({
  yupSchema,
  onSubmit: handleOnSubmit,
  initialValues,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(yupSchema),
    reValidateMode: 'onChange',
    defaultValues: initialValues,
  });
  const onSubmit = handleSubmit((data) => handleOnSubmit(data));
  return {
    register,
    errors,
    onSubmit,
    setValue,
    getValues,
  };
};
