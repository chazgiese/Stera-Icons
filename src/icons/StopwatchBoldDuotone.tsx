import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopwatchBoldDuotone = memo(
  forwardRef<SVGSVGElement, StopwatchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 4.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" clipRule="evenodd" opacity={.4} />
        <path d="M14 1.5a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2zM14.47 9.11a1 1 0 0 1 1.42 1.42l-2.17 2.16q.03.15.03.31a1.75 1.75 0 1 1-1.44-1.72z" />
    </IconBase>
  ))
);

StopwatchBoldDuotone.displayName = 'StopwatchBoldDuotone';

// Triple export pattern (lucide-react style)
export { StopwatchBoldDuotone, StopwatchBoldDuotone as StopwatchBoldDuotoneIcon, StopwatchBoldDuotone as SiStopwatchBoldDuotone };
export default StopwatchBoldDuotone;
export type { StopwatchBoldDuotoneProps };
