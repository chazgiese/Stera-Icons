import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RotateCircleLeftRegular } from './RotateCircleLeftRegular';
import { RotateCircleLeftRegularDuotone } from './RotateCircleLeftRegularDuotone';
import { RotateCircleLeftBold } from './RotateCircleLeftBold';
import { RotateCircleLeftBoldDuotone } from './RotateCircleLeftBoldDuotone';
import { RotateCircleLeftFill } from './RotateCircleLeftFill';
import { RotateCircleLeftFillDuotone } from './RotateCircleLeftFillDuotone';

export interface RotateCircleLeftProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RotateCircleLeft with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RotateCircleLeftRegular } from 'stera-icons/RotateCircleLeftRegular';
 */
const RotateCircleLeft = memo(forwardRef<SVGSVGElement, RotateCircleLeftProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RotateCircleLeftBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RotateCircleLeftBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RotateCircleLeftFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RotateCircleLeftFill ref={ref} {...rest} />;
  if (duotone) return <RotateCircleLeftRegularDuotone ref={ref} {...rest} />;
  return <RotateCircleLeftRegular ref={ref} {...rest} />;
}));

RotateCircleLeft.displayName = 'RotateCircleLeft';

export { RotateCircleLeft };
