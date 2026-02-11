import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidBoldProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidBold = memo(
  forwardRef<SVGSVGElement, RobotHumanoidBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="robot-humanoid-bold" {...props}>
      <path d="M10 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M14 9a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v1.07a7 7 0 0 1 5.71 4.95L19 9a2 2 0 1 1 0 4 7 7 0 0 1-3.9 6.28l.37 1.48A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.24l.37-1.48A7 7 0 0 1 5 13a2 2 0 1 1 .28-3.98A7 7 0 0 1 11 4.07V3a1 1 0 0 1 1-1m0 4a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0v-2a5 5 0 0 0-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidBold.displayName = 'RobotHumanoidBold';

// Triple export pattern (lucide-react style)
export { RobotHumanoidBold, RobotHumanoidBold as RobotHumanoidBoldIcon, RobotHumanoidBold as SiRobotHumanoidBold };
export default RobotHumanoidBold;
export type { RobotHumanoidBoldProps };
