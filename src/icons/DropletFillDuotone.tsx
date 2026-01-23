import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletFillDuotone = memo(
  forwardRef<SVGSVGElement, DropletFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.42 3.82c-.73.66-1.7 1.6-2.67 2.7a21 21 0 0 0-2.62 3.63A8 8 0 0 0 5 13.82 7.1 7.1 0 0 0 12 21c3.84 0 7-3.2 7-7.18 0-1.13-.42-2.38-1.13-3.67a21 21 0 0 0-2.62-3.63A35 35 0 0 0 12 3.31z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1h.1l.06.01h.01a1 1 0 0 1 .45.2l.01.01.02.02.07.06.27.22a35 35 0 0 1 3.76 3.68 23 23 0 0 1 2.88 3.99A10 10 0 0 1 21 13.82c0 5.05-4 9.18-9 9.18s-9-4.13-9-9.18c0-1.6.58-3.2 1.37-4.63.8-1.45 1.85-2.82 2.88-3.99A37 37 0 0 1 11 1.52l.27-.22.07-.06.02-.02h.01A1 1 0 0 1 12 1m-.58 2.82c-.73.66-1.7 1.6-2.67 2.7a21 21 0 0 0-2.62 3.63A8 8 0 0 0 5 13.82 7.1 7.1 0 0 0 12 21c3.84 0 7-3.2 7-7.18 0-1.13-.42-2.38-1.13-3.67a21 21 0 0 0-2.62-3.63A35 35 0 0 0 12 3.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletFillDuotone.displayName = 'DropletFillDuotone';

// Triple export pattern (lucide-react style)
export { DropletFillDuotone, DropletFillDuotone as DropletFillDuotoneIcon, DropletFillDuotone as SiDropletFillDuotone };
export default DropletFillDuotone;
export type { DropletFillDuotoneProps };
