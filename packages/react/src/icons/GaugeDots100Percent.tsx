import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots100PercentRegular } from './GaugeDots100PercentRegular';
import { GaugeDots100PercentRegularDuotone } from './GaugeDots100PercentRegularDuotone';
import { GaugeDots100PercentBold } from './GaugeDots100PercentBold';
import { GaugeDots100PercentBoldDuotone } from './GaugeDots100PercentBoldDuotone';
import { GaugeDots100PercentFill } from './GaugeDots100PercentFill';
import { GaugeDots100PercentFillDuotone } from './GaugeDots100PercentFillDuotone';

export interface GaugeDots100PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots100Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots100PercentRegular } from 'stera-icons/GaugeDots100PercentRegular';
 */
const GaugeDots100Percent = memo(forwardRef<SVGSVGElement, GaugeDots100PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots100PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots100PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots100PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots100PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots100PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeDots100PercentRegular ref={ref} {...rest} />;
}));

GaugeDots100Percent.displayName = 'GaugeDots100Percent';

// Triple export pattern (lucide-react style)
export { GaugeDots100Percent, GaugeDots100Percent as GaugeDots100PercentIcon, GaugeDots100Percent as SiGaugeDots100Percent };
