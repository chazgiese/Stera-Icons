import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotFillDuotone = memo(
  forwardRef<SVGSVGElement, RobotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="robot-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.2 6q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 15.43 4 14.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 6 9.8 6zm-4.7 4a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M16 21v.1a1 1 0 0 1-1 .9H9a1 1 0 0 1-1-1v-1h8zM4 14h-.5a1.5 1.5 0 0 1 0-3H4zM20.5 11a1.5 1.5 0 0 1 0 3H20v-3zM12 2a1.5 1.5 0 0 1 1 2.62V6h-2V4.62A1.5 1.5 0 0 1 12 2M9.5 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M14.5 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

RobotFillDuotone.displayName = 'RobotFillDuotone';

// Triple export pattern (lucide-react style)
export { RobotFillDuotone, RobotFillDuotone as RobotFillDuotoneIcon, RobotFillDuotone as SiRobotFillDuotone };
export default RobotFillDuotone;
export type { RobotFillDuotoneProps };
