import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchRegularProps = Omit<IconBaseProps, 'children'>;

const StopwatchRegular = memo(
  forwardRef<SVGSVGElement, StopwatchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="stopwatch" {...props}>
      <path d="M14.65 9.29a.75.75 0 0 1 1.06 1.06l-2.26 2.26a1.5 1.5 0 1 1-2.95.39 1.5 1.5 0 0 1 1.89-1.45z" />
        <path fillRule="evenodd" d="M12 4.75a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5m0 1.5a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clipRule="evenodd" />
        <path d="M14 1.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

StopwatchRegular.displayName = 'StopwatchRegular';

// Triple export pattern (lucide-react style)
export { StopwatchRegular, StopwatchRegular as StopwatchRegularIcon, StopwatchRegular as SiStopwatchRegular };
export default StopwatchRegular;
export type { StopwatchRegularProps };
