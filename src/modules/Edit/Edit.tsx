import { Layout, ChecklistForm } from '@/shared/components';
import { useChecklist } from '@/shared/context/ChecklistContext';
import { onSubmitType } from '@/shared/hooks';
import { checkListTypes } from '@/types/checklist';
import React from 'react';

interface Props {
  checklist: checkListTypes;
}

export const Edit = ({ checklist }: Props) => {
  const { updateChecklistService } = useChecklist();

  const handleSubmit: onSubmitType = async (data) => {
    updateChecklistService(
      {
        created_at: checklist.created_at,
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
      },
      checklist.id || 123,
    );
    return null;
  };
  return (
    <Layout>
      <ChecklistForm
        submitText="Editar"
        checklist={checklist}
        handleOnSubmit={handleSubmit}
      />
    </Layout>
  );
};
