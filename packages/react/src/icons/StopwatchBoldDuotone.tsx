import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StopwatchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StopwatchBoldDuotone = memo(
  forwardRef<SVGSVGElement, StopwatchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19m0 2a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.04 9.04a1 1 0 1 1 1.42 1.42l-2.74 2.73q.03.15.03.31a1.75 1.75 0 1 1-1.44-1.72zM14 1a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

StopwatchBoldDuotone.displayName = 'StopwatchBoldDuotone';

// Triple export pattern (lucide-react style)
export { StopwatchBoldDuotone, StopwatchBoldDuotone as StopwatchBoldDuotoneIcon, StopwatchBoldDuotone as SiStopwatchBoldDuotone };
export type { StopwatchBoldDuotoneProps };
