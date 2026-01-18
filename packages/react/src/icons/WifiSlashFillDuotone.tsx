import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WifiSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WifiSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, WifiSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14q.32 0 .62.03l2.63 2.63-1.82 1.87a2 2 0 0 1-2.86 0l-2.02-2.08c-.37-.38-.38-1.01.06-1.33A5.7 5.7 0 0 1 12 14M10.7 12.11a7.6 7.6 0 0 0-3.44 1.54c-.44.35-1.08.36-1.48-.04l-.66-.7a.93.93 0 0 1 .03-1.35q1.39-1.2 3.12-1.87zM12 9c2.6 0 5 .96 6.85 2.56.41.35.41.97.03 1.36l-.66.69c-.4.4-1.04.4-1.48.04a8 8 0 0 0-3.16-1.49l-3.06-3.05Q11.25 9 12 9M12 4c3.95 0 7.56 1.52 10.3 4.01.4.37.4.99.02 1.37l-.67.69c-.39.4-1.03.4-1.46.03A12.4 12.4 0 0 0 8.83 7.42L6.46 5.04A15 15 0 0 1 12 4M6.76 8.17A13 13 0 0 0 3.8 10.1c-.43.37-1.07.37-1.46-.03l-.67-.69a.95.95 0 0 1 .02-1.37 16 16 0 0 1 2.84-2.05z" opacity={0.4} />
        <path fill="currentColor" d="M3.3 3.3a1 1 0 0 1 1.4 0l14 14a1 1 0 0 1-1.4 1.4l-14-14a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

WifiSlashFillDuotone.displayName = 'WifiSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { WifiSlashFillDuotone, WifiSlashFillDuotone as WifiSlashFillDuotoneIcon, WifiSlashFillDuotone as SiWifiSlashFillDuotone };
export type { WifiSlashFillDuotoneProps };
