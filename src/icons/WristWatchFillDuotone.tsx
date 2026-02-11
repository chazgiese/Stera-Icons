import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchFillDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 5a7 7 0 0 1 3.65 1.02l.11.08A7 7 0 0 1 19 12a7 7 0 0 1-3.3 5.94l-.04.02q-.4.26-.86.45l-.05.03a7 7 0 0 1-4.6.3q-.47-.12-.9-.3l-.06-.03q-.45-.2-.85-.45l-.05-.02A7 7 0 0 1 5 12a7 7 0 0 1 3.24-5.9l.11-.08A7 7 0 0 1 12 5m0 3.5a1 1 0 0 0-1 1V12q0 .42.3.7l1.5 1.5a1 1 0 1 0 1.4-1.4L13 11.58V9.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M17 19.5a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.6a7 7 0 0 0 10 0zM12 8.5a1 1 0 0 1 1 1v2.09l1.2 1.2a1 1 0 1 1-1.4 1.42l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1M14 1.5a3 3 0 0 1 3 3v2.6a7 7 0 0 0-10 0V4.5a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

WristWatchFillDuotone.displayName = 'WristWatchFillDuotone';

// Triple export pattern (lucide-react style)
export { WristWatchFillDuotone, WristWatchFillDuotone as WristWatchFillDuotoneIcon, WristWatchFillDuotone as SiWristWatchFillDuotone };
export default WristWatchFillDuotone;
export type { WristWatchFillDuotoneProps };
