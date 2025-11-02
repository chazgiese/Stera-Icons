import { forwardRef, memo } from 'react';
import type { IconProps, IconVariant } from '../types';
import { RobotIcon as RegularRobotIcon } from './robot';
import { RobotIconBold } from './robot-bold';
import { RobotIconFilled } from './robot-filled';
import { RobotIconFilltone } from './robot-filltone';
import { RobotIconLinetone } from './robot-linetone';

export interface RobotIconProps extends IconProps {
  variant?: IconVariant;
}

const RobotIcon = memo(forwardRef<SVGSVGElement, RobotIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <RobotIconFilled ref={ref} {...props} />;
    case 'bold':
      return <RobotIconBold ref={ref} {...props} />;
    case 'filltone':
      return <RobotIconFilltone ref={ref} {...props} />;
    case 'linetone':
      return <RobotIconLinetone ref={ref} {...props} />;
    case 'regular':
    default:
      return <RegularRobotIcon ref={ref} {...props} />;
  }
}));

RobotIcon.displayName = 'RobotIcon';

export { RobotIcon };
