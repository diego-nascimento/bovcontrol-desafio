import { InfoContainer, Information, Layout } from '@/shared/components';
import { convertDate } from '@/shared/utils/convertDate';
import { checkListTypes } from '@/types/checklist';
import dynamic from 'next/dynamic';
import React from 'react';
import * as SC from './style';
const Map = dynamic(
  () => import('@/shared/components/Map/Map').then((object) => object.Map),
  {
    ssr: false,
  },
);

interface Props {
  checklist: checkListTypes;
}

export const Checklist = ({ checklist }: Props) => {
  return (
    <Layout>
      <SC.Wrapper>
        <SC.Header>
          <SC.CreatedAt>
            <span>Cadastrado em: </span>
            {convertDate({ dateAsString: checklist.created_at })}
          </SC.CreatedAt>
        </SC.Header>
        <SC.Main>
          <InfoContainer label="Fazendeiro">
            <SC.Division>
              <Information label="Nome" info={checklist.from.name} />
              <Information label="Cidade" info={checklist.farmer.city} />
            </SC.Division>
          </InfoContainer>
          <InfoContainer label="Fazenda">
            <SC.Division>
              <Information label="Tipo" info={checklist.type} />
            </SC.Division>
            <SC.Division>
              <Information label="Nome" info={checklist.farmer.name} />
              <Information label="Cidade" info={checklist.farmer.city} />
            </SC.Division>

            <SC.Division>
              <Information
                label="Número de cabeças de gado"
                info={checklist.number_of_cows_head}
              />
              <Information
                label="Quantidade de leite produzido"
                info={checklist.amount_of_milk_produced}
              />
            </SC.Division>
            <SC.Division>
              <Information
                label="Supervisionado"
                info={checklist.had_supervision ? 'Sim' : 'Não'}
              />
            </SC.Division>
          </InfoContainer>
          <SC.MapContainer>
            {checklist.location.latitude && checklist.location.longitude && (
              <Map
                latitude={checklist.location.latitude}
                longitude={checklist.location.longitude}
                farmName={checklist.farmer.name}
              />
            )}
          </SC.MapContainer>
        </SC.Main>
      </SC.Wrapper>
    </Layout>
  );
};
