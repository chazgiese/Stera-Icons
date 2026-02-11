import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidBoldDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="robot-humanoid-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 4a7 7 0 0 1 7 7v2a7 7 0 1 1-14 0v-2a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0v-2a5 5 0 0 0-5-5" clipRule="evenodd" opacity={.4} />
        <path d="M15.47 20.76A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.24l.37-1.48a7 7 0 0 0 6.2 0zM5 9q.15 0 .28.02A7 7 0 0 0 5 11v2a2 2 0 1 1 0-4M19 9a2 2 0 1 1 0 4v-2a7 7 0 0 0-.29-1.98zM10 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M12 2a1 1 0 0 1 1 1v1.07a7 7 0 0 0-2 0V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

RobotHumanoidBoldDuotone.displayName = 'RobotHumanoidBoldDuotone';

// Triple export pattern (lucide-react style)
export { RobotHumanoidBoldDuotone, RobotHumanoidBoldDuotone as RobotHumanoidBoldDuotoneIcon, RobotHumanoidBoldDuotone as SiRobotHumanoidBoldDuotone };
export default RobotHumanoidBoldDuotone;
export type { RobotHumanoidBoldDuotoneProps };
