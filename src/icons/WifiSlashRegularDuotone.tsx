import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WifiSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WifiSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, WifiSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wifi-slash-duotone" {...props}>
      <path d="M12 14.5q.91 0 1.74.3l1.25 1.25a1 1 0 0 1-.24.4l-1.67 1.73c-.6.6-1.57.6-2.16 0l-1.67-1.73c-.4-.42-.32-.96.02-1.18q1.21-.75 2.73-.77M10.57 11.63a8 8 0 0 0-3.62 1.63c-.27.22-.62.19-.8 0l-.68-.69c-.2-.2-.17-.49 0-.64Q7 10.63 8.93 10zM12 9.5c2.48 0 4.76.91 6.53 2.43.17.15.2.44 0 .64l-.67.69c-.19.19-.54.22-.81 0a8 8 0 0 0-4.47-1.74L10.65 9.6A10 10 0 0 1 12 9.5M6.62 7.68a13 13 0 0 0-3.14 2.04c-.24.22-.59.2-.78 0l-.66-.68a.45.45 0 0 1 0-.66q1.4-1.28 3.1-2.18zM12 4.5c3.82 0 7.3 1.46 9.96 3.88.18.16.2.45 0 .66l-.66.68c-.2.2-.54.22-.78 0A12.9 12.9 0 0 0 8.15 7.1L6.6 5.53Q9.12 4.51 12 4.5" opacity={0.4} />
        <path fill="currentColor" d="M3.47 3.47c.3-.3.77-.3 1.06 0l14 14a.75.75 0 1 1-1.06 1.06l-14-14a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

WifiSlashRegularDuotone.displayName = 'WifiSlashRegularDuotone';

// Triple export pattern (lucide-react style)
export { WifiSlashRegularDuotone, WifiSlashRegularDuotone as WifiSlashRegularDuotoneIcon, WifiSlashRegularDuotone as SiWifiSlashRegularDuotone };
export default WifiSlashRegularDuotone;
export type { WifiSlashRegularDuotoneProps };
