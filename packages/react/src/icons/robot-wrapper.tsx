import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { RobotIcon as RegularRobotIcon } from './robot';
import { RobotIconDuotone as RobotIconDuotone } from './robot-duotone';
import { RobotIconBold as RobotIconBold } from './robot-bold';
import { RobotIconBoldDuotone as RobotIconBoldDuotone } from './robot-bold-duotone';
import { RobotIconFill as RobotIconFill } from './robot-fill';
import { RobotIconFillDuotone as RobotIconFillDuotone } from './robot-fill-duotone';

export interface RobotIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const RobotIcon = memo(forwardRef<SVGSVGElement, RobotIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <RobotIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <RobotIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <RobotIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <RobotIconFill ref={ref} {...props} />;
  if (duotone) return <RobotIconDuotone ref={ref} {...props} />;
  return <RegularRobotIcon ref={ref} {...props} />;
}));

RobotIcon.displayName = 'RobotIcon';

export { RobotIcon };
