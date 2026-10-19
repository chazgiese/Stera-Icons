import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidBoldDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.9 21.55c.15.31.13.68-.05.98s-.5.47-.85.47H9c-.35 0-.67-.18-.85-.47-.18-.3-.2-.67-.04-.98l.62-1.25q1.5.69 3.27.7 1.76-.01 3.27-.7z" opacity={.4} />
        <path fillRule="evenodd" d="M12 3c4.42 0 8 3.58 8 8v2c0 4.42-3.58 8-8 8s-8-3.58-8-8v-2c0-4.42 3.58-8 8-8m0 2c-3.31 0-6 2.69-6 6v2c0 3.31 2.69 6 6 6s6-2.69 6-6v-2c0-3.31-2.69-6-6-6" clipRule="evenodd" />
        <path d="M4 9q.13 0 .25.02Q4 9.97 4 11v2c-1.1 0-2-.9-2-2s.9-2 2-2M20 9c1.1 0 2 .9 2 2s-.9 2-2 2v-2q0-1.03-.25-1.98zM12 1c.55 0 1 .45 1 1v1.06Q12.5 3 12 3t-1 .06V2c0-.55.45-1 1-1M9.75 8.75c.55 0 1 .45 1 1v1.69c0 .55-.45 1-1 1s-1-.45-1-1V9.75c0-.55.45-1 1-1M14.25 8.75c.55 0 1 .45 1 1v1.69c0 .55-.45 1-1 1s-1-.45-1-1V9.75c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

RobotHumanoidBoldDuotone.displayName = 'RobotHumanoidBoldDuotone';

// Triple export pattern
export { RobotHumanoidBoldDuotone, RobotHumanoidBoldDuotone as RobotHumanoidBoldDuotoneIcon, RobotHumanoidBoldDuotone as SiRobotHumanoidBoldDuotone };
export default RobotHumanoidBoldDuotone;
export type { RobotHumanoidBoldDuotoneProps };
