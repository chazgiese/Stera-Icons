import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RobotHumanoidRegular } from './RobotHumanoidRegular';
import { RobotHumanoidRegularDuotone } from './RobotHumanoidRegularDuotone';
import { RobotHumanoidBold } from './RobotHumanoidBold';
import { RobotHumanoidBoldDuotone } from './RobotHumanoidBoldDuotone';
import { RobotHumanoidFill } from './RobotHumanoidFill';
import { RobotHumanoidFillDuotone } from './RobotHumanoidFillDuotone';

export interface RobotHumanoidProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * RobotHumanoid with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { RobotHumanoidRegular } from 'stera-icons/RobotHumanoidRegular';
 */
const RobotHumanoid = memo(forwardRef<SVGSVGElement, RobotHumanoidProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <RobotHumanoidBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <RobotHumanoidBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <RobotHumanoidFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <RobotHumanoidFill ref={ref} {...rest} />;
  if (duotone) return <RobotHumanoidRegularDuotone ref={ref} {...rest} />;
  return <RobotHumanoidRegular ref={ref} {...rest} />;
}));

RobotHumanoid.displayName = 'RobotHumanoid';

export { RobotHumanoid };
