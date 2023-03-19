import { TOOGLE_BRAND, TOOGLE_STOCK } from "../actionTypes/actionTypes"

export const toogleBrand = (brandNamae) => {
  return {
    type: TOOGLE_BRAND,
    payload: brandNamae,
  };
};

export const toogleStock = () => {
  return {
    type: TOOGLE_STOCK,
  };
};