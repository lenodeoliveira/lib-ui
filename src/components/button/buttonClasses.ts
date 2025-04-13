import { generateUtilityClass } from '../../utils/generateUtilityClass';
import { generateUtilityClasses } from '../../utils/generateUtilityClasses';

const COMPONENT_NAME = 'Button';

export interface ButtonClasses {
  root: string;
  disabled: string;
  outlined: string;
  contained: string;
}

export type ButtonClassKey = keyof ButtonClasses;

export function getButtonUtilityClass(slot: string) {
  return generateUtilityClass(COMPONENT_NAME, slot);
}

export const buttonClasses: ButtonClasses = generateUtilityClasses(COMPONENT_NAME, [
  'root',
  'disabled',
  'outlined',
  'contained',
]);