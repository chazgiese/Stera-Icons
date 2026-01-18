import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowRightRegular } from './ArrowRightRegular';
import { ArrowRightRegularDuotone } from './ArrowRightRegularDuotone';
import { ArrowRightBold } from './ArrowRightBold';
import { ArrowRightBoldDuotone } from './ArrowRightBoldDuotone';
import { ArrowRightFill } from './ArrowRightFill';
import { ArrowRightFillDuotone } from './ArrowRightFillDuotone';

export interface ArrowRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowRightRegular } from 'stera-icons/ArrowRightRegular';
 */
const ArrowRight = memo(forwardRef<SVGSVGElement, ArrowRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowRightRegular ref={ref} {...rest} />;
}));

ArrowRight.displayName = 'ArrowRight';

export { ArrowRight };
