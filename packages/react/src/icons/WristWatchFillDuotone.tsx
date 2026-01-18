import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WristWatchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchFillDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 4.5a1 1 0 0 0-1 1V12q0 .42.3.7l1.5 1.5a1 1 0 1 0 1.4-1.4L13 11.58V9.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17 21a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.75a8 8 0 0 0 10 0zM12 8.5a1 1 0 0 1 1 1v2.09l1.2 1.2a1 1 0 1 1-1.4 1.42l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1M14 0a3 3 0 0 1 3 3v2.75a8 8 0 0 0-10 0V3a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

WristWatchFillDuotone.displayName = 'WristWatchFillDuotone';

// Triple export pattern (lucide-react style)
export { WristWatchFillDuotone, WristWatchFillDuotone as WristWatchFillDuotoneIcon, WristWatchFillDuotone as SiWristWatchFillDuotone };
export type { WristWatchFillDuotoneProps };
