import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidFillDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="robot-humanoid-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25A6.75 6.75 0 0 1 18.75 11v2a6.75 6.75 0 0 1-13.5 0v-2A6.75 6.75 0 0 1 12 4.25M10 9a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.47 20.76A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.24l.43-1.73a6.7 6.7 0 0 0 6.08 0zM5 9a2 2 0 0 1 .53.07A7 7 0 0 0 5.25 11v1.98L5 13a2 2 0 1 1 0-4M19 9a2 2 0 1 1-.25 3.98V11q0-1.01-.28-1.93A2 2 0 0 1 19 9M10 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v1.32a7 7 0 0 0-2 0V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

RobotHumanoidFillDuotone.displayName = 'RobotHumanoidFillDuotone';

// Triple export pattern (lucide-react style)
export { RobotHumanoidFillDuotone, RobotHumanoidFillDuotone as RobotHumanoidFillDuotoneIcon, RobotHumanoidFillDuotone as SiRobotHumanoidFillDuotone };
export default RobotHumanoidFillDuotone;
export type { RobotHumanoidFillDuotoneProps };
