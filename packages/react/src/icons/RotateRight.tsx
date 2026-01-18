import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateRightRegular } from './RotateRightRegular';
import { RotateRightRegularDuotone } from './RotateRightRegularDuotone';
import { RotateRightBold } from './RotateRightBold';
import { RotateRightBoldDuotone } from './RotateRightBoldDuotone';
import { RotateRightFill } from './RotateRightFill';
import { RotateRightFillDuotone } from './RotateRightFillDuotone';

export interface RotateRightProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotateRight with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RotateRightRegular } from 'stera-icons/RotateRightRegular';
 */
const RotateRight = memo(forwardRef<SVGSVGElement, RotateRightProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateRightBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotateRightBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotateRightFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotateRightFill ref={ref} {...rest} />;
  if (duotone) return <RotateRightRegularDuotone ref={ref} {...rest} />;
  return <RotateRightRegular ref={ref} {...rest} />;
}));

RotateRight.displayName = 'RotateRight';

export { RotateRight };
