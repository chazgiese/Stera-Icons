import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WristWatchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchBoldDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 21a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.76q.9.73 2 1.18V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.58q1.1-.45 2-1.18zM14 0a3 3 0 0 1 3 3v2.76a8 8 0 0 0-2-1.18V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.58q-1.1.46-2 1.18V3a3 3 0 0 1 3-3z" opacity={0.4} />
        <path fill="currentColor" d="M12 8.5a1 1 0 0 1 1 1v2.09l1.2 1.2a1 1 0 1 1-1.4 1.42l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchBoldDuotone.displayName = 'WristWatchBoldDuotone';

// Triple export pattern (lucide-react style)
export { WristWatchBoldDuotone, WristWatchBoldDuotone as WristWatchBoldDuotoneIcon, WristWatchBoldDuotone as SiWristWatchBoldDuotone };
export type { WristWatchBoldDuotoneProps };
