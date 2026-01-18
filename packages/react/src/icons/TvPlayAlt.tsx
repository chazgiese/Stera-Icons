import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TvPlayAltRegular } from './TvPlayAltRegular';
import { TvPlayAltRegularDuotone } from './TvPlayAltRegularDuotone';
import { TvPlayAltBold } from './TvPlayAltBold';
import { TvPlayAltBoldDuotone } from './TvPlayAltBoldDuotone';
import { TvPlayAltFill } from './TvPlayAltFill';
import { TvPlayAltFillDuotone } from './TvPlayAltFillDuotone';

export interface TvPlayAltProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TvPlayAlt with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { TvPlayAltRegular } from 'stera-icons/TvPlayAltRegular';
 */
const TvPlayAlt = memo(forwardRef<SVGSVGElement, TvPlayAltProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TvPlayAltBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TvPlayAltBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TvPlayAltFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TvPlayAltFill ref={ref} {...rest} />;
  if (duotone) return <TvPlayAltRegularDuotone ref={ref} {...rest} />;
  return <TvPlayAltRegular ref={ref} {...rest} />;
}));

TvPlayAlt.displayName = 'TvPlayAlt';

export { TvPlayAlt };
