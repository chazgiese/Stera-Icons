import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RobotHumanoidFillProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidFill = memo(
  forwardRef<SVGSVGElement, RobotHumanoidFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v1.32a6.8 6.8 0 0 1 5.47 4.75 2 2 0 1 1 .28 3.91V13a6.8 6.8 0 0 1-3.71 6.03l.43 1.73A1 1 0 0 1 14.5 22h-5a1 1 0 0 1-.97-1.24l.43-1.73A6.8 6.8 0 0 1 5.25 13v-.02L5 13a2 2 0 1 1 .53-3.93A6.8 6.8 0 0 1 11 4.32V3a1 1 0 0 1 1-1m-2 7a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v1.5a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidFill.displayName = 'RobotHumanoidFill';

export { RobotHumanoidFill };
export type { RobotHumanoidFillProps };
