const GLOBAL_CLASS_PREFIX = 'base';

/**
 * 
 * @param componentName 
 * @param slot 
 * @returns 
 */
export function generateUtilityClass(
  componentName: string,
  slot: string,
): string {
  return `${GLOBAL_CLASS_PREFIX}-${componentName}-${slot}`;
}
