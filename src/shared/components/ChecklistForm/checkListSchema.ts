import * as yup from 'yup';

export const checklistYupSchema = yup.object({
  farmerName: yup
    .string()
    .required('Campo obrigatorio')
    .min(7, 'Quantidade minima de caracteres atingida')
    .max(50, 'Quantidade maxima de caracteres atingido'),
  farmerCity: yup
    .string()
    .email('Email invalido')
    .required('Campo obrigatorio'),
  farmType: yup.string().required('Este campo é obrigatorio'),
  farmName: yup
    .string()
    .required('Campo obrigatorio')
    .min(7, 'Quantidade minima de caracteres atingida')
    .max(50, 'Quantidade maxima de caracteres atingido'),
  farmCity: yup
    .string()
    .required('Campo obrigatorio')
    .min(7, 'Quantidade minima de caracteres atingida')
    .max(50, 'Quantidade maxima de caracteres atingido'),
  numberOfCows: yup
    .number()
    .required('Campo Obrigatorio')
    .positive('Quantidade deve ser positiva'),
  milkProduced: yup
    .number()
    .required('Campo Obrigatorio')
    .positive('Quantidade deve ser positiva'),
  supervised: yup.boolean()
  
});