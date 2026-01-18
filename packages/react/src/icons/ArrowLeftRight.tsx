import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowLeftRightRegular } from './ArrowLeftRightRegular';
import { ArrowLeftRightRegularDuotone } from './ArrowLeftRightRegularDuotone';
import { ArrowLeftRightBold } from './ArrowLeftRightBold';
import { ArrowLeftRightBoldDuotone } from './ArrowLeftRightBoldDuotone';
import { ArrowLeftRightFill } from './ArrowLeftRightFill';
import { ArrowLeftRightFillDuotone } from './ArrowLeftRightFillDuotone';

export interface ArrowLeftRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowLeftRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowLeftRightRegular } from 'stera-icons/ArrowLeftRightRegular';
 */
const ArrowLeftRight = memo(forwardRef<SVGSVGElement, ArrowLeftRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowLeftRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowLeftRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowLeftRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowLeftRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowLeftRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowLeftRightRegular ref={ref} {...rest} />;
}));

ArrowLeftRight.displayName = 'ArrowLeftRight';

export { ArrowLeftRight };
