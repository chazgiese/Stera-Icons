import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FortressFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FortressFillDuotone = memo(
  forwardRef<SVGSVGElement, FortressFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.14 3.01a1 1 0 0 1 .75.54L5.62 5h.76l.73-1.45.07-.12A1 1 0 0 1 8 3h2a1 1 0 0 1 1 1v4h2V4a1 1 0 0 1 1-1h2l.14.01a1 1 0 0 1 .75.54L17.62 5h.76l.73-1.45.07-.12A1 1 0 0 1 20 3h2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3a2 2 0 1 0-4 0v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2z" opacity={.4} />
        <path fill="currentColor" d="M10 19a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zM23 19a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zM6 8.5a1 1 0 0 1 1 1V11a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1M18 8.5a1 1 0 0 1 1 1v1.6a1 1 0 0 1-2 0V9.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FortressFillDuotone.displayName = 'FortressFillDuotone';

// Triple export pattern (lucide-react style)
export { FortressFillDuotone, FortressFillDuotone as FortressFillDuotoneIcon, FortressFillDuotone as SiFortressFillDuotone };
export type { FortressFillDuotoneProps };
