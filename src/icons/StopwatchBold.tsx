import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchBoldProps = Omit<IconBaseProps, 'children'>;

const StopwatchBold = memo(
  forwardRef<SVGSVGElement, StopwatchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-bold" {...props}>
      <path fill="currentColor" d="M15.04 9.04a1 1 0 1 1 1.42 1.42l-2.74 2.73q.03.15.03.31a1.75 1.75 0 1 1-1.44-1.72z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 2a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15" clipRule="evenodd" />
        <path fill="currentColor" d="M14 1a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

StopwatchBold.displayName = 'StopwatchBold';

// Triple export pattern (lucide-react style)
export { StopwatchBold, StopwatchBold as StopwatchBoldIcon, StopwatchBold as SiStopwatchBold };
export default StopwatchBold;
export type { StopwatchBoldProps };
