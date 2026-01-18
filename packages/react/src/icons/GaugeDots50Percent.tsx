import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots50PercentRegular } from './GaugeDots50PercentRegular';
import { GaugeDots50PercentRegularDuotone } from './GaugeDots50PercentRegularDuotone';
import { GaugeDots50PercentBold } from './GaugeDots50PercentBold';
import { GaugeDots50PercentBoldDuotone } from './GaugeDots50PercentBoldDuotone';
import { GaugeDots50PercentFill } from './GaugeDots50PercentFill';
import { GaugeDots50PercentFillDuotone } from './GaugeDots50PercentFillDuotone';

export interface GaugeDots50PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots50Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots50PercentRegular } from 'stera-icons/GaugeDots50PercentRegular';
 */
const GaugeDots50Percent = memo(forwardRef<SVGSVGElement, GaugeDots50PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots50PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots50PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots50PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots50PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots50PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeDots50PercentRegular ref={ref} {...rest} />;
}));

GaugeDots50Percent.displayName = 'GaugeDots50Percent';

// Triple export pattern (lucide-react style)
export { GaugeDots50Percent, GaugeDots50Percent as GaugeDots50PercentIcon, GaugeDots50Percent as SiGaugeDots50Percent };
