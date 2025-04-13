import { SxProps } from '../../types/SxProps';
import { ThemeDefinition } from '../../theme/type';
import { aliases } from '../sxAliases/sxAliases';

export function applySx(sx: SxProps | undefined, theme: ThemeDefinition): React.CSSProperties {
  if (!sx) return {};

  const result: Record<string, any> = {};

  for (const key in sx) {
    const value = sx[key];

    const resolveValue = (val: any) => {
      if (typeof val === 'number') return theme.spacing(val);
      if (typeof val === 'string' && val in theme.palletete) return theme.palletete[val as keyof typeof theme.palletete];
      if (typeof val === 'string' && val in theme.radius) return theme.radius[val as keyof typeof theme.radius];
      return val;
    };

    const mapped = aliases[key] || key;

    if (Array.isArray(mapped)) {
      mapped.forEach((cssKey) => {
        result[cssKey] = resolveValue(value);
      });
    } else {
      result[mapped] = resolveValue(value);
    }
  }

  return result;
}