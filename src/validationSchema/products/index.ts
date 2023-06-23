import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  inventory: yup.number().integer().required(),
  category_id: yup.string().nullable(),
  vendor_id: yup.string().nullable(),
});
