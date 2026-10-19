import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotBoldDuotone = memo(
  forwardRef<SVGSVGElement, RobotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 21c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-1h8z" opacity={.4} />
        <path d="M9.25 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1M14.75 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1c.83 0 1.5.67 1.5 1.5 0 .44-.2.84-.5 1.12V5h2.2q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v.2h.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H21v.2q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 15.43 3 14.2V14h-.5c-.83 0-1.5-.67-1.5-1.5S1.67 11 2.5 11H3v-.2q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q7.57 5 8.8 5H11V3.62c-.3-.28-.5-.68-.5-1.12 0-.83.67-1.5 1.5-1.5M8.8 7c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C5 9.36 5 9.94 5 10.8v3.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C16.64 7 16.06 7 15.2 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotBoldDuotone.displayName = 'RobotBoldDuotone';

// Triple export pattern
export { RobotBoldDuotone, RobotBoldDuotone as RobotBoldDuotoneIcon, RobotBoldDuotone as SiRobotBoldDuotone };
export default RobotBoldDuotone;
export type { RobotBoldDuotoneProps };
