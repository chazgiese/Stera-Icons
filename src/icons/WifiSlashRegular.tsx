import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiSlashRegularProps = Omit<IconBaseProps, 'children'>;

const WifiSlashRegular = memo(
  forwardRef<SVGSVGElement, WifiSlashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wifi-slash" {...props}>
      <path d="M3.3 3.3a1 1 0 0 1 1.4 0l14 14a1 1 0 1 1-1.4 1.4l-14-14a1 1 0 0 1 0-1.4M14.2 17.02l-1.12 1.16c-.6.6-1.57.6-2.16 0l-1.67-1.73c-.4-.42-.32-.96.02-1.18a5 5 0 0 1 2.41-.76zM9.18 12q-1.21.46-2.23 1.26c-.27.22-.62.19-.8 0l-.68-.69c-.2-.2-.17-.49 0-.64q1-.86 2.2-1.44zM12.34 9.5c2.35.08 4.5.98 6.19 2.43.17.15.2.44 0 .64l-.67.69c-.19.19-.54.22-.81 0a8 8 0 0 0-2.2-1.24zM5.46 8.29q-1.06.63-1.98 1.43c-.24.22-.59.2-.78 0l-.66-.68a.45.45 0 0 1 0-.66q.92-.85 1.98-1.53zM12 4.5c3.82 0 7.3 1.46 9.96 3.88.18.16.2.45 0 .66l-.66.68c-.2.2-.54.22-.78 0A12.9 12.9 0 0 0 9.56 6.73L7.91 5.08Q9.86 4.5 12 4.5" />
    </IconBase>
  ))
);

WifiSlashRegular.displayName = 'WifiSlashRegular';

// Triple export pattern (lucide-react style)
export { WifiSlashRegular, WifiSlashRegular as WifiSlashRegularIcon, WifiSlashRegular as SiWifiSlashRegular };
export default WifiSlashRegular;
export type { WifiSlashRegularProps };
