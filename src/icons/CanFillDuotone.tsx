import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CanFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CanFillDuotone = memo(
  forwardRef<SVGSVGElement, CanFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-fill-duotone" {...props}>
      <path fill="currentColor" d="M18.47 5.31A4 4 0 0 1 19 7.3v9.4a4 4 0 0 1-.53 1.99l-1.31 2.3A2 2 0 0 1 15.42 22H8.58a2 2 0 0 1-1.74-1l-1.31-2.31A4 4 0 0 1 5 16.7V7.3a4 4 0 0 1 .53-1.99l.76-1.33.21.02h11l.21-.02z" opacity={.4} />
        <path fill="currentColor" d="M17.5 2a1 1 0 1 1 0 2h-11a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CanFillDuotone.displayName = 'CanFillDuotone';

// Triple export pattern (lucide-react style)
export { CanFillDuotone, CanFillDuotone as CanFillDuotoneIcon, CanFillDuotone as SiCanFillDuotone };
export default CanFillDuotone;
export type { CanFillDuotoneProps };
