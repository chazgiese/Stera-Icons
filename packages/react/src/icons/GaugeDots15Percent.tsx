import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots15PercentRegular } from './GaugeDots15PercentRegular';
import { GaugeDots15PercentRegularDuotone } from './GaugeDots15PercentRegularDuotone';
import { GaugeDots15PercentBold } from './GaugeDots15PercentBold';
import { GaugeDots15PercentBoldDuotone } from './GaugeDots15PercentBoldDuotone';
import { GaugeDots15PercentFill } from './GaugeDots15PercentFill';
import { GaugeDots15PercentFillDuotone } from './GaugeDots15PercentFillDuotone';

export interface GaugeDots15PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots15Percent with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots15PercentRegular } from 'stera-icons/GaugeDots15PercentRegular';
 */
const GaugeDots15Percent = memo(forwardRef<SVGSVGElement, GaugeDots15PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots15PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots15PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots15PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots15PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots15PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeDots15PercentRegular ref={ref} {...rest} />;
}));

GaugeDots15Percent.displayName = 'GaugeDots15Percent';

export { GaugeDots15Percent };
