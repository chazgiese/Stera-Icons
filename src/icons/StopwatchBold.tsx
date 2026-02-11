import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchBoldProps = Omit<IconBaseProps, 'children'>;

const StopwatchBold = memo(
  forwardRef<SVGSVGElement, StopwatchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-bold" {...props}>
      <path d="M14.47 9.11a1 1 0 0 1 1.42 1.42l-2.17 2.16q.03.15.03.31a1.75 1.75 0 1 1-1.44-1.72z" />
        <path fillRule="evenodd" d="M12 4.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" clipRule="evenodd" />
        <path d="M14 1.5a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

StopwatchBold.displayName = 'StopwatchBold';

// Triple export pattern (lucide-react style)
export { StopwatchBold, StopwatchBold as StopwatchBoldIcon, StopwatchBold as SiStopwatchBold };
export default StopwatchBold;
export type { StopwatchBoldProps };
