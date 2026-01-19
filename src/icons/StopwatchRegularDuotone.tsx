import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StopwatchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopwatchRegularDuotone = memo(
  forwardRef<SVGSVGElement, StopwatchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5m0 1.5a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.22 9.22a.75.75 0 1 1 1.06 1.06l-2.83 2.83a1.5 1.5 0 1 1-2.95.39 1.5 1.5 0 0 1 1.89-1.45zM14 1.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

StopwatchRegularDuotone.displayName = 'StopwatchRegularDuotone';

// Triple export pattern (lucide-react style)
export { StopwatchRegularDuotone, StopwatchRegularDuotone as StopwatchRegularDuotoneIcon, StopwatchRegularDuotone as SiStopwatchRegularDuotone };
export default StopwatchRegularDuotone;
export type { StopwatchRegularDuotoneProps };
