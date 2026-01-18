import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StopwatchFillProps = Omit<IconBaseProps, 'children'>;

const StopwatchFill = memo(
  forwardRef<SVGSVGElement, StopwatchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4.25a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5m4.46 4.8a1 1 0 0 0-1.42 0l-2.73 2.73q-.15-.03-.31-.03a1.75 1.75 0 1 0 1.72 1.44l2.74-2.73a1 1 0 0 0 0-1.42" clipRule="evenodd" />
        <path fill="currentColor" d="M14 1a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

StopwatchFill.displayName = 'StopwatchFill';

export { StopwatchFill };
export type { StopwatchFillProps };
