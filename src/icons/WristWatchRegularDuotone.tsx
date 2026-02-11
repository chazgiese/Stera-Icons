import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchRegularDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-duotone" {...props}>
      <path d="M16.75 19.5A2.75 2.75 0 0 1 14 22.25h-4a2.75 2.75 0 0 1-2.75-2.75v-2.7q.67.65 1.5 1.12v1.58c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-1.58q.83-.46 1.5-1.13zM14 1.75a2.75 2.75 0 0 1 2.75 2.75v2.7a7 7 0 0 0-1.5-1.12V4.5c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.58q-.83.46-1.5 1.12V4.5A2.75 2.75 0 0 1 10 1.75z" opacity={0.4} />
        <path d="M12 8.75c.41 0 .75.34.75.75v2.19l1.28 1.28a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.8.8 0 0 1-.22-.53V9.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 5.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5m0 1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchRegularDuotone.displayName = 'WristWatchRegularDuotone';

// Triple export pattern (lucide-react style)
export { WristWatchRegularDuotone, WristWatchRegularDuotone as WristWatchRegularDuotoneIcon, WristWatchRegularDuotone as SiWristWatchRegularDuotone };
export default WristWatchRegularDuotone;
export type { WristWatchRegularDuotoneProps };
