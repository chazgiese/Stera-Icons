import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WristWatchRegularProps = Omit<IconBaseProps, 'children'>;

const WristWatchRegular = memo(
  forwardRef<SVGSVGElement, WristWatchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrist-watch" {...props}>
      <path d="M12 8.75c.41 0 .75.34.75.75v2.19l1.28 1.28a.75.75 0 1 1-1.06 1.06l-1.5-1.5a.8.8 0 0 1-.22-.53V9.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M14 1.75a2.75 2.75 0 0 1 2.75 2.75v2.7a6.73 6.73 0 0 1 0 9.6v2.7A2.75 2.75 0 0 1 14 22.25h-4a2.75 2.75 0 0 1-2.75-2.75v-2.7a6.73 6.73 0 0 1 0-9.6V4.5A2.75 2.75 0 0 1 10 1.75zm1.25 16.17a6.7 6.7 0 0 1-6.5 0v1.58c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25zM12 6.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m-2-3.5c-.69 0-1.25.56-1.25 1.25v1.58a6.7 6.7 0 0 1 6.5 0V4.5c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WristWatchRegular.displayName = 'WristWatchRegular';

// Triple export pattern (lucide-react style)
export { WristWatchRegular, WristWatchRegular as WristWatchRegularIcon, WristWatchRegular as SiWristWatchRegular };
export default WristWatchRegular;
export type { WristWatchRegularProps };
