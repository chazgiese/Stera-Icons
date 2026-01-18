import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PercentRegular } from './PercentRegular';
import { PercentRegularDuotone } from './PercentRegularDuotone';
import { PercentBold } from './PercentBold';
import { PercentBoldDuotone } from './PercentBoldDuotone';
import { PercentFill } from './PercentFill';
import { PercentFillDuotone } from './PercentFillDuotone';

export interface PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Percent with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PercentRegular } from 'stera-icons/PercentRegular';
 */
const Percent = memo(forwardRef<SVGSVGElement, PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PercentFill ref={ref} {...rest} />;
  if (duotone) return <PercentRegularDuotone ref={ref} {...rest} />;
  return <PercentRegular ref={ref} {...rest} />;
}));

Percent.displayName = 'Percent';

export { Percent };
