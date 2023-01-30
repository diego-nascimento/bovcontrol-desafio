
export type farmertypes = {
  name: string
  city: string
}

export type fromToTypes = {
  name: string
}

export type locationTypes = {
  latitude: number
  longitude: number
}


export interface checkListTypes {
  id?: string | number
  _id?: number
  type: 'BPA' | 'Antibiótico' |'BPF'
  amount_of_milk_produced: string,
  farmer: farmertypes
  from: fromToTypes
  to: fromToTypes
  number_of_cows_head: string
  had_supervision: false
  location: locationTypes
  created_at: string
  updated_at: string
}

