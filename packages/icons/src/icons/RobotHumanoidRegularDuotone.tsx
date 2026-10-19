import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidRegularDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.67 21.67c.12.23.1.5-.03.72q-.23.35-.64.36H9c-.26 0-.5-.13-.64-.36-.13-.22-.15-.5-.03-.73l.74-1.48q1.37.55 2.93.57 1.56 0 2.93-.57z" opacity={.4} />
        <path fillRule="evenodd" d="M12 3.25c4.28 0 7.75 3.47 7.75 7.75v2c0 4.28-3.47 7.75-7.75 7.75S4.25 17.28 4.25 13v-2c0-4.28 3.47-7.75 7.75-7.75m0 1.5c-3.45 0-6.25 2.8-6.25 6.25v2c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25v-2c0-3.45-2.8-6.25-6.25-6.25" clipRule="evenodd" />
        <path d="M4 9.25q.23 0 .44.06-.18.8-.19 1.69v1.73l-.25.02c-.97 0-1.75-.78-1.75-1.75S3.03 9.25 4 9.25M20 9.25c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75q-.13 0-.25-.02V11q0-.87-.19-1.7.21-.05.44-.05M12 1.25c.41 0 .75.34.75.75v1.29q-.37-.04-.75-.04-.37 0-.75.04V2c0-.41.34-.75.75-.75M9.75 9c.41 0 .75.34.75.75v1.69c0 .41-.34.75-.75.75S9 11.85 9 11.44V9.75c0-.41.34-.75.75-.75M14.25 9c.41 0 .75.34.75.75v1.69c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.75c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

RobotHumanoidRegularDuotone.displayName = 'RobotHumanoidRegularDuotone';

// Triple export pattern
export { RobotHumanoidRegularDuotone, RobotHumanoidRegularDuotone as RobotHumanoidRegularDuotoneIcon, RobotHumanoidRegularDuotone as SiRobotHumanoidRegularDuotone };
export default RobotHumanoidRegularDuotone;
export type { RobotHumanoidRegularDuotoneProps };
