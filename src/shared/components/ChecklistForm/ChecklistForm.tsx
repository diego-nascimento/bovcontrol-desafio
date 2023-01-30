import { useFormInput } from '@/shared/hooks';
import { convertDate } from '@/shared/utils/convertDate';
import { checkListTypes } from '@/types/checklist';
import dynamic from 'next/dynamic';
import React from 'react';
import { CheckboxInput } from '../checkboxInput';
import { InfoContainer } from '../InfoContainer';
import { InputText } from '../InputText';
import { optionsProps, SelectInput } from '../SelectInput';
import { checklistYupSchema } from './checkListSchema';
import * as SC from './style';

const Map = dynamic(
  () => import('@/shared/components/Map/Map').then((object) => object.Map),
  {
    ssr: false,
  },
);

interface Props {
  checklist?: checkListTypes;
}

const farmTypeOptions: optionsProps[] = [
  {
    text: 'BPA',
    value: 'BPA',
  },
  {
    text: 'Antibiótico',
    value: 'Antibiótico',
  },
  {
    text: 'BPF',
    value: 'BPF',
  },
];

export const ChecklistForm = ({ checklist }: Props) => {
  const { errors, onSubmit, register } = useFormInput({
    yupSchema: checklistYupSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <SC.Wrapper>
      <SC.Header>
        <SC.CreatedAt>
          <span>Cadastro sendo realizado em: </span>
          {convertDate({ dateAsString: new Date().toString() })}
        </SC.CreatedAt>
      </SC.Header>
      <SC.Main>
        <InfoContainer label="Fazendeiro">
          <InputText
            errors={errors}
            register={register}
            field={'farmerName'}
            type="text"
            placeholder="Nome do fazendeiro"
          />
          <InputText
            errors={errors}
            register={register}
            field={'farmerCity'}
            type="text"
            placeholder="Nome da Cidade do fazendeiro"
          />
        </InfoContainer>

        <InfoContainer label="Fazenda">
          <SC.SideBySide>
            <SelectInput
              field="farmType"
              register={register}
              options={farmTypeOptions}
            />
            <CheckboxInput
              errors={errors}
              register={register}
              field={'supervised'}
              placeholder="Supervisionado"
            />
          </SC.SideBySide>

          <InputText
            errors={errors}
            register={register}
            field={'farmName'}
            type="text"
            placeholder="Nome da Fazenda"
          />
          <InputText
            errors={errors}
            register={register}
            field={'farmCity'}
            type="text"
            placeholder="Cidade da fazenda"
          />
          <SC.Division>
            <InputText
              errors={errors}
              register={register}
              field={'numberOfCows'}
              type="number"
              placeholder="Número de cabeças de gado"
            />
            <InputText
              errors={errors}
              register={register}
              field={'milkProduced'}
              type="number"
              placeholder="Quantidade De Leite Produzido"
            />
          </SC.Division>
        </InfoContainer>
        <Map
          latitude={0}
          longitude={0}
          zoomable={true}
          draggable={true}
          edit={true}
        />
      </SC.Main>
    </SC.Wrapper>
  );
};
