import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { XCircleRegular } from './XCircleRegular';
import { XCircleRegularDuotone } from './XCircleRegularDuotone';
import { XCircleBold } from './XCircleBold';
import { XCircleBoldDuotone } from './XCircleBoldDuotone';
import { XCircleFill } from './XCircleFill';
import { XCircleFillDuotone } from './XCircleFillDuotone';

export interface XCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * XCircle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { XCircleRegular } from 'stera-icons/XCircleRegular';
 */
const XCircle = memo(forwardRef<SVGSVGElement, XCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <XCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <XCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <XCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <XCircleFill ref={ref} {...rest} />;
  if (duotone) return <XCircleRegularDuotone ref={ref} {...rest} />;
  return <XCircleRegular ref={ref} {...rest} />;
}));

XCircle.displayName = 'XCircle';

export { XCircle };
