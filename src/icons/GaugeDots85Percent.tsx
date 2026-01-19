import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { GaugeDots85PercentRegular } from './GaugeDots85PercentRegular';
import { GaugeDots85PercentRegularDuotone } from './GaugeDots85PercentRegularDuotone';
import { GaugeDots85PercentBold } from './GaugeDots85PercentBold';
import { GaugeDots85PercentBoldDuotone } from './GaugeDots85PercentBoldDuotone';
import { GaugeDots85PercentFill } from './GaugeDots85PercentFill';
import { GaugeDots85PercentFillDuotone } from './GaugeDots85PercentFillDuotone';

export interface GaugeDots85PercentProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GaugeDots85Percent - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GaugeDots85PercentRegular } from 'stera-icons/icons/GaugeDots85PercentRegular';
 */
const GaugeDots85Percent = memo(forwardRef<SVGSVGElement, GaugeDots85PercentProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GaugeDots85PercentBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GaugeDots85PercentBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GaugeDots85PercentFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GaugeDots85PercentFill ref={ref} {...rest} />;
  if (duotone) return <GaugeDots85PercentRegularDuotone ref={ref} {...rest} />;
  return <GaugeDots85PercentRegular ref={ref} {...rest} />;
}));

GaugeDots85Percent.displayName = 'GaugeDots85Percent';

// Triple export pattern (lucide-react style)
export { GaugeDots85Percent, GaugeDots85Percent as GaugeDots85PercentIcon, GaugeDots85Percent as SiGaugeDots85Percent };
