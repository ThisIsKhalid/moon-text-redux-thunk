import { TOOGLE_BRAND } from "../actionTypes/actionTypes"

export const toogleBrand = (brandNamae) => {
  return {
    type: TOOGLE_BRAND,
    payload: brandNamae,
  };
};