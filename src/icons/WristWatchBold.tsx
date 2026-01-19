import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WristWatchBoldProps = Omit<IconBaseProps, 'children'>;

const WristWatchBold = memo(
  forwardRef<SVGSVGElement, WristWatchBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-bold" {...props}>
      <path fill="currentColor" d="M12 8.5a1 1 0 0 1 1 1v2.09l1.2 1.2a1 1 0 1 1-1.4 1.42l-1.5-1.5A1 1 0 0 1 11 12V9.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M14 0a3 3 0 0 1 3 3v2.76a7.98 7.98 0 0 1 0 12.48V21a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2.76A7.98 7.98 0 0 1 7 5.76V3a3 3 0 0 1 3-3zm1 19.42a8 8 0 0 1-6 0V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-2-4a1 1 0 0 0-1 1v1.58a8 8 0 0 1 6 0V3a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchBold.displayName = 'WristWatchBold';

// Triple export pattern (lucide-react style)
export { WristWatchBold, WristWatchBold as WristWatchBoldIcon, WristWatchBold as SiWristWatchBold };
export default WristWatchBold;
export type { WristWatchBoldProps };
