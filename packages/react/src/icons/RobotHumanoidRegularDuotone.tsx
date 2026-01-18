import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RobotHumanoidRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidRegularDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25A6.75 6.75 0 0 1 18.75 11v2a6.75 6.75 0 0 1-13.5 0v-2A6.75 6.75 0 0 1 12 4.25m0 1.5A5.25 5.25 0 0 0 6.75 11v2a5.25 5.25 0 1 0 10.5 0v-2c0-2.9-2.35-5.25-5.25-5.25" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.23 20.82a.75.75 0 0 1-.73.93h-5a.75.75 0 0 1-.73-.93l.42-1.68a6.7 6.7 0 0 0 5.62 0zM5 9.25q.24 0 .46.06-.21.8-.21 1.69v1.73l-.25.02a1.75 1.75 0 1 1 0-3.5M19 9.25a1.75 1.75 0 1 1-.25 3.48V11q0-.88-.21-1.69.22-.06.46-.06M10 9.25c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V10c0-.41.34-.75.75-.75M14 9.25c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0V10c0-.41.34-.75.75-.75M12 2.25c.41 0 .75.34.75.75v1.3a7 7 0 0 0-1.5 0V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

RobotHumanoidRegularDuotone.displayName = 'RobotHumanoidRegularDuotone';

export { RobotHumanoidRegularDuotone };
export type { RobotHumanoidRegularDuotoneProps };
