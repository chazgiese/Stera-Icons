import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchRegularProps = Omit<IconBaseProps, 'children'>;

const WristWatchRegular = memo(
  forwardRef<SVGSVGElement, WristWatchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch" {...props}>
      <path fill="currentColor" d="M12 8.75c.41 0 .75.34.75.75v2.19l1.28 1.28a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.8.8 0 0 1-.22-.53V9.5c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M14 .25A2.75 2.75 0 0 1 16.75 3v2.88a7.74 7.74 0 0 1 0 12.24V21A2.75 2.75 0 0 1 14 23.75h-4A2.75 2.75 0 0 1 7.25 21v-2.88a7.73 7.73 0 0 1 0-12.24V3A2.75 2.75 0 0 1 10 .25zm1.25 18.79a7.7 7.7 0 0 1-6.5 0V21c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25zM12 5.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5m-2-4c-.69 0-1.25.56-1.25 1.25v1.96a7.7 7.7 0 0 1 6.5 0V3c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchRegular.displayName = 'WristWatchRegular';

// Triple export pattern (lucide-react style)
export { WristWatchRegular, WristWatchRegular as WristWatchRegularIcon, WristWatchRegular as SiWristWatchRegular };
export default WristWatchRegular;
export type { WristWatchRegularProps };
