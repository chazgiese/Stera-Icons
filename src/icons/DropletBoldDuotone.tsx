import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DropletBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletBoldDuotone = memo(
  forwardRef<SVGSVGElement, DropletBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 1c.28 0 .51.13.72.3l.27.22a35 35 0 0 1 3.76 3.68 23 23 0 0 1 2.88 3.99A10 10 0 0 1 21 13.82c0 5.05-4 9.18-9 9.18v-2c3.84 0 7-3.2 7-7.18 0-1.13-.42-2.38-1.13-3.67a21 21 0 0 0-2.62-3.63A35 35 0 0 0 12 3.31z" opacity={.4} />
        <path fill="currentColor" d="M12 3.3a34 34 0 0 0-3.25 3.22 21 21 0 0 0-2.62 3.63A8 8 0 0 0 5 13.82 7.1 7.1 0 0 0 12 21v2c-5 0-9-4.13-9-9.18 0-1.6.58-3.2 1.37-4.63.8-1.45 1.85-2.82 2.88-3.99A37 37 0 0 1 11 1.52l.27-.22.07-.06q.28-.23.65-.24z" />
    </IconBase>
  ))
);

DropletBoldDuotone.displayName = 'DropletBoldDuotone';

// Triple export pattern (lucide-react style)
export { DropletBoldDuotone, DropletBoldDuotone as DropletBoldDuotoneIcon, DropletBoldDuotone as SiDropletBoldDuotone };
export type { DropletBoldDuotoneProps };
