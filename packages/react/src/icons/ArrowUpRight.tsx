import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowUpRightRegular } from './ArrowUpRightRegular';
import { ArrowUpRightRegularDuotone } from './ArrowUpRightRegularDuotone';
import { ArrowUpRightBold } from './ArrowUpRightBold';
import { ArrowUpRightBoldDuotone } from './ArrowUpRightBoldDuotone';
import { ArrowUpRightFill } from './ArrowUpRightFill';
import { ArrowUpRightFillDuotone } from './ArrowUpRightFillDuotone';

export interface ArrowUpRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowUpRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowUpRightRegular } from 'stera-icons/ArrowUpRightRegular';
 */
const ArrowUpRight = memo(forwardRef<SVGSVGElement, ArrowUpRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowUpRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowUpRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowUpRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowUpRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowUpRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowUpRightRegular ref={ref} {...rest} />;
}));

ArrowUpRight.displayName = 'ArrowUpRight';

export { ArrowUpRight };
