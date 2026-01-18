import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { BladeKunaiRegular } from './BladeKunaiRegular';
import { BladeKunaiRegularDuotone } from './BladeKunaiRegularDuotone';
import { BladeKunaiBold } from './BladeKunaiBold';
import { BladeKunaiBoldDuotone } from './BladeKunaiBoldDuotone';
import { BladeKunaiFill } from './BladeKunaiFill';
import { BladeKunaiFillDuotone } from './BladeKunaiFillDuotone';

export interface BladeKunaiProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * BladeKunai with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { BladeKunaiRegular } from 'stera-icons/BladeKunaiRegular';
 */
const BladeKunai = memo(forwardRef<SVGSVGElement, BladeKunaiProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <BladeKunaiBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <BladeKunaiBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <BladeKunaiFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <BladeKunaiFill ref={ref} {...rest} />;
  if (duotone) return <BladeKunaiRegularDuotone ref={ref} {...rest} />;
  return <BladeKunaiRegular ref={ref} {...rest} />;
}));

BladeKunai.displayName = 'BladeKunai';

export { BladeKunai };
