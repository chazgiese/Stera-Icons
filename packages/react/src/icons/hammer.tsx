import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { HammerRegular } from './HammerRegular';
import { HammerRegularDuotone } from './HammerRegularDuotone';
import { HammerBold } from './HammerBold';
import { HammerBoldDuotone } from './HammerBoldDuotone';
import { HammerFill } from './HammerFill';
import { HammerFillDuotone } from './HammerFillDuotone';

export interface HammerProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Hammer with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { HammerRegular } from 'stera-icons/HammerRegular';
 */
const Hammer = memo(forwardRef<SVGSVGElement, HammerProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HammerBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HammerBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HammerFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HammerFill ref={ref} {...rest} />;
  if (duotone) return <HammerRegularDuotone ref={ref} {...rest} />;
  return <HammerRegular ref={ref} {...rest} />;
}));

Hammer.displayName = 'Hammer';

export { Hammer };
