import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateCircleRightRegular } from './RotateCircleRightRegular';
import { RotateCircleRightRegularDuotone } from './RotateCircleRightRegularDuotone';
import { RotateCircleRightBold } from './RotateCircleRightBold';
import { RotateCircleRightBoldDuotone } from './RotateCircleRightBoldDuotone';
import { RotateCircleRightFill } from './RotateCircleRightFill';
import { RotateCircleRightFillDuotone } from './RotateCircleRightFillDuotone';

export interface RotateCircleRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotateCircleRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RotateCircleRightRegular } from 'stera-icons/RotateCircleRightRegular';
 */
const RotateCircleRight = memo(forwardRef<SVGSVGElement, RotateCircleRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateCircleRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotateCircleRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotateCircleRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotateCircleRightFill ref={ref} {...rest} />;
  if (duotone) return <RotateCircleRightRegularDuotone ref={ref} {...rest} />;
  return <RotateCircleRightRegular ref={ref} {...rest} />;
}));

RotateCircleRight.displayName = 'RotateCircleRight';

export { RotateCircleRight };
