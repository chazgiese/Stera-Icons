import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchBoldProps = Omit<IconBaseProps, 'children'>;

const WristWatchBold = memo(
  forwardRef<SVGSVGElement, WristWatchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-bold" {...props}>
      <path fill="currentColor" d="M12 8.5a1 1 0 0 1 1 1v2.09l1.2 1.2a1 1 0 1 1-1.4 1.42l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M14 1.5a3 3 0 0 1 3 3v2.6a7 7 0 0 1 0 9.8v2.6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.6a7 7 0 0 1 0-9.8V4.5a3 3 0 0 1 3-3zm1 16.83a7 7 0 0 1-6 0v1.17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-2-3.5a1 1 0 0 0-1 1v1.17a7 7 0 0 1 6 0V4.5a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchBold.displayName = 'WristWatchBold';

// Triple export pattern (lucide-react style)
export { WristWatchBold, WristWatchBold as WristWatchBoldIcon, WristWatchBold as SiWristWatchBold };
export default WristWatchBold;
export type { WristWatchBoldProps };
