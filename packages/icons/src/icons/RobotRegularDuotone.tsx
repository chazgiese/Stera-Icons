import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotRegularDuotone = memo(
  forwardRef<SVGSVGElement, RobotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.75 21c0 .41-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75v-1.25h7.5z" opacity={.4} />
        <path d="M9.25 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75M14.75 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75S14 13.41 14 13v-2c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.25c.69 0 1.25.56 1.25 1.25 0 .4-.2.77-.5 1v1.75h2.45q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.45h.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-.75v.45q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H8.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-.45H2.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h.75v-.45q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04h2.45V3.5c-.3-.23-.5-.6-.5-1 0-.69.56-1.25 1.25-1.25m-3.2 5.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v3.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h6.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-3.4c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotRegularDuotone.displayName = 'RobotRegularDuotone';

// Triple export pattern
export { RobotRegularDuotone, RobotRegularDuotone as RobotRegularDuotoneIcon, RobotRegularDuotone as SiRobotRegularDuotone };
export default RobotRegularDuotone;
export type { RobotRegularDuotoneProps };
