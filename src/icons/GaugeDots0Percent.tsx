import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots0PercentRegular } from './GaugeDots0PercentRegular';
import { GaugeDots0PercentRegularDuotone } from './GaugeDots0PercentRegularDuotone';
import { GaugeDots0PercentBold } from './GaugeDots0PercentBold';
import { GaugeDots0PercentBoldDuotone } from './GaugeDots0PercentBoldDuotone';
import { GaugeDots0PercentFill } from './GaugeDots0PercentFill';
import { GaugeDots0PercentFillDuotone } from './GaugeDots0PercentFillDuotone';

export interface GaugeDots0PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots0Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots0PercentRegular } from 'stera-icons/icons/GaugeDots0PercentRegular';
 */
const GaugeDots0Percent = memo(forwardRef<SVGSVGElement, GaugeDots0PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots0PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots0PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots0PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots0PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots0PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeDots0PercentRegular ref={ref} {...rest} />;
}));

GaugeDots0Percent.displayName = 'GaugeDots0Percent';

// Triple export pattern (lucide-react style)
export { GaugeDots0Percent, GaugeDots0Percent as GaugeDots0PercentIcon, GaugeDots0Percent as SiGaugeDots0Percent };
