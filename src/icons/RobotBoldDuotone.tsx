import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotBoldDuotone = memo(
  forwardRef<SVGSVGElement, RobotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="robot-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M14.2 5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 14.43 4 13.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 5 9.8 5zM9.8 7c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 6 10.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 7 15.06 7 14.2 7z" clipRule="evenodd" opacity={.4} />
        <path d="M16 20v.1a1 1 0 0 1-1 .9H9a1 1 0 0 1-1-1v-1.03q.75.04 1.8.03h4.4q1.05 0 1.8-.03zM4 10.8V13h-.5a1.5 1.5 0 0 1 0-3H4zM9.5 9a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M14.5 9a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M20.5 10a1.5 1.5 0 0 1 0 3H20v-3zM12 1a1.5 1.5 0 0 1 1 2.62V5h-2V3.62A1.5 1.5 0 0 1 12 1" />
    </IconBase>
  ))
);

RobotBoldDuotone.displayName = 'RobotBoldDuotone';

// Triple export pattern (lucide-react style)
export { RobotBoldDuotone, RobotBoldDuotone as RobotBoldDuotoneIcon, RobotBoldDuotone as SiRobotBoldDuotone };
export default RobotBoldDuotone;
export type { RobotBoldDuotoneProps };
