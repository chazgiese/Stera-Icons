import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotFillProps = Omit<IconBaseProps, 'children'>;

const RobotFill = memo(
  forwardRef<SVGSVGElement, RobotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c.69 0 1.25.56 1.25 1.25 0 .4-.2.77-.5 1v1.75h2.45q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v.45h.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-.75v.45q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.61.04-1.48.04V21c0 .41-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75v-1.25q-.87.01-1.48-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-.45H2.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h.75v-.45q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04h2.45V3.5c-.3-.23-.5-.6-.5-1 0-.69.56-1.25 1.25-1.25m-2.75 8.88c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87m5.5 0c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotFill.displayName = 'RobotFill';

// Triple export pattern
export { RobotFill, RobotFill as RobotFillIcon, RobotFill as SiRobotFill };
export default RobotFill;
export type { RobotFillProps };
