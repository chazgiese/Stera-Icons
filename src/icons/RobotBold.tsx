import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RobotBoldProps = Omit<IconBaseProps, 'children'>;

const RobotBold = memo(
  forwardRef<SVGSVGElement, RobotBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="robot-bold" {...props}>
      <path fill="currentColor" d="M9.5 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M14.5 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a1.5 1.5 0 0 1 1 2.62V6h1.2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.04.54.04 1.25h.5a1.5 1.5 0 0 1 0 3H20v.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4l-.25.01v1.13a1 1 0 0 1-1 .9H9a1 1 0 0 1-1-1v-1.03l-.25-.01a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 15.43 4 14.2V14h-.5a1.5 1.5 0 0 1 0-3H4q0-.72.04-1.25a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 6 9.8 6H11V4.62A1.5 1.5 0 0 1 12 2M9.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 6 11.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 8 15.06 8 14.2 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotBold.displayName = 'RobotBold';

// Triple export pattern (lucide-react style)
export { RobotBold, RobotBold as RobotBoldIcon, RobotBold as SiRobotBold };
export type { RobotBoldProps };
