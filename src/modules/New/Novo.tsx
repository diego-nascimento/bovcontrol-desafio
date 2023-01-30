import { Layout, ChecklistForm } from '@/shared/components';
import { useChecklist } from '@/shared/context/ChecklistContext';
import { onSubmitType } from '@/shared/hooks';

import React from 'react';

export const Novo = () => {
  const { createChecklistService } = useChecklist();

  const handleSubmit: onSubmitType = async (data) => {
    createChecklistService({
      id: '123',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      farmer: {
        name: data.farmerName,
        city: data.farmCity,
      },
      number_of_cows_head: data.numberOfCows,
      amount_of_milk_produced: data.milkProduced,
      had_supervision: data.supervised,
      location: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
      type: data.farmType,
      from: {
        name: data.farmerName,
      },
      to: {
        name: data.farmCity,
      },
    });
    return null;
  };
  return (
    <Layout>
      <ChecklistForm submitText="Salvar" handleOnSubmit={handleSubmit} />
    </Layout>
  );
};
