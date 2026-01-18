import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots66PercentRegular } from './GaugeDots66PercentRegular';
import { GaugeDots66PercentRegularDuotone } from './GaugeDots66PercentRegularDuotone';
import { GaugeDots66PercentBold } from './GaugeDots66PercentBold';
import { GaugeDots66PercentBoldDuotone } from './GaugeDots66PercentBoldDuotone';
import { GaugeDots66PercentFill } from './GaugeDots66PercentFill';
import { GaugeDots66PercentFillDuotone } from './GaugeDots66PercentFillDuotone';

export interface GaugeDots66PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots66Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots66PercentRegular } from 'stera-icons/GaugeDots66PercentRegular';
 */
const GaugeDots66Percent = memo(forwardRef<SVGSVGElement, GaugeDots66PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots66PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots66PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots66PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots66PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots66PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeDots66PercentRegular ref={ref} {...rest} />;
}));

GaugeDots66Percent.displayName = 'GaugeDots66Percent';

// Triple export pattern (lucide-react style)
export { GaugeDots66Percent, GaugeDots66Percent as GaugeDots66PercentIcon, GaugeDots66Percent as SiGaugeDots66Percent };
