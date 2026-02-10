import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchBoldDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-bold-duotone" {...props}>
      <path d="M17 19.5a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.6a7 7 0 0 0 2 1.43v1.17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.17a7 7 0 0 0 2-1.43zM14 1.5a3 3 0 0 1 3 3v2.6a7 7 0 0 0-2-1.43V4.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.17q-1.13.55-2 1.43V4.5a3 3 0 0 1 3-3z" opacity={0.4} />
        <path fill="currentColor" d="M12 8.5a1 1 0 0 1 1 1v2.09l1.2 1.2a1 1 0 1 1-1.4 1.42l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 5a7 7 0 1 1 0 14 7 7 0 0 1 0-14m0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchBoldDuotone.displayName = 'WristWatchBoldDuotone';

// Triple export pattern (lucide-react style)
export { WristWatchBoldDuotone, WristWatchBoldDuotone as WristWatchBoldDuotoneIcon, WristWatchBoldDuotone as SiWristWatchBoldDuotone };
export default WristWatchBoldDuotone;
export type { WristWatchBoldDuotoneProps };
