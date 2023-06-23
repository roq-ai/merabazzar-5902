import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  shipping_details: yup.string().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable(),
  vendor_id: yup.string().nullable(),
});
