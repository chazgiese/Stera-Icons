import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WifiSlashFillProps = Omit<IconBaseProps, 'children'>;

const WifiSlashFill = memo(
  forwardRef<SVGSVGElement, WifiSlashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wifi-slash-fill" {...props}>
      <path fill="currentColor" d="m14.55 17.38-1.12 1.15a2 2 0 0 1-2.86 0l-2.02-2.08c-.37-.38-.38-1.01.06-1.33a6 6 0 0 1 2.61-1.07zM3.3 3.3a1 1 0 0 1 1.4 0l14 14a1 1 0 0 1-1.4 1.4l-14-14a1 1 0 0 1 0-1.4M9.57 12.4q-1.27.43-2.3 1.25c-.45.35-1.1.36-1.49-.04l-.66-.7a.93.93 0 0 1 .03-1.35q.98-.86 2.14-1.44zM12 9c2.6 0 5 .96 6.85 2.56.42.35.41.97.04 1.36l-.67.69c-.4.4-1.04.4-1.48.04q-.4-.31-.83-.56L11.83 9zM5.83 8.66q-1.08.62-2.02 1.44c-.43.37-1.07.37-1.46-.03l-.67-.69a.95.95 0 0 1 .02-1.37q.92-.84 1.96-1.52zM12 4c3.95 0 7.56 1.52 10.3 4.01.4.37.4.99.02 1.37l-.67.69c-.39.4-1.03.4-1.46.03A12.4 12.4 0 0 0 10 7.17l-2.48-2.5Q9.65 4.02 12 4" />
    </IconBase>
  ))
);

WifiSlashFill.displayName = 'WifiSlashFill';

// Triple export pattern (lucide-react style)
export { WifiSlashFill, WifiSlashFill as WifiSlashFillIcon, WifiSlashFill as SiWifiSlashFill };
export default WifiSlashFill;
export type { WifiSlashFillProps };
