import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StopwatchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopwatchFillDuotone = memo(
  forwardRef<SVGSVGElement, StopwatchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5m4.46 4.8a1 1 0 0 0-1.42 0l-2.73 2.73q-.15-.03-.31-.03a1.75 1.75 0 1 0 1.72 1.44l2.74-2.73a1 1 0 0 0 0-1.42" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.04 9.04a1 1 0 1 1 1.42 1.42l-2.74 2.73q.03.15.03.31a1.75 1.75 0 1 1-1.44-1.72zM14 1a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

StopwatchFillDuotone.displayName = 'StopwatchFillDuotone';

// Triple export pattern (lucide-react style)
export { StopwatchFillDuotone, StopwatchFillDuotone as StopwatchFillDuotoneIcon, StopwatchFillDuotone as SiStopwatchFillDuotone };
export default StopwatchFillDuotone;
export type { StopwatchFillDuotoneProps };
