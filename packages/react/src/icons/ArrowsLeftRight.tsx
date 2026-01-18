import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowsLeftRightRegular } from './ArrowsLeftRightRegular';
import { ArrowsLeftRightRegularDuotone } from './ArrowsLeftRightRegularDuotone';
import { ArrowsLeftRightBold } from './ArrowsLeftRightBold';
import { ArrowsLeftRightBoldDuotone } from './ArrowsLeftRightBoldDuotone';
import { ArrowsLeftRightFill } from './ArrowsLeftRightFill';
import { ArrowsLeftRightFillDuotone } from './ArrowsLeftRightFillDuotone';

export interface ArrowsLeftRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowsLeftRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowsLeftRightRegular } from 'stera-icons/ArrowsLeftRightRegular';
 */
const ArrowsLeftRight = memo(forwardRef<SVGSVGElement, ArrowsLeftRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowsLeftRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowsLeftRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowsLeftRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowsLeftRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowsLeftRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowsLeftRightRegular ref={ref} {...rest} />;
}));

ArrowsLeftRight.displayName = 'ArrowsLeftRight';

export { ArrowsLeftRight };
