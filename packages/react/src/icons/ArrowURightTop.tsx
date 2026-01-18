import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowURightTopRegular } from './ArrowURightTopRegular';
import { ArrowURightTopRegularDuotone } from './ArrowURightTopRegularDuotone';
import { ArrowURightTopBold } from './ArrowURightTopBold';
import { ArrowURightTopBoldDuotone } from './ArrowURightTopBoldDuotone';
import { ArrowURightTopFill } from './ArrowURightTopFill';
import { ArrowURightTopFillDuotone } from './ArrowURightTopFillDuotone';

export interface ArrowURightTopProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowURightTop with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowURightTopRegular } from 'stera-icons/ArrowURightTopRegular';
 */
const ArrowURightTop = memo(forwardRef<SVGSVGElement, ArrowURightTopProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowURightTopBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowURightTopBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowURightTopFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowURightTopFill ref={ref} {...rest} />;
  if (duotone) return <ArrowURightTopRegularDuotone ref={ref} {...rest} />;
  return <ArrowURightTopRegular ref={ref} {...rest} />;
}));

ArrowURightTop.displayName = 'ArrowURightTop';

export { ArrowURightTop };
