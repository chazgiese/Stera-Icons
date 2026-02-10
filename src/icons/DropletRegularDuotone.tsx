import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletRegularDuotone = memo(
  forwardRef<SVGSVGElement, DropletRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-duotone" {...props}>
      <path d="m12.48 2.42.02.02.06.05a20 20 0 0 1 1.05.93c.67.63 1.56 1.52 2.46 2.57a21 21 0 0 1 2.5 3.56 9 9 0 0 1 1.18 4.09c0 4.44-3.43 8.11-7.75 8.11v-1.5c3.42 0 6.25-2.92 6.25-6.61 0-1.06-.38-2.21-1-3.38a19 19 0 0 0-2.32-3.3A31 31 0 0 0 12 4l.46-.4h.01a.75.75 0 0 0 0-1.17M11.53 2.42l.01-.01zM12.26 2.3" opacity={0.4} />
        <path fill="currentColor" d="M11.53 2.42a.75.75 0 1 1 .94 1.16l-.01.01-.27.23a29 29 0 0 0-3.12 3.15c-.85 1-1.7 2.12-2.32 3.29a7.4 7.4 0 0 0-1 3.38c0 3.69 2.83 6.61 6.25 6.61v1.5c-4.32 0-7.75-3.67-7.75-8.11 0-1.4.5-2.8 1.18-4.09a21 21 0 0 1 2.5-3.56 33 33 0 0 1 3.5-3.5l.07-.05.02-.01z" />
    </IconBase>
  ))
);

DropletRegularDuotone.displayName = 'DropletRegularDuotone';

// Triple export pattern (lucide-react style)
export { DropletRegularDuotone, DropletRegularDuotone as DropletRegularDuotoneIcon, DropletRegularDuotone as SiDropletRegularDuotone };
export default DropletRegularDuotone;
export type { DropletRegularDuotoneProps };
