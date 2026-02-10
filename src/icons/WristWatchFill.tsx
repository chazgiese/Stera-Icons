import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchFillProps = Omit<IconBaseProps, 'children'>;

const WristWatchFill = memo(
  forwardRef<SVGSVGElement, WristWatchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 1.5a3 3 0 0 1 3 3v2.6a7 7 0 0 1 0 9.8v2.6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.6a7 7 0 0 1 0-9.8V4.5a3 3 0 0 1 3-3zm1 16.83a7 7 0 0 1-6 0v1.17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM12 8.5a1 1 0 0 0-1 1V12q0 .42.3.7l1.5 1.5a1 1 0 1 0 1.4-1.4L13 11.58V9.5a1 1 0 0 0-1-1m-2-5a1 1 0 0 0-1 1v1.17a7 7 0 0 1 6 0V4.5a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchFill.displayName = 'WristWatchFill';

// Triple export pattern (lucide-react style)
export { WristWatchFill, WristWatchFill as WristWatchFillIcon, WristWatchFill as SiWristWatchFill };
export default WristWatchFill;
export type { WristWatchFillProps };
