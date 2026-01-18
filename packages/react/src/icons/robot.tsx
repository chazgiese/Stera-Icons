import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RobotRegular } from './RobotRegular';
import { RobotRegularDuotone } from './RobotRegularDuotone';
import { RobotBold } from './RobotBold';
import { RobotBoldDuotone } from './RobotBoldDuotone';
import { RobotFill } from './RobotFill';
import { RobotFillDuotone } from './RobotFillDuotone';

export interface RobotProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Robot with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RobotRegular } from 'stera-icons/RobotRegular';
 */
const Robot = memo(forwardRef<SVGSVGElement, RobotProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RobotBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RobotBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RobotFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RobotFill ref={ref} {...rest} />;
  if (duotone) return <RobotRegularDuotone ref={ref} {...rest} />;
  return <RobotRegular ref={ref} {...rest} />;
}));

Robot.displayName = 'Robot';

export { Robot };
