import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RobotFillProps = Omit<IconBaseProps, 'children'>;

const RobotFill = memo(
  forwardRef<SVGSVGElement, RobotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a1.5 1.5 0 0 1 1 2.62v1.63h2q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7h.85c.5.06.9.48.9 1v1.1a1 1 0 0 1-1 .9h-.75v1q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.3.03-.7.03v1.36a1 1 0 0 1-1 .9H9a1 1 0 0 1-1-1v-1.26q-.4 0-.7-.03a3 3 0 0 1-1.28-.31q-.92-.5-1.42-1.42-.28-.59-.31-1.28-.05-.67-.04-1.7v-1H3.5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h.75q-.01-1.03.04-1.7.04-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04h2V4.62A1.5 1.5 0 0 1 12 2m-2.5 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m5 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotFill.displayName = 'RobotFill';

// Triple export pattern (lucide-react style)
export { RobotFill, RobotFill as RobotFillIcon, RobotFill as SiRobotFill };
export type { RobotFillProps };
