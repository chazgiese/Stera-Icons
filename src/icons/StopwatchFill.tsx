import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchFillProps = Omit<IconBaseProps, 'children'>;

const StopwatchFill = memo(
  forwardRef<SVGSVGElement, StopwatchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m3.89 4.61a1 1 0 0 0-1.42 0l-2.16 2.17q-.15-.03-.31-.03a1.75 1.75 0 1 0 1.72 1.44l2.17-2.16a1 1 0 0 0 0-1.42" clipRule="evenodd" />
        <path fill="currentColor" d="M14 1.5a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

StopwatchFill.displayName = 'StopwatchFill';

// Triple export pattern (lucide-react style)
export { StopwatchFill, StopwatchFill as StopwatchFillIcon, StopwatchFill as SiStopwatchFill };
export default StopwatchFill;
export type { StopwatchFillProps };
