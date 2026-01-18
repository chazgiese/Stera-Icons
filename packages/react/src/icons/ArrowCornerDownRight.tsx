import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ArrowCornerDownRightRegular } from './ArrowCornerDownRightRegular';
import { ArrowCornerDownRightRegularDuotone } from './ArrowCornerDownRightRegularDuotone';
import { ArrowCornerDownRightBold } from './ArrowCornerDownRightBold';
import { ArrowCornerDownRightBoldDuotone } from './ArrowCornerDownRightBoldDuotone';
import { ArrowCornerDownRightFill } from './ArrowCornerDownRightFill';
import { ArrowCornerDownRightFillDuotone } from './ArrowCornerDownRightFillDuotone';

export interface ArrowCornerDownRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * ArrowCornerDownRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ArrowCornerDownRightRegular } from 'stera-icons/ArrowCornerDownRightRegular';
 */
const ArrowCornerDownRight = memo(forwardRef<SVGSVGElement, ArrowCornerDownRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ArrowCornerDownRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ArrowCornerDownRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ArrowCornerDownRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ArrowCornerDownRightFill ref={ref} {...rest} />;
  if (duotone) return <ArrowCornerDownRightRegularDuotone ref={ref} {...rest} />;
  return <ArrowCornerDownRightRegular ref={ref} {...rest} />;
}));

ArrowCornerDownRight.displayName = 'ArrowCornerDownRight';

export { ArrowCornerDownRight };
