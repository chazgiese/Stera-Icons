import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TrendUpRegular } from './TrendUpRegular';
import { TrendUpRegularDuotone } from './TrendUpRegularDuotone';
import { TrendUpBold } from './TrendUpBold';
import { TrendUpBoldDuotone } from './TrendUpBoldDuotone';
import { TrendUpFill } from './TrendUpFill';
import { TrendUpFillDuotone } from './TrendUpFillDuotone';

export interface TrendUpProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TrendUp - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TrendUpRegular } from 'stera-icons/TrendUpRegular';
 */
const TrendUp = memo(forwardRef<SVGSVGElement, TrendUpProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TrendUpBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TrendUpBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TrendUpFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TrendUpFill ref={ref} {...rest} />;
  if (duotone) return <TrendUpRegularDuotone ref={ref} {...rest} />;
  return <TrendUpRegular ref={ref} {...rest} />;
}));

TrendUp.displayName = 'TrendUp';

// Triple export pattern (lucide-react style)
export { TrendUp, TrendUp as TrendUpIcon, TrendUp as SiTrendUp };
