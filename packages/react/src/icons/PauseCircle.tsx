import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { PauseCircleRegular } from './PauseCircleRegular';
import { PauseCircleRegularDuotone } from './PauseCircleRegularDuotone';
import { PauseCircleBold } from './PauseCircleBold';
import { PauseCircleBoldDuotone } from './PauseCircleBoldDuotone';
import { PauseCircleFill } from './PauseCircleFill';
import { PauseCircleFillDuotone } from './PauseCircleFillDuotone';

export interface PauseCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * PauseCircle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { PauseCircleRegular } from 'stera-icons/PauseCircleRegular';
 */
const PauseCircle = memo(forwardRef<SVGSVGElement, PauseCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <PauseCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <PauseCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <PauseCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <PauseCircleFill ref={ref} {...rest} />;
  if (duotone) return <PauseCircleRegularDuotone ref={ref} {...rest} />;
  return <PauseCircleRegular ref={ref} {...rest} />;
}));

PauseCircle.displayName = 'PauseCircle';

export { PauseCircle };
