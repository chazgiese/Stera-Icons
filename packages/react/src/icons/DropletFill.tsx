import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DropletFillProps = Omit<IconBaseProps, 'children'>;

const DropletFill = memo(
  forwardRef<SVGSVGElement, DropletFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1h.1l.06.01h.01a1 1 0 0 1 .45.2l.01.01.02.02.07.06.27.22a35 35 0 0 1 3.76 3.68 23 23 0 0 1 2.88 3.99A10 10 0 0 1 21 13.82c0 5.05-4 9.18-9 9.18s-9-4.13-9-9.18c0-1.6.58-3.2 1.37-4.63.8-1.45 1.85-2.82 2.88-3.99A37 37 0 0 1 11 1.52l.27-.22.07-.06.02-.02h.01A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

DropletFill.displayName = 'DropletFill';

// Triple export pattern (lucide-react style)
export { DropletFill, DropletFill as DropletFillIcon, DropletFill as SiDropletFill };
export type { DropletFillProps };
