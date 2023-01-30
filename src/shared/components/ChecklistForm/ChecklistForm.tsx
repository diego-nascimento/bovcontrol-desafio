import { onSubmitType, useFormInput } from '@/shared/hooks';
import { convertDate } from '@/shared/utils/convertDate';
import { checkListTypes } from '@/types/checklist';
import dynamic from 'next/dynamic';
import React from 'react';
import { CheckboxInput } from '../checkboxInput';
import { InfoContainer } from '../InfoContainer';
import { InputText } from '../InputText';
import { optionsProps, SelectInput } from '../SelectInput';
import { checklistYupSchema } from './checkListSchema';
import { farmTypeOptions } from './farmTypeOptions';
import * as SC from './style';

const Map = dynamic(
  () => import('@/shared/components/Map/Map').then((object) => object.Map),
  {
    ssr: false,
  },
);

interface Props {
  checklist?: checkListTypes;
  handleOnSubmit: onSubmitType;
  submitText: string;
}

export const ChecklistForm = ({
  checklist,
  handleOnSubmit,
  submitText,
}: Props) => {
  const { errors, onSubmit, register, setValue, getValues } = useFormInput({
    yupSchema: checklistYupSchema,
    onSubmit: handleOnSubmit,
    initialValues: {
      farmerName: checklist?.from?.name ?? '',
      farmerCity: checklist?.farmer?.city ?? '',
      farmType: checklist?.type ?? 'BPA',
      farmName: checklist?.farmer?.name ?? '',
      farmCity: checklist?.farmer?.city ?? '',
      numberOfCows: checklist?.number_of_cows_head ?? 0,
      milkProduced: checklist?.amount_of_milk_produced ?? 0,
      supervised: checklist?.had_supervision ?? false,
      latitude: checklist?.location.latitude ?? undefined,
      longitude: checklist?.location.longitude ?? undefined,
    },
  });

  return (
    <SC.Wrapper onSubmit={onSubmit}>
      <SC.Header>
        <SC.SubmitButton>{submitText}</SC.SubmitButton>
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
        <SC.MapContainer>
          <Map
            latitude={checklist?.location?.latitude || 0}
            longitude={checklist?.location?.longitude || 0}
            zoomable={true}
            draggable={true}
            edit={true}
            setValue={setValue}
            error={!!(errors['latitude'] || errors['latitude'])}
          />
        </SC.MapContainer>
      </SC.Main>
    </SC.Wrapper>
  );
};
