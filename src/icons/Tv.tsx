import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TvRegular } from './TvRegular';
import { TvRegularDuotone } from './TvRegularDuotone';
import { TvBold } from './TvBold';
import { TvBoldDuotone } from './TvBoldDuotone';
import { TvFill } from './TvFill';
import { TvFillDuotone } from './TvFillDuotone';

export interface TvProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Tv - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TvRegular } from 'stera-icons/icons/TvRegular';
 */
const Tv = memo(forwardRef<SVGSVGElement, TvProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TvBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TvBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TvFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TvFill ref={ref} {...rest} />;
  if (duotone) return <TvRegularDuotone ref={ref} {...rest} />;
  return <TvRegular ref={ref} {...rest} />;
}));

Tv.displayName = 'Tv';

// Triple export pattern (lucide-react style)
export { Tv, Tv as TvIcon, Tv as SiTv };
