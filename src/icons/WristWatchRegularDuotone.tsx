import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WristWatchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WristWatchRegularDuotone = memo(
  forwardRef<SVGSVGElement, WristWatchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch-duotone" {...props}>
      <path d="M16.75 21A2.75 2.75 0 0 1 14 23.75h-4A2.75 2.75 0 0 1 7.25 21v-2.88q.69.54 1.5.92V21c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-1.96a8 8 0 0 0 1.5-.92zM14 .25A2.75 2.75 0 0 1 16.75 3v2.88a8 8 0 0 0-1.5-.92V3c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.96q-.81.38-1.5.92V3A2.75 2.75 0 0 1 10 .25z" opacity={0.4} />
        <path fill="currentColor" d="M12 8.75c.41 0 .75.34.75.75v2.19l1.28 1.28a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.8.8 0 0 1-.22-.53V9.5c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4.25a7.75 7.75 0 1 1 0 15.5 7.75 7.75 0 0 1 0-15.5m0 1.5a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchRegularDuotone.displayName = 'WristWatchRegularDuotone';

// Triple export pattern (lucide-react style)
export { WristWatchRegularDuotone, WristWatchRegularDuotone as WristWatchRegularDuotoneIcon, WristWatchRegularDuotone as SiWristWatchRegularDuotone };
export type { WristWatchRegularDuotoneProps };
