import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RobotHumanoidIcon as RegularRobotHumanoidIcon } from './robot-humanoid';
import { RobotHumanoidIconBold } from './robot-humanoid-bold';
import { RobotHumanoidIconFilled } from './robot-humanoid-filled';
import { RobotHumanoidIconFilltone } from './robot-humanoid-filltone';
import { RobotHumanoidIconLinetone } from './robot-humanoid-linetone';

export interface RobotHumanoidIconProps extends IconProps {
  variant?: IconVariant;
}

const RobotHumanoidIcon = memo(forwardRef<SVGSVGElement, RobotHumanoidIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RobotHumanoidIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RobotHumanoidIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RobotHumanoidIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RobotHumanoidIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularRobotHumanoidIcon ref={ref} {...props} />;
  }
}));

RobotHumanoidIcon.displayName = 'RobotHumanoidIcon';

export { RobotHumanoidIcon };
