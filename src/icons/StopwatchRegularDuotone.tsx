import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopwatchRegularDuotone = memo(
  forwardRef<SVGSVGElement, StopwatchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.75a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14 1.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM14.65 9.29a.75.75 0 0 1 1.06 1.06l-2.26 2.26q.05.2.05.39a1.5 1.5 0 1 1-1.11-1.45z" />
    </IconBase>
  ))
);

StopwatchRegularDuotone.displayName = 'StopwatchRegularDuotone';

// Triple export pattern (lucide-react style)
export { StopwatchRegularDuotone, StopwatchRegularDuotone as StopwatchRegularDuotoneIcon, StopwatchRegularDuotone as SiStopwatchRegularDuotone };
export default StopwatchRegularDuotone;
export type { StopwatchRegularDuotoneProps };
