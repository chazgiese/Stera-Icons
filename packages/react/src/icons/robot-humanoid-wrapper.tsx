import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RobotHumanoidIcon as RegularRobotHumanoidIcon } from './robot-humanoid';
import { RobotHumanoidIconDuotone as RobotHumanoidIconDuotone } from './robot-humanoid-duotone';
import { RobotHumanoidIconBold as RobotHumanoidIconBold } from './robot-humanoid-bold';
import { RobotHumanoidIconBoldDuotone as RobotHumanoidIconBoldDuotone } from './robot-humanoid-bold-duotone';
import { RobotHumanoidIconFill as RobotHumanoidIconFill } from './robot-humanoid-fill';
import { RobotHumanoidIconFillDuotone as RobotHumanoidIconFillDuotone } from './robot-humanoid-fill-duotone';

export interface RobotHumanoidIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RobotHumanoidIcon = memo(forwardRef<SVGSVGElement, RobotHumanoidIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RobotHumanoidIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RobotHumanoidIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RobotHumanoidIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RobotHumanoidIconFill ref={ref} {...props} />;
  if (duotone) return <RobotHumanoidIconDuotone ref={ref} {...props} />;
  return <RegularRobotHumanoidIcon ref={ref} {...props} />;
}));

RobotHumanoidIcon.displayName = 'RobotHumanoidIcon';

export { RobotHumanoidIcon };
