import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WristWatchFillProps = Omit<IconBaseProps, 'children'>;

const WristWatchFill = memo(
  forwardRef<SVGSVGElement, WristWatchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 0a3 3 0 0 1 3 3v2.76a7.98 7.98 0 0 1 0 12.48V21a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.76A7.98 7.98 0 0 1 7 5.76V3a3 3 0 0 1 3-3zm1 19.42a8 8 0 0 1-6 0V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM12 7.5a1 1 0 0 0-1 1V12q0 .42.3.7l2 2a1 1 0 1 0 1.4-1.4L13 11.58V8.5a1 1 0 0 0-1-1M10 2a1 1 0 0 0-1 1v1.58a8 8 0 0 1 6 0V3a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchFill.displayName = 'WristWatchFill';

// Triple export pattern (lucide-react style)
export { WristWatchFill, WristWatchFill as WristWatchFillIcon, WristWatchFill as SiWristWatchFill };
export type { WristWatchFillProps };
