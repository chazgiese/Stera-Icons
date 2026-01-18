import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { LotusRegular } from './LotusRegular';
import { LotusRegularDuotone } from './LotusRegularDuotone';
import { LotusBold } from './LotusBold';
import { LotusBoldDuotone } from './LotusBoldDuotone';
import { LotusFill } from './LotusFill';
import { LotusFillDuotone } from './LotusFillDuotone';

export interface LotusProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Lotus with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { LotusRegular } from 'stera-icons/LotusRegular';
 */
const Lotus = memo(forwardRef<SVGSVGElement, LotusProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <LotusBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <LotusBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <LotusFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <LotusFill ref={ref} {...rest} />;
  if (duotone) return <LotusRegularDuotone ref={ref} {...rest} />;
  return <LotusRegular ref={ref} {...rest} />;
}));

Lotus.displayName = 'Lotus';

export { Lotus };
