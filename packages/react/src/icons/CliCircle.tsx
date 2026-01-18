import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { CliCircleRegular } from './CliCircleRegular';
import { CliCircleRegularDuotone } from './CliCircleRegularDuotone';
import { CliCircleBold } from './CliCircleBold';
import { CliCircleBoldDuotone } from './CliCircleBoldDuotone';
import { CliCircleFill } from './CliCircleFill';
import { CliCircleFillDuotone } from './CliCircleFillDuotone';

export interface CliCircleProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * CliCircle with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { CliCircleRegular } from 'stera-icons/CliCircleRegular';
 */
const CliCircle = memo(forwardRef<SVGSVGElement, CliCircleProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <CliCircleBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <CliCircleBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <CliCircleFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <CliCircleFill ref={ref} {...rest} />;
  if (duotone) return <CliCircleRegularDuotone ref={ref} {...rest} />;
  return <CliCircleRegular ref={ref} {...rest} />;
}));

CliCircle.displayName = 'CliCircle';

export { CliCircle };
